const { Pool } = require('pg');

// Создаем пул соединений к базе данных
const pool = new Pool({
    user: process.env.POSTGRES_USER,
    host: 'db', // имя сервиса из docker-compose
    database: process.env.POSTGRES_DB,
    password: process.env.POSTGRES_PASSWORD,
    port: 5432,
});

// Экспортируем запросы к базе данных
module.exports = {
    query: (text, params) => pool.query(text, params),
};
