const response = require('../utils/response')
const jwt = require('jsonwebtoken')

const jwtMiddleware = (req, res, next) => {
    const { authorization } = req.headers

    if (!authorization) {
        return response(401, "", "Token was not provided", res)
    }

    try {
        const token = authorization.split(' ')[1]
        const secreKey = process.env.SECRET_KEY_JWT
        const jwtDecode = jwt.verify(token, secreKey)
    } catch (error) {
        return response(401, "", "Unauthorized", res)
    }

    next()
}

module.exports = {
    jwtMiddleware
}