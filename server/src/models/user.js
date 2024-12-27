const db = require('./db');

// Модель пользователя
const User = {
    // Метод для создания нового пользователя
    create: async (login, password) => {
        const result = await db.query('INSERT INTO users (login, password) VALUES ($1, $2) RETURNING user_id', [login, password]);
        return result.rows[0].user_id;
    },
    
    // Метод для получения пользователя по логину
    getByLogin: async (login) => {
        const result = await db.query('SELECT * FROM users WHERE login = $1', [login]);
        return result.rows[0];
    }
};

module.exports = User;

