import React, { useState } from 'react';
import Header from './components/Header';
import Auth from './components/Auth';
import Products from './components/Products';
import Cart from './components/Cart';

function App() {
    const [token, setToken] = useState(null);

    return (
        <div>
            <Header token={token} setToken={setToken} />
            {token ? (
                <>
                    <Cart token={token} />
                    <Products token={token} />
                </>
            ) : (
                <Auth setToken={setToken} />
            )}
        </div>
    );
}

export default App;
