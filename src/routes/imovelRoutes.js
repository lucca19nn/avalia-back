const express = require('express');
const router = express.Router();
const imoveisController = require('../controller/imovelController');
const upload = require('../config/upload');
const apiKeyMiddleware = require('../config/apiKey');

router.use(apiKeyMiddleware);
router.get('/imoveis', imoveisController.getAllImoveis);
router.post('/imoveis', upload.single("photo"), imoveisController.createImovel);
router.put('/imoveis/:id', imoveisController.updateImovel);
router.delete('/imoveis/:id', imoveisController.deleteImovel);

module.exports = router;