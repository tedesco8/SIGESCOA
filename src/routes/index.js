const routerx = require('express-promise-router');
const userRouter = require('./user');
const clientRouter = require('./client');
const typeRouter = require('./type');
const articleRouter = require('./article');
const saleRouter = require('./sale');
const emailRouter = require('./email');
//blog
const categoryRouter = require('./category');
const postRouter = require('./post');

const router = routerx();

router.use('/user', userRouter);
router.use('/sale', saleRouter);
router.use('/client', clientRouter);
router.use('/email', emailRouter);
router.use('/type', typeRouter);
router.use('/article', articleRouter);
//blog
router.use('/category', categoryRouter);
router.use('/post', postRouter);

module.exports = router;