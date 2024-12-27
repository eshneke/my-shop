const jwt = require('jsonwebtoken');

// Middleware для проверки авторизации
const authMiddleware = (req, res, next) => {
    const token = req.header('Authorization')?.replace('Bearer ', '');
    
    if (!token) return res.status(401).send('Access denied');

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded; // Сохраняем информацию о пользователе в req
        next();
    } catch (error) {
        res.status(400).send('Invalid token');
    }
};

module.exports = authMiddleware;
