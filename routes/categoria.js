const routerx = require('express-promise-router');
const categoriaController = require('../controllers/CategoriaController');
const auth = require('../middlewares/auth');

const router = routerx();

router.post('/add', auth.verifyUsuario,categoriaController.add);
router.get('/query', auth.verifyUsuario,categoriaController.query);
router.get('/list', auth.verifyUsuario,categoriaController.list);
router.put('/update', auth.verifyUsuario,categoriaController.update);
router.delete('/remove', auth.verifyAlmacenero,categoriaController.remove);
router.put('/activate', auth.verifyAlmacenero,categoriaController.activate);
router.put('/deactivate', auth.verifyAlmacenero,categoriaController.deactivate);

module.exports = router;