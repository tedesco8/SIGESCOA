const routerx = require('express-promise-router');
const typeController = require('../controllers/TypeController');
const auth = require('../middlewares/auth');

const router = routerx();

router.get('/get', typeController.get);
router.post('/add', typeController.add);
router.put('/update', typeController.update);
router.put('/activate', auth.verifyUsuario, typeController.activate);
router.put('/deactivate', auth.verifyUsuario, typeController.deactivate);

module.exports = router;