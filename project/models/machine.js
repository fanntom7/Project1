// models/machine.js

const mongoose = require('mongoose');

const machineSchema = new mongoose.Schema({
  company: {
    type: String,
    required: true,
  },
  model: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
});

const Machine = mongoose.model('Machine', machineSchema);

module.exports = Machine;
