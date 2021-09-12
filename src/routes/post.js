const routerx = require('express-promise-router');
const postController = require('../controllers/blog/PostController');

const router = routerx();

router.get('/get', postController.get);
router.post('/add', postController.add);
router.put('/update', postController.update);

module.exports = router;