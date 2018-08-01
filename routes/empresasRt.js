const express   = require('express');
const router    = express.Router();
const control   = require('../controllers/empresasCtrl');

router
    .get('/api/empresas/lista', control.lista)
    .get('/api/empresas/empresa/:id', control.empresa)
    .post('/api/empresas/agregarEmpresa', control.agregarEmpresa)
    .delete('/api/empresas/eliminarEmpresa/:id', control.eliminarEmpresa)    
    .put('/api/empresas/actualizarEmpresa', control.actualizarEmpresa)

module.exports = router