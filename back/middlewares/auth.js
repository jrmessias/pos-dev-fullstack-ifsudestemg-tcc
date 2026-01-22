const jwt = require("jsonwebtoken");

function auth(req, res, next) {
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
        return res.status(401).json({ error: 'Não autenticado' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.userId = decoded.id;
        req.userRole = decoded.role;
        next();
    } catch (err) {
        console.log('JWT INVÁLIDO', err.message);
        return res.status(401).json({ error: 'Token inválido' });
    }
}

module.exports = auth;
