const express = require('express');
const router = express.Router();
const imovelController = require('../controller/imovelController');
const upload = require('../config/upload');
const apiKeyMiddleware = require('../config/apiKey');

router.use(apiKeyMiddleware);
router.get('/imoveis', imovelController.getAllImoveis);
router.post('/imoveis', upload.single("photo"), imovelController.createImovel);
router.put('/imoveis/:id', imovelController.updateImovel);
router.delete('/imoveis/:id', imovelController.deleteImovel);

module.exports = router;