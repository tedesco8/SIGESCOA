const routerx = require('express-promise-router');
const emailController = require('../controllers/EmailController');

const router = routerx();

router.post('/confirm', emailController.confirm);
router.post('/contact', emailController.contact);

module.exports = router;