import React, { useEffect, useState } from 'react';
import { fetchProducts, addProductToCart } from '../api';

function Products({ token }) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getProducts = async () => {
            const data = await fetchProducts();
            setProducts(data);
        };

        getProducts();
    }, []);

    const handleAddToCart = async (productId) => {
        await addProductToCart(token, productId);
        alert('Product added to cart!');
    };

    return (
        <div>
            <h2>Products</h2>
            <ul>
                {products.map(product => (
                    <li key={product.product_id}>
                        {product.title} - ${product.price}
                        <button onClick={() => handleAddToCart(product.product_id)}>Add to cart</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Products;
