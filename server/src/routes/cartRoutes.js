const express = require('express');
const { getCart, addProductToCart, removeProductFromCart } = require('../controllers/cartController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

// Получить корзину пользователя по user_id
router.get('/', authMiddleware, getCart);

// Добавить продукт в корзину
router.put('/', authMiddleware, addProductToCart);

// Удалить продукт из корзины
router.delete('/', authMiddleware, removeProductFromCart);

module.exports = router;
