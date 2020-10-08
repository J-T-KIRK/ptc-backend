const express = require('express');
const cors = require('cors');

const app = express();

//rutas
const rutas = require('./routes/index')

// Settings
app.set("port", process.env.PORT || 4000);

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api', rutas);

module.exports = app;