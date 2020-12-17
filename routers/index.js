const express = require('express');
const router = express.Router();
const userRoute = require('./userRoute');
const productRoute = require('./productRoute');
const cartRoute = require('./cartRoute');

router.use('/', userRoute);
router.use('/product', productRoute);
router.use('/cart', cartRoute);

module.exports = router;