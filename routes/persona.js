import routerx from 'express-promise-router';
import personaController from '../controllers/PersonaController';
import auth from '../middlewares/auth';
import PersonaController from '../controllers/PersonaController';

const router = routerx();

router.post('/add', auth.verifyUsuario,PersonaController.add);
router.get('/query', auth.verifyUsuario,PersonaController.query);
router.get('/list', auth.verifyUsuario,PersonaController.list);
router.get('/listClientes', auth.verifyUsuario,PersonaController.listClientes);
router.get('/listProveedores', auth.verifyUsuario,PersonaController.listProveedores);
router.put('/update', auth.verifyUsuario,PersonaController.update);
router.delete('/remove', auth.verifyUsuario,PersonaController.remove);
router.put('/activate', auth.verifyUsuario,PersonaController.activate);
router.put('/deactivate', auth.verifyUsuario,PersonaController.deactivate);

export default router;