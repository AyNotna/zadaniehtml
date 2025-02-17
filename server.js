const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Раздача статических файлов
app.use(express.static(path.join(__dirname)));

// Основная страница
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Обработка 404
app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, '404.html'));
});

// Запуск сервера
app.listen(PORT, () => {
    console.log(`Сервер запущен на http://localhost:${PORT}`);
});
