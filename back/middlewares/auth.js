const jwt = require("jsonwebtoken");
const {User} = require("../models");

async function auth(req, res, next) {
    const token = req.cookies.token;

    if (!token) {
        return res.status(401).json({error: 'Não autenticado', code: 'TOKEN_MISSING'});
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = (await User.findByPk(decoded.id, {attributes: ['id', 'name', 'email', 'role']})).dataValues;
        next();
    } catch (err) {
        if (err.name === 'TokenExpiredError') {
            return res.status(401).json({
                error: 'Sessão expirada',
                code: 'TOKEN_EXPIRED'
            });
        }

        return res.status(401).json({error: 'Token inválido', code: 'TOKEN_INVALID'});
    }
}

module.exports = auth;
