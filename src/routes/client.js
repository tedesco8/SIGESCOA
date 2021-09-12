const routerx = require('express-promise-router');
const clientController = require('../controllers/ClientController');
const auth = require('../middlewares/auth');

const router = routerx();

router.get('/get', clientController.get);
router.post('/add',  auth.verifyUsuario, clientController.add);
router.put('/update',  auth.verifyUsuario, clientController.update);
router.put('/activate', auth.verifyUsuario, clientController.activate);
router.put('/deactivate', auth.verifyUsuario, clientController.deactivate);

module.exports = router;