const express = require('express');
const router = express.Router();
//Invocacion de controllers
const calculoHoraController = require('../controllers/calculohora.controller');
//POST 
router.post('/', calculoHoraController.postcalculoHora);
//
module.exports = router;