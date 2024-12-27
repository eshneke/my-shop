import React from 'react';

function Header({ token, setToken }) {
    return (
        <header>
            <h1>My Shop</h1>
            {token ? (
                <button onClick={() => setToken(null)}>Logout</button>
            ) : (
                <span>Please login to purchase</span>
            )}
        </header>
    );
}

export default Header;
