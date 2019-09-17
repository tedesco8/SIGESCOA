import routerx from 'express-promise-router';
import categoriaController from '../controllers/CategoriaController';

const router = routerx();

router.post('/add', categoriaController.add);
router.get('/query', categoriaController.query);
router.get('/list', categoriaController.list);
router.put('/update', categoriaController.update);
router.delete('/remove', categoriaController.remove);
router.put('/activate', categoriaController.activate);
router.put('/deactivate', categoriaController.deactivate);

export default router;