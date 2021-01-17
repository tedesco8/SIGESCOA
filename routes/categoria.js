import routerx from 'express-promise-router';
import categoriaController from '../controllers/CategoriaController';
import auth from '../middlewares/auth';

const router = routerx();

router.post('/add', auth.verifyUsuario,categoriaController.add);
router.get('/query', auth.verifyUsuario,categoriaController.query);
router.get('/list', auth.verifyUsuario,categoriaController.list);
router.put('/update', auth.verifyUsuario,categoriaController.update);
router.delete('/remove', auth.verifyAlmacenero,categoriaController.remove);
router.put('/activate', auth.verifyAlmacenero,categoriaController.activate);
router.put('/deactivate', auth.verifyAlmacenero,categoriaController.deactivate);

export default router;