const db = require('./db');

// Модель продукта
const Product = {
    // Метод для создания нового продукта
    create: async (title, description, price, category_id) => {
        await db.query('INSERT INTO products (title, description, price, category_id) VALUES ($1, $2, $3, $4)', [title, description, price, category_id]);
    },
    
    // Метод для получения всех продуктов
    getAll: async (filters) => {
        let query = 'SELECT * FROM products';
        // Реализуйте фильтрацию на основе filters
        return await db.query(query);
    }
};

module.exports = Product;

