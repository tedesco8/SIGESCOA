const routerx = require('express-promise-router');
const ingresoController = require('../controllers/IngresoController');
const auth = require('../middlewares/auth');

const router=routerx();

router.post('/add',auth.verifyUsuario,ingresoController.add);
router.get('/query',auth.verifyAlmacenero,ingresoController.query);
router.get('/list',auth.verifyUsuario,ingresoController.list);
router.get('/grafico12meses',auth.verifyUsuario,ingresoController.grafico12Meses);
router.get('/consultaFechas',auth.verifyUsuario,ingresoController.consultaFechas);
router.put('/update',auth.verifyUsuario,ingresoController.update);
router.delete('/remove',auth.verifyAlmacenero,ingresoController.remove);
router.put('/activate',auth.verifyAlmacenero,ingresoController.activate);
router.put('/deactivate',auth.verifyAlmacenero,ingresoController.deactivate);

module.exports = router;