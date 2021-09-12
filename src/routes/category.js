const routerx = require('express-promise-router');
const categoryController = require('../controllers/blog/CategoryController');
const auth = require('../middlewares/auth');

const router = routerx();

router.get('/get', categoryController.get);
router.get('/query:id', categoryController.get);
router.post('/add', categoryController.add);
router.put('/update', categoryController.update);
router.put('/activate', auth.verifyUsuario, categoryController.activate);
router.put('/deactivate', auth.verifyUsuario, categoryController.deactivate);

module.exports = router;