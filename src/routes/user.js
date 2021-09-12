const auth = require('../middlewares/auth');
const routerx = require('express-promise-router');
const userController = require('../controllers/UserController');

const router = routerx();

router.get('/get', userController.get);
router.post('/add', auth.verifyAdministrador, userController.add);
router.put('/update', auth.verifyAdministrador, userController.update);
router.put('/activate', auth.verifyAdministrador, userController.activate);
router.put('/deactivate', auth.verifyAdministrador, userController.deactivate);
router.post('/login', userController.login);

module.exports = router;