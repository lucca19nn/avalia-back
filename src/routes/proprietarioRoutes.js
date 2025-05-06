const express = require('express');
const router = express.Router();
const proprietarioController = require('../controller/proprietarioController');
const apiKeyMiddleware = require('../config/apiKey');

router.use(apiKeyMiddleware);
router.get('/proprietarios', proprietarioController.getAllProprietarios);
router.get('/proprietarios/:id', proprietarioController.getProprietarioById);
router.post('/proprietarios', proprietarioController.createProprietario);
router.put('/proprietarios/:id', proprietarioController.updateProprietario);
router.delete('/proprietarios/:id', proprietarioController.deleteProprietario);

module.exports = router;
