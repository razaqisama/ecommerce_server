const {User} = require('../models');
const {checkPassword} = require('../helpers/bcrypt');
const {generateToken} = require('../helpers/jswebtoken');
class Controller{
    static async login(req, res, next){
      const userLogin = {
        email: req.body.email,
        password: req.body.password,
        role: req.body.role
      }
      try {
        const userLoggedIn = await User.findOne({where: {email: userLogin.email}});
        if(userLoggedIn && checkPassword(userLogin.password, userLoggedIn.password) && userLogin.role === userLoggedIn.role){
          res.status(200).json({access_token: generateToken({id: userLoggedIn.id, email: userLoggedIn.email})})
        } else {
          throw {
            status: 400,
            message: 'Email / Password Incorrect'
          }
        }
      } catch (error){
          next(error)
      }
    }
    static async register (req, res, next) {
      const newAccount = {
        email: req.body.email,
        password: req.body.password,
        role: req.body.role
      }
      try {
        const registered = await User.create(newAccount)
        res.status(201).json({
          id: registered.id,
          email: registered.email
        })
      } catch (error) {
        let err;
        if(error.errors[0]){
          err = {
            status: 400,
            message: 'Error Validation',
            error: error.errors
          }
        }
        next(err)
      }
    }
}

module.exports = Controller