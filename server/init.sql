CREATE TABLE users (
    user_id SERIAL PRIMARY KEY, 
    login VARCHAR(50) UNIQUE NOT NULL, 
    password VARCHAR(100) NOT NULL
);

CREATE TABLE categories (
    category_id SERIAL PRIMARY KEY,
    category VARCHAR(50) NOT NULL
);

CREATE TABLE products (
    product_id SERIAL PRIMARY KEY,
    title VARCHAR(50) NOT NULL,
    description TEXT,
    price DECIMAL(10, 2) NOT NULL,
    category_id INTEGER REFERENCES categories(category_id)
);

CREATE TABLE pictures (
    picture_id SERIAL PRIMARY KEY,
    picture VARCHAR(255) NOT NULL
);

CREATE TABLE cart (
    cart_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id INTEGER REFERENCES users(user_id)
);

CREATE TABLE cart_product (
    cart_id UUID REFERENCES cart(cart_id),
    product_id INTEGER REFERENCES products(product_id),
    PRIMARY KEY (cart_id, product_id)
);
