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
    .get('/api/activs', control.activs)
    .put('/api/actualizarActiv', control.actualizarActiv)
    .delete('/api/eliminarActiv/:id', control.eliminarActiv)
    .post('/api/agregarActiv', control.agregarActiv)  
    .get('/api/activ/:id', control.activ)  

module.exports = router