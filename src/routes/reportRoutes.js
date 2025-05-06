const express = require('express');
const router = express.Router();
const reportController = require('../controller/reportController');

router.get('/report', reportController.exportPostPDF);

module.exports = router;