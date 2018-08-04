const express   = require('express');
const router    = express.Router();
const control   = require('../controllers/trabajadoresCtrl');

router
    .get('/api/trabajadores/trabajadoresNomId', control.trabajadoresNomId)
    .get('/api/trabajadores/trabajadoresLista', control.trabajadoresLista)
    .post('/api/trabajadores/agregarTrabajador', control.agregarTrabajador)
    .delete('/api/trabajadores/eliminarTrabajador/:id', control.eliminarTrabajador)   
    .get('/api/trabajadores/trabajador/:id', control.trabajador)    
    .put('/api/trabajadores/actualizarTrabajador', control.actualizarTrabajador)
module.exports = router