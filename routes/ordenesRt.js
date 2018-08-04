const express   = require('express');
const router    = express.Router();
const control   = require('../controllers/ordenesCtrl');

router
    .get('/api/ordenes/lista', control.lista)
    .get('/api/ordenes/origenes/:id', control.origenes)
    .get('/api/ordenes/orden/:id', control.orden)
    .get('/api/ordenes/ultimaOrden', control.ultimaOrden)
    .post('/api/ordenes/agregarOrden', control.agregarOrden)
    .post('/api/ordenes/agregarActividad', control.agregarActividad)
    .post('/api/ordenes/agregarActividadTrabajador', control.agregarActividadTrabajador)
    .post('/api/ordenes/agregarOrigen', control.agregarOrigen)
    .delete('/api/ordenes/eliminarOrden/:id', control.eliminarOrden)    
    .put('/api/ordenes/actualizarOrden', control.actualizarOrden)

module.exports = router