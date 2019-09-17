import routerx from 'express-promise-router';
import categoriaRouter from './categoria';

const router = routerx();

router.use('/categoria', categoriaRouter);
export default router;