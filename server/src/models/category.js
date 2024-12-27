const db = require('./db');

// Модель категории
const Category = {
    getAll: async () => {
        const result = await db.query('SELECT * FROM categories');
        return result.rows;
    }
};

module.exports = Category;
