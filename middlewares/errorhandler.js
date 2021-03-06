function errorHandler(err, req, res, next){
    console.log(err, '<<<< ERROR HANDLER >>>>');
    if(err.status === 400){
      if(err.message === 'Email / Password Incorrect'){
        res.status(err.status).json({message: err.message})
      } else if (err.message === 'Out of stock' || err.message === 'Quantity exceeds inventory stock limit') {
        res.status(err.status).json({message: err.message})
      }else if (err.error[0]) {
        let validationError = []
        for(let i = 0; i < err.error.length; i++){
          validationError.push(err.error[i].message)
        }
        res.status(err.status).json({message: err.message, error: validationError})
      } else {
        let validationError = []
        for(let i = 0; i < err.errorValidation.length; i++){
          validationError.push(err.errorValidation[i].message)
        }
        res.status(err.status).json({message: err.message, error: validationError})
      }
    } else if (err.status === 401){
        res.status(err.status).json({message: 'You are not authorized'})
    } else if (err.status === 404){
        res.status(err.status).json({message: err.message})
    } else {
        res.status(500).json({message: 'Internal Server Error'})
    }
}

module.exports = {
    errorHandler
}