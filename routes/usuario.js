import routerx from 'express-promise-router';
import usuarioController from '../controllers/UsuarioController';

const router = routerx();

router.post('/add', usuarioController.add);
router.get('/query', usuarioController.query);
router.get('/list', usuarioController.list);
router.put('/update', usuarioController.update);
router.delete('/remove', usuarioController.remove);
router.put('/activate', usuarioController.activate);
router.put('/deactivate', usuarioController.deactivate);
router.post('/login', usuarioController.login);

export default router;