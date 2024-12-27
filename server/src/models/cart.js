const db = require('./db');

// Модель корзины
const Cart = {
    // Метод для получения корзины по user_id
    getByUserId: async (userId) => {
        const result = await db.query('SELECT * FROM cart WHERE user_id = $1', [userId]);
        return result.rows[0];
    }
};

module.exports = Cart;
