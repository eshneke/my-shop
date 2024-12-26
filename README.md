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
