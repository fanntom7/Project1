// server.js

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const machineRouter = require('./routes/machineRouter');

app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/mydatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Успешное подключение к базе данных');
  })
  .catch((error) => {
    console.log('Ошибка подключения к базе данных:', error);
  });

app.use('/api/machines', machineRouter);

app.listen(3000, () => {
  console.log('Сервер запущен на порту 3000');
});
