import axios from 'axios';

const API_URL = 'http://localhost:5000'; // URL вашего API

// Функция для регистрации пользователя
export const registerUser = async (login, password) => {
    const response = await axios.post(`${API_URL}/auth/register`, { login, password });
    return response.data;
};

// Функция для авторизации пользователя
export const loginUser = async (login, password) => {
    const response = await axios.post(`${API_URL}/auth/login`, { login, password });
    return response.data;
};

// Функция для получения всех продуктов
export const fetchProducts = async () => {
    const response = await axios.get(`${API_URL}/products`);
    return response.data;
};

// Функция для добавления продукта в корзину
export const addProductToCart = async (token, productId) => {
    const response = await axios.put(`${API_URL}/cart`, { productId }, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return response.data;
};

// Функция для получения корзины
export const fetchCart = async (token) => {
    const response = await axios.get(`${API_URL}/cart`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return response.data;
};
