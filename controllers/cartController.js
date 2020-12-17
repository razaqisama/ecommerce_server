const {Cart, Product, sequelize} = require('../models')
class Controller {
  static async getCart (req, res, next) {
    const userId = req.loggedIn.id;
    try {
      const carts = await Cart.findAll({where: {UserId: userId, isPaid: false}, include: Product})
      res.status(200).json(carts);
    } catch (error) {
      next(error);
    }
  }
  static async getHistroy (req, res, next) {
    const userId = req.loggedIn.id;
    try {
      const carts = await Cart.findAll({where: {UserId: userId, isPaid: true}, include: Product})
      res.status(200).json(carts);
    } catch (error) {
      next(error);
    }
  }
  static async addCart (req, res, next) {
    const userId = req.loggedIn.id;
    const newCart = {
      UserId: userId,
      ProductId: req.body.ProductId,
      isPaid: false
    }
    try {
      const product = await Product.findOne({where: {id: newCart.ProductId}});
      if(!product.stock) {
        throw {
          status: 400,
          message: 'Out of stock'
        }
      } 
      const isInCart = await Cart.findOne({where: newCart, include: Product});
      if(isInCart){
        if(isInCart.Product.stock < isInCart.amount + 1) {
          throw {
            status: 400,
            message: "Quantity exceeds inventory stock limit"
          }
        } else {
          await isInCart.increment('amount', {by: 1})
        }
      } else {
        await Cart.create(newCart);
      }
      res.status(201).json({message: 'Product Added to your cart'});
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
  static async editCart (req, res, next) {
    const editId = req.params.id;
    const editAmount = Number(req.body.amount);
    try {
      const cart = await Cart.findOne({where: {id: editId}, include: Product})
      console.log(editAmount, cart.Product.stock)
      if(editAmount > cart.Product.stock) {
        throw {
          status: 400
        }
      }
      const updated = await Cart.update({amount: editAmount}, {where: {id: editId}, individualHooks: true});
      if(!updated[1][0]){
        throw {
          status: 404
        }
      } else {
        res.status(200).json(updated[1][0]);
      }
    } catch (error) {
      let err;
      if(error.status === 404){
        err = {
          status: 404,
          message: 'Item Not Found'
        }
      } else if (error.status === 400) {
        err = {
          status: 400,
          message: "Quantity exceeds inventory stock limit"
        }
      } 
      else if(error.errors[0]){
        err = {
          status: 400,
          message: 'Validation Error',
          error: error.errors
        }
      }
      next(err)
    }
  }
  static async removeCart (req, res, next) {
    const removeId = Number(req.params.id);
    try {
      const deletedCart = await Cart.destroy({where: {id: removeId}})
      if(deletedCart){
        res.status(200).json({message: 'Product removed from your cart'});
      } else {
          throw {
              status: 404,
          }
      }
    } catch (error) {
      next(error);
    }
  }
  static async checkout (req, res, next) {
    const checkoutId = req.loggedIn.id
    const t = await sequelize.transaction();
    try {
      const carts = await Cart.findAll({where: {UserId: checkoutId, isPaid: false}, include: Product});
      for(let i = 0; i < carts.length; i++){
        if(carts[i].amount > carts[i].Product.stock) {
          throw {
            status: 400,
            message: 'Out of stock'
          }
        } else {
          const newStock = carts[i].Product.stock - carts[i].amount
          await Product.update({stock: newStock}, {where: {id: carts[i].ProductId}}, {transaction: t})
          await Cart.update({isPaid: true}, {where: {id: carts[i].id}}, {transaction: t})
        }
      }
      await t.commit();
      res.status(200).json({message: 'Thank you for trusting us'})
    } catch (error) {
      await t.rollback();
      next(error)
    }
  }
}

module.exports = Controller