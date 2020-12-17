const express = require('express');
const route = express.Router()
const authentication = require('../middlewares/authentication');
const authCart = require('../middlewares/authCart');
const authCust = require('../middlewares/authCust');
const Controller = require('../controllers/cartController');

route.use(authentication);
route.use(authCust)

route.get('/', Controller.getCart);
route.get('/history', Controller.getHistroy);
route.post('/', Controller.addCart);
route.use('/:id', authCart)
route.patch('/:id', Controller.editCart);
route.patch('/', Controller.checkout);
route.delete('/:id', Controller.removeCart);

module.exports = route