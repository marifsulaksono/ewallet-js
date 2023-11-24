const usersModel = require('../model/user')
const response = require('../utils/response')

const getAllUsers = async (req, res) => {
    try {
        const result = await usersModel.getAllUsers()
        if (!result || result.length === 0) {
            return response(404, "", `users is empty`, res)
        }

        response(200, result, "success get all users", res)
    } catch (error) {
        console.log(error)
        return response(500, "", error, res)
    }
}

module.exports = {
    getAllUsers
}