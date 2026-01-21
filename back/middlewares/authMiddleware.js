const jwt = require("jsonwebtoken");

function authMiddleware(req, res, next) {
    const token = req.cookies && req.cookies.access_token;

    if (!token) {
        return res.status(401).json({ message: "Não autenticado" });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        return next();
    } catch (error) {
        return res.status(401).json({ message: "Token inválido" });
    }
}

module.exports = authMiddleware;
