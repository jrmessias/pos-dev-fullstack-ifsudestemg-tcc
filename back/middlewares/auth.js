const jwt = require("jsonwebtoken");
const {User} = require("../models");

async function auth(req, res, next) {
    // const token = req.cookies;
    // console.log('Cookies recebidos:', req.cookies);
    //
    // if (!token) return res.status(401).json({ error: 'Não autenticado' });
    //
    // try {
    //     const decoded = jwt.verify(token, process.env.JWT_SECRET);
    //     req.user = decoded;
    //     return next();
    // } catch (error) {
    //     return res.status(401).json({ message: "Token inválido" });
    // }

    ////
    const token = req.cookies.token;
    console.log('Cookies recebidos:', req.cookies);

    if (!token) {
        console.log('COOKIE NÃO RECEBIDO');
        return res.status(401).json({error: 'Não autenticado'});
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        console.log('JWT DECODADO:', decoded);
        req.user = (await User.findByPk(decoded.id, {attributes: ['id', 'name', 'email', 'role']})).dataValues;
        next();
    } catch (err) {
        console.log('JWT INVÁLIDO', err.message);
        return res.status(401).json({error: 'Token inválido'});
    }
}

module.exports = auth;
