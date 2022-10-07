const jwt = require('jsonwebtoken')
const asyncHandler = require('./async')
const ErrorRespond = require('../utilities/errorResponse')
const User = require('../models/User')

exports.protect = asyncHandler(async (req, res, next ) => {
    let token;

    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        token = req.headers.authorization.split(' ')[1]
    }

    if(!token) {
        return next(new ErrorRespond('Not authorized to access this route', 401))
    }

    try {
        //Verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET)

       req.user = await User.findById(decoded.id)
       next() 
    } catch(err) {
        return next(new ErrorRespond('Not authorized to access this route', 401))
    }
})

exports.authorize = (...roles) => {
    return (req, res, next) => {
        if(!roles.include(req.user.role)) {
            return next(new ErrorRespond(`User role ${req.user.role} is not authorized to access this route`, 403))
        }
        next()
    }
}