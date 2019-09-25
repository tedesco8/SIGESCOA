import routerx from 'express-promise-router';
import categoriaRouter from './categoria';
import articuloRouter from './articulo';
import usuarioRouter from './usuario';
import personaRouter from './persona';
import ingresoRouter from './ingreso';
import ventaRouter from './venta';

const router = routerx();

router.use('/categoria', categoriaRouter);
router.use('/articulo', articuloRouter);
router.use('/usuario', usuarioRouter);
router.use('/persona', personaRouter);
router.use('/ingreso', ingresoRouter);
router.use('/venta', ventaRouter);

export default router;