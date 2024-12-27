import React, { useEffect, useState } from 'react';
import { fetchCart } from '../api';

function Cart({ token }) {
    const [cart, setCart] = useState([]);
    
    useEffect(() => {
        const getCart = async () => {
            const data = await fetchCart(token);
            setCart(data);
        };

        getCart();
    }, [token]);

    return (
        <div>
            <h2>Your Cart</h2>
            <ul>
                {cart.map(item => (
                    <li key={item.product_id}>
                        {item.title} - ${item.price}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Cart;
