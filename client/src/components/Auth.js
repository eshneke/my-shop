import React, { useState } from 'react';
import { registerUser, loginUser } from '../api';

function Auth({ setToken }) {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [isRegistering, setIsRegistering] = useState(true);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (isRegistering) {
            await registerUser(login, password);
        } else {
            const data = await loginUser(login, password);
            setToken(data.token);
        }
    };

    return (
        <div>
            <h2>{isRegistering ? 'Register' : 'Login'}</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Login"
                    value={login}
                    onChange={(e) => setLogin(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">{isRegistering ? 'Register' : 'Login'}</button>
            </form>
            <button onClick={() => setIsRegistering(!isRegistering)}>
                Switch to {isRegistering ? 'Login' : 'Register'}
            </button>
        </div>
    );
}

export default Auth;
