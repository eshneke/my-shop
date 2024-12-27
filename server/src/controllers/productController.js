const db = require('../models/db');

// Получить все продукты
const getProducts = async (req, res) => {
    try {
        const products = await db.query('SELECT * FROM product');
        res.json(products.rows);
    } catch (error) {
        res.status(500).send('Server error');
    }
};

// Получить продукт по ID
const getProductById = async (req, res) => {
    const { id } = req.params;
    try {
        const product = await db.query('SELECT * FROM product WHERE product_id = $1', [id]);
        if (product.rows.length === 0) return res.status(404).send('Product not found');
        res.json(product.rows[0]);
    } catch (error) {
        res.status(500).send('Server error');
    }
};

// Создать продукт
const createProduct = async (req, res) => {
    const { title, description, price, category_id } = req.body;
    try {
        await db.query('INSERT INTO product (title, description, price, category_id) VALUES ($1, $2, $3, $4)', [title, description, price, category_id]);
        res.status(201).send('Product created');
    } catch (error) {
        res.status(500).send('Server error');
    }
};

// Обновить продукт
const updateProduct = async (req, res) => {
    const { id } = req.params;
    const { title, description, price, category_id } = req.body;
    try {
        await db.query('UPDATE product SET title = $1, description = $2, price = $3, category_id = $4 WHERE product_id = $5', [title, description, price, category_id, id]);
        res.send('Product updated');
    } catch (error) {
        res.status(500).send('Server error');
    }
};

// Удалить продукт
const deleteProduct = async (req, res) => {
    const { id } = req.params;
    try {
        await db.query('DELETE FROM product WHERE product_id = $1', [id]);
        res.send('Product deleted');
    } catch (error) {
        res.status(500).send('Server error');
    }
};

module.exports = { getProducts, getProductById, createProduct, updateProduct, deleteProduct };
