const loginModel = require('../model/login')
const response = require('../utils/response')

const userLogin = async (req, res) => {
    try {
        const { username, password } = { ...req.body }
        if (!username || !password) {
            return response(400, "", "Please input username and password", res)
        }

        const result = await loginModel.userLogin(username, password)
        if (result.length === 0) {
            return response(404, "", "Username is not registered", res)
        }

        if (password !== result[0].password) {
            return response(401, "", "Username or password is wrong", res)
        }

        response(200, "", "Login success", res)
    } catch (error) {
        console.log(error)
        response(500, "", "internal server error", res)
    }
}

module.exports = {
    userLogin
}