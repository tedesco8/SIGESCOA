const routerx = require('express-promise-router');
const saleController = require('../controllers/SaleController');
const auth = require('../middlewares/auth');

const router = routerx();

router.get('/get', saleController.get);
router.get('/query', saleController.query);
router.post('/add', saleController.add);
router.put('/update', saleController.update);
router.put('/activate', auth.verifyUsuario, saleController.activate);
router.put('/deactivate', auth.verifyUsuario, saleController.deactivate);

module.exports = router;