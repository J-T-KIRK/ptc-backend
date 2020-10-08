const { Router } = require('express');
const router = Router();

//Rutas
const Usuario = require('./usuario');
const Categorias = require('./categorias');
const Productos = require('./productos');

//Enrutador
router.use('/usuarios', Usuario);
router.use('/categorias', Categorias);
router.use('/productos', Productos);




module.exports = router;