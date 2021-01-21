const routerx = require('express-promise-router');
const categoriaRouter = require('./categoria');
const articuloRouter = require('./articulo');
const usuarioRouter = require('./usuario');
const personaRouter = require('./persona');
const ingresoRouter = require('./ingreso');
const ventaRouter = require('./venta');

const router = routerx();

router.use('/categoria', categoriaRouter);
router.use('/articulo', articuloRouter);
router.use('/usuario', usuarioRouter);
router.use('/persona', personaRouter);
router.use('/ingreso', ingresoRouter);
router.use('/venta', ventaRouter);

module.exports = router;