const routerx = require('express-promise-router');
const articleController = require('../controllers/ArticleController');
const auth = require('../middlewares/auth');
const multipart = require('connect-multiparty');
let md_upload = multipart({ uploadDir: 'upload/images'});

const router = routerx();

router.get('/get', articleController.get);
router.get('/query', articleController.query);
router.get('/image-all',articleController.imageAll);
router.get('/search', articleController.search);
router.post('/add', articleController.add);
router.put('/update', articleController.update);
router.put('/activate', auth.verifyUsuario, articleController.activate);
router.put('/deactivate', auth.verifyUsuario, articleController.deactivate);
router.post('/upload-image/:id', md_upload ,articleController.upload);

module.exports = router;