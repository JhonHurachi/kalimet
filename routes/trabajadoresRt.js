const express   = require('express');
const router    = express.Router();
const control   = require('../controllers/trabajadoresCtrl');

router
    .get('/api/trabajadores/trabajadoresNomId', control.trabajadoresNomId)
    .get('/api/trabajadores/trabajadoresLista', control.trabajadoresLista)
    .delete('/api/trabajadores/eliminarTrabajador/:id', control.eliminarTrabajador)   
module.exports = router