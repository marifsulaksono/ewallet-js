const db = require('../config/connection')

const getAllUsers = () => {
    return new Promise((resolve, reject) => {
        const querySql = `select * from users`
        db.query(querySql, (error, result) => {
            if (error) {
                reject(result)
            } else {
                resolve(result)
            }
        })
    })
}

const insertNewUser = (data) => {
    return new Promise((resolve, reject) => {
        const querySql = `insert into users set ?`
        db.query(querySql, data, (error, result) => {
            if (error) {
                reject(result)
            } else {
                resolve(result)
            }
        })
    })
}

const getUserById = (id) => {
    return new Promise((resolve, reject) => {
        const querySql = `select * from users where id = ${id}`
        db.query(querySql, (error, result) => {
            if (error) {
                reject(result)
            } else {
                resolve(result)
            }
        })
    })
}

const updateUser = (id, data) => {
    return new Promise((resolve, reject) => {
        const querySql = `update users set name = ?, address = ?, phone = ? where id = ${id}`
        db.query(querySql, [data.name, data.address, data.phone], (error, result) => {
            if (error) {
                reject(result)
            } else {
                resolve(result)
            }
        })
    })
}

const deleteUser = (id) => {
    return new Promise((resolve, reject) => {
        const querySql = `delete from users where id = ${id}`
        db.query(querySql, (error, result) => {
            if (error) {
                reject(result)
            } else {
                resolve(result)
            }
        })
    })
}

module.exports = {
    getAllUsers,
    getUserById,
    insertNewUser,
    updateUser,
    deleteUser
}