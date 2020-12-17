const {Cart} = require('../models');

async function authCart (req, res, next){
    const userId = Number(req.loggedIn.id);
    const paramId = req.params.id;
    try {
        const cart = await Cart.findOne({where: {id: paramId}});
        if(userId === cart.UserId){
            next()
        } else {
            throw {
                status: 401
            }
        }
    } catch(error){
        next(error);
    }
}

module.exports = authCart