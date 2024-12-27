const db = require('../models/db');

// Получить корзину пользователя
const getCart = async (req, res) => {
    const userId = req.user.userId; // Получаем userId из токена
    try {
        const cart = await db.query('SELECT * FROM cart WHERE user_id = $1', [userId]);
        res.json(cart.rows);
    } catch (error) {
        res.status(500).send('Server error');
    }
};

// Добавить продукт в корзину
const addProductToCart = async (req, res) => {
    const userId = req.user.userId;  
    const { productId } = req.body; // productId из запроса
    try {
        await db.query('INSERT INTO cart_product (cart_id, product_id) VALUES ($1, $2)', [cart_id, productId]);
        res.send('Product added to cart');
    } catch (error) {
        res.status(500).send('Server error');
    }
};

// Удалить продукт из корзины
const removeProductFromCart = async (req, res) => {
    const userId = req.user.userId;
    const { productId } = req.body;
    try {
        await db.query('DELETE FROM cart_product WHERE product_id = $1 AND cart_id = $2', [productId, cart_id]);
        res.send('Product removed from cart');
    } catch (error) {
        res.status(500).send('Server error');
    }
};

module.exports = { getCart, addProductToCart, removeProductFromCart };
