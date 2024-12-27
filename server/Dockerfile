# Используем образ Node.js
FROM node:14

# Устанавливаем рабочую директорию
WORKDIR /usr/src/app

# Копируем package.json и устанавливаем зависимости
COPY package*.json ./
RUN npm install

# Копируем все файлы проекта
COPY . .

# Открываем порт
EXPOSE 5000

# Запускаем сервер
CMD ["node", "src/server.js"]
