# my-shop
my-shop is postgresql based online shopping project

Сделал проект: серверную часть и клиентскую часть интернет магазина с использованием expressjs и PostgreSQL (docker): 
Обернул результат в docker контейнер.
Есть имплементация защищенных запросов, фильтрации товаров по: login, user_id, product_id, title, price, category_id, category.
Есть скрипты создания базы данных в PostgreSQL.
Серверное приложение на expressjs и PostgreSQL.
Клиентское приложение на React.

Ключевые моменты, которую реализовал:

1. Авторизацию через логин и пароль с использованием Bearer-токена
2. Обработку ошибок (отправка соответствующих http кодов в ответ запроса)
3. CRUD API для товаров
4. Работа с файлами (сохранение в файловую систему, чтение)
5. Асинхронность (async/await)
 
Минимальная структура данных PostgreSQL:

user {user_id уникальный идентификатор пользователя, login: уникальный логин пользователя, password: пароль пользователя}

user_product {login: уникальный логин пользователя, product.product_id}

product {product_id: уникальный идентификатор продукта, title: название, description: описание, price: цена, picture.picture_id: уникальный   идентификатор изображения товара, category.category_id: уникальный идентификатор категории товара}

picture {picture_id: уникальный идентификатор товара, picture: изображение}

category {category_id: уникальный идентификатор товара, category: категория}

cart {cart_id: идентификатор корзины (32 битный, генерируемый без вероятности повторения), user.userid: уникальный логин пользователя }

cart_user(cart.card_id, product.product_id)

API:

POST /register {login, password} : Регистрация пользователя
POST /login {login, password} : Авторизация пользователя
GET /products : получить список всех товаров, с возможностью фильтрации
GET /products/1 : получить товар с id = 1
GET /products/categories : получить список категорий
GET /products/categories/:category : получить список товаров категории :category
GET /cart?user_id=1 : получить корзину товаров пользователя с id 1
PUT /cart : добавить продукт в корзину
DELETE /cart : удалить товар из корзины
POST /products : создать продукт
PUT /products/1 : изменить продукт
DELETE /products/1 : удалить продукт





Markdown


# Интернет-магазин

## Описание проекта
Этот проект представляет собой интернет-магазин, реализованный с использованием Node.js, Express и PostgreSQL. Он включает в себя авторизацию пользователей, CRUD операции для продуктов и обработку корзины.

## Структура проекта
- **client/** - клиентская часть приложения (может быть React или другой фреймворк)
- **server/** - серверная часть приложения
  - **src/** - основная логика приложения
  - **routes/** - определение маршрутов API
  - **controllers/** - логика обработки запросов
  - **models/** - модели базы данных
  - **.env** - файл переменных окружения
  - **Dockerfile** - настройки для создания Docker-образа
  - **docker-compose.yml** - настройки для запуска приложения
  - **init.sql** - скрипты для инициализации базы данных

## Установка и запуск

1.	Склонируйте репозиторий:
bash 
git clone 
cd my-shop/server

markdown

2. Убедитесь, что у вас установлен Docker и Docker Compose.

2.	Запустите приложение:

bash 
docker-compose up –build

markdown

4. После успешного запуска сервер будет доступен по адресу `http://localhost:5000`.

## API
- `POST /auth/register` — Регистрация пользователя
- `POST /auth/login` — Авторизация пользователя
- `GET /products` — Получить список всех товаров
- `GET /products/:id` — Получить товар по ID
- `POST /products` — Создать продукт
- `PUT /products/:id` — Обновить продукт по ID
- `DELETE /products/:id` — Удалить продукт по ID
- `GET /cart?user_id=1` — Получить корзину пользователя
- `PUT /cart` — Добавить продукт в корзину
- `DELETE /cart` — Удалить продукт из корзины

## Комментарии
Этот проект нуждается в дальнейшей разработке, включая управление сессиями, безопасное хранение паролей и обработку ошибок. Ознакомьтесь с документацией по Express и PostgreSQL для дальнейшего изучения.
