'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cart extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Cart.belongsTo(models.User);
      Cart.belongsTo(models.Product);
    }
  };
  Cart.init({
    UserId: DataTypes.INTEGER,
    ProductId: DataTypes.INTEGER,
    amount: {
      type: DataTypes.INTEGER,
      validate: {
        isInt: {
          msg: 'Amount must be an Integer'
        },
        min: {
          args: [0],
          msg: 'Amount must be greater than 0'
        }
      }
    },
    isPaid: DataTypes.BOOLEAN
  }, {
    hooks: {
      beforeCreate(instance, options){
        if(!instance.amount){
          instance.amount = 1;
        }
      }
    },
    sequelize,
    modelName: 'Cart',
  });
  return Cart;
};