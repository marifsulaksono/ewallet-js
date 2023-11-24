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

const insertNewUser = async (req, res) => {
    try {
        const users = { ...req.body }
        if (!users.username || !users.password || !users.name || !users.address || !users.phone) {
            return response(400, "", "please check your input!", res)
        }

        const result = await usersModel.insertNewUser(users)
        if (!result) {
            return response(500, "", "insert data error", res)
        }

        const data = {
            id: result.insertId
        }
        response(201, data, "success insert new transction", res)
    } catch (error) {
        console.log(error)
        return response(500, "", error, res)
    }
}

const getUserById = async (req, res) => {
    try {
        const id = req.params.id
        const result = await usersModel.getUserById(id)
        if (!result) {
            return response(404, "", `users ${id} not found`, res)
        }

        response(200, result, `Success get user ${id}`, res)
    } catch (error) {
        console.log(error)
        return response(500, "", error, res)
    }
}

const updateUser = async (req, res) => {
    try {
        const id = req.params.id
        const userCheck = await usersModel.getUserById(id)
        if (!userCheck) {
            return response(404, "", `users ${id} not found`, res)
        }

        const users = { ...req.body }
        const result = await usersModel.updateUser(id, users)
        if (!result) {
            return response(500, "", "update data error", res)
        }

        const data = {
            id: id
        }
        response(200, data, `success update user ${id}`, res)
    } catch (error) {
        console.log(error)
        return response(500, "", error, res)
    }
}

module.exports = {
    getAllUsers,
    insertNewUser,
    getUserById,
    updateUser
}