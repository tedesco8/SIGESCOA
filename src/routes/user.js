const auth = require('../middlewares/auth');
const routerx = require('express-promise-router');
const userController = require('../controllers/UserController');

const router = routerx();

router.get('/get', userController.get);
router.post('/add', auth.verifyUsuario, userController.add);
router.put('/update', auth.verifyUsuario, userController.update);
router.put('/activate', auth.verifyUsuario, userController.activate);
router.put('/deactivate', auth.verifyUsuario, userController.deactivate);
router.post('/login', userController.login);

module.exports = router;