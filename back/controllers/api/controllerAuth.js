const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const {loginSchema, registerSchema} = require("../../validators/authValidator");
const {findUserByEmail, createUser} = require("../../repositories/userRepository");
const {User} = require("../../models");

const accessCookieOptions = {
    // domain: "127.0.0.1",
    httpOnly: true,
    secure: false,//process.env.NODE_ENV === "production", // true só em HTTPS
    sameSite: 'lax',
    path: '/',         // precisa bater com o cookie original
    // maxAge: 5 * 60 * 1000, // 5 minutes * 60 seconds * 1000 milliseconds = 300000 ms
};

const refreshCookieOptions = {
    httpOnly: true,
    secure: false,
    sameSite: 'lax',
    path: '/'
};

function buildAccessTokenPayload(user) {
    return {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role
    };
}

function generateAccessToken(user) {
    return jwt.sign(
        buildAccessTokenPayload(user),
        process.env.JWT_SECRET,
        {expiresIn: '15m'}
    );
}

function generateRefreshToken(user) {
    return jwt.sign(
        {id: user.id},
        process.env.JWT_REFRESH_SECRET || process.env.JWT_SECRET,
        {expiresIn: '1d'}
    );
}

exports.login = async function (req, res) {
    try {
        const data = loginSchema.parse(req.body);

        const user = await findUserByEmail(data.email);
        if (!user) {
            return res.status(401).json({message: "Credenciais inválidas"});
        }

        const passwordMatch = await bcrypt.compare(
            data.password,
            user.password
        );

        if (!passwordMatch) {
            return res.status(401).json({message: "Credenciais inválidas"});
        }


        const token = generateAccessToken(user);
        const refreshToken = generateRefreshToken(user);

        res.cookie("token", token, accessCookieOptions);
        res.cookie("refresh_token", refreshToken, refreshCookieOptions);

        return res.json({
            token,
            user: {
                name: user.name,
                email: user.email,
                role: user.role,
            },
        });
    } catch (err) {
        if (err.name === "ZodError") {
            return res.status(400).json({
                message: "Dados inválidos",
                errors: err.errors,
            });
        }

        return res.status(500).json({message: "Erro interno"});
    }
}

exports.me = async function (req, res) {
    res.json({
        ...req.user,
    });
}

exports.refreshToken = async function (req, res) {
    const refreshToken = req.cookies.refresh_token;

    if (!refreshToken) {
        return res.status(401).json({error: 'Refresh token ausente', code: 'REFRESH_TOKEN_MISSING'});
    }

    try {
        const decoded = jwt.verify(
            refreshToken,
            process.env.JWT_REFRESH_SECRET || process.env.JWT_SECRET
        );

        const user = await User.findByPk(decoded.id, {
            attributes: ['id', 'name', 'email', 'role']
        });

        if (!user) {
            return res.status(401).json({error: 'Usuário não encontrado', code: 'REFRESH_USER_NOT_FOUND'});
        }

        const newAccessToken = generateAccessToken(user);
        res.cookie('token', newAccessToken, accessCookieOptions);

        return res.json({message: 'Token atualizado com sucesso'});
    } catch (err) {
        return res.status(401).json({error: 'Refresh token inválido', code: 'REFRESH_TOKEN_INVALID'});
    }
}

exports.logout = async function (req, res) {
    const clearCookies = () => {
        res.clearCookie('token', accessCookieOptions);
        res.clearCookie('refresh_token', refreshCookieOptions);
        res.clearCookie('connect.sid');
    };

    if (!req.session) {
        clearCookies();
        return res.status(200).json({message: "Logout realizado com sucesso"});
    }

    req.session.destroy((err) => {
        if (err) {
            return res.status(500).json({ message: "Erro ao fechar sessão" });
        }
        clearCookies();

        return res.status(200).json({ message: "Logout realizado com sucesso" });
    });
}

exports.register = async function (req, res) {
    try {
        const data = registerSchema.parse(req.body);
        
        const existingUser = await findUserByEmail(data.email);
        if (existingUser) {
            return res.status(409).json({
                message: "Email já cadastrado",
            });
        }
        
        const hashedPassword = await bcrypt.hash(data.password, 10);
        
        const user = await createUser({
            name: data.name,
            email: data.email,
            password: hashedPassword,
            role: data.role,
        });

        return res.status(201).json({
            message: "Usuário registrado com sucesso",
            user: {
                id: user.id,
                name: user.name,
                email: user.email,
                role: user.role,
            },
        });
    } catch (err) {
        if (err.name === "ZodError") {
            return res.status(400).json({
                message: "Dados inválidos",
                errors: err.errors,
            });
        }
        
        console.error(err);
        return res.status(500).json({
            message: "Erro ao registrar usuário",
        });
    }
}

module.exports = exports;
