const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const {loginSchema} = require("../../validators/authValidator");
const {findUserByEmail} = require("../../repositories/userRepository");
const {User} = require("../../models");
const {Op} = require("sequelize");

exports.login = async function (req, res) {
    try {
        // validação do payload
        const data = loginSchema.parse(req.body);

        // busca usuário
        const user = await findUserByEmail(data.email);
        if (!user) {
            return res.status(401).json({message: "Credenciais inválidas"});
        }

        // // valida senha
        const passwordMatch = await bcrypt.compare(
            data.password,
            user.password
        );

        if (!passwordMatch) {
            return res.status(401).json({message: "Credenciais inválidas"});
        }

        // gera token
        const token = jwt.sign(
            {id: user.id, email: user.email, role: user.role},
            process.env.JWT_SECRET,
            {expiresIn: '5m'}
        );

        // cookie httpOnly
        res.cookie("token", token, {
            // domain: "localhost",
            httpOnly: true,
            secure: false,//process.env.NODE_ENV === "production",
            sameSite: "lax",
            path: '/',
            // maxAge: 5 * 60 * 1000, // 5 minutes * 60 seconds * 1000 milliseconds = 300000 ms
        });

        return res.json({
            token,
            user: {
                name: user.name,
                email: user.email,
                role: user.role,
            },
        });
    } catch (err) {
        // console.log(err);
        if (err.name === "ZodError") {
            return res.status(400).json({
                message: "Dados inválidos",
                errors: err.errors,
            });
        }

        // console.log(err);

        return res.status(500).json({message: "Erro interno"});
    }
}

exports.me = async function (req, res) {
    res.json({
        id: req.userId,
        role: req.userRole
    });
    //
    // res.json({
    //     id: user.id,
    //     name: user.name,
    //     email: user.email,
    //     role: user.role,
    // });
}

module.exports = exports;
