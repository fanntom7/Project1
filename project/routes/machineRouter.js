// routes/machineRouter.js

const express = require('express');
const router = express.Router();
const Machine = require('../models/machine');

// Обработчик POST-запроса для создания машины
router.post('/', (req, res) => {
  const { company, model, year } = req.body;

  const machine = new Machine({ company, model, year });

  machine.save()
    .then(() => {
      res.status(201).json({ message: 'Машина успешно создана' });
    })
    .catch((error) => {
      res.status(500).json({ error: 'Ошибка при создании машины' });
    });
});

// Обработчик GET-запроса для получения всех машин
router.get('/', (req, res) => {
  Machine.find()
    .then((machines) => {
      res.status(200).json(machines);
    })
    .catch((error) => {
      res.status(500).json({ error: 'Ошибка при получении машин' });
    });
});

module.exports = router;
