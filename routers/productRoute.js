const express = require('express');
const route = express.Router();
const Controller = require('../controllers/productController');
const authentication = require('../middlewares/authentication');
const authorization = require('../middlewares/authorization');


route.get('/', Controller.getProducts);

route.use('/', authentication);

route.use('/:id', authorization);
route.post('/', authorization, Controller.add);
route.put('/:id', Controller.editProduct);
route.delete('/:id', Controller.remove);
module.exports = route;