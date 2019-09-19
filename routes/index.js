import routerx from 'express-promise-router';
import categoriaRouter from './categoria';
import articuloRouter from './categoria';

const router = routerx();

router.use('/categoria', categoriaRouter);
router.use('/articulo', articuloRouter);
export default router;