const {User} = require('../models');

async function authCust (req, res, next){
    const userId = Number(req.loggedIn.id);
    try {
        const checkUser = await User.findOne({where: {id: userId}});
        if(checkUser.role === 'customer'){
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

module.exports = authCust