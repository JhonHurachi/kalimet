const express   = require('express');
const router    = express.Router();
const control   = require('../controllers/utilsCtrl');

router
    .get('/api/paises', control.paises)
    .get('/api/tipoContribuyentes', control.contribuyentes)

module.exports = router