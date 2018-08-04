const express   = require('express');
const router    = express.Router();
const control   = require('../controllers/utilsCtrl');

router
    .get('/api/paises', control.paises)
    .get('/api/tipoContribuyentes', control.contribuyentes)    
    .get('/api/tipoDocumento', control.tiposDoc)    
    .get('/api/cargos', control.cargos)
    .get('/api/contactos', control.contactos)
    .get('/api/trabajos', control.trabajos)
    .get('/api/productos', control.productos)
    .get('/api/habilidades', control.habilidades)

module.exports = router