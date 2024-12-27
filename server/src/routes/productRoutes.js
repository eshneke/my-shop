const express = require('express');
const { getProducts, getProductById, createProduct, updateProduct, deleteProduct } = require('../controllers/productController');
const router = express.Router();

// Получить все продукты
router.get('/', getProducts);

// Получить продукт по ID
router.get('/:id', getProductById);

// Создать продукт
router.post('/', createProduct);

// Обновить продукт
router.put('/:id', updateProduct);

// Удалить продукт
router.delete('/:id', deleteProduct);

module.exports = router;
