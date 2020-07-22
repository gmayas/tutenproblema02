const express = require ('express');
const morgan = require ('morgan');

const bodyParser = require('body-parser')
const cors = require('cors')
const app = express();

//Invocacion de routers
const calculoHoraRouter = require ('./src/routes/calculohora.router')

// settings
app.set('port', (process.env.PORT || 5000));

// Middlewares
app.use(morgan('dev'));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

// Routes
app.use('/api/calculoHora', calculoHoraRouter);
//
module.exports = app;