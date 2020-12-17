'use strict';
const {
  Model
} = require('sequelize');

const {generatePassword} = require('../helpers/bcrypt');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Cart);
    }
  };
  User.init({
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        isEmail: {
          msg: 'Email needs to be Email'
        },
        notNull: {
          msg: 'Email Required'
        },
        notEmpty: {
          msg: 'Email Required'
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Password Required'
        },
        notEmpty: {
          msg: 'Password Required'
        }
      }
    },
    role: DataTypes.STRING
  }, {
    hooks: {
      beforeCreate(instance, options){
        instance.password = generatePassword(instance.password); 
      }
    },
    sequelize,
    modelName: 'User',
  });
  return User;
};