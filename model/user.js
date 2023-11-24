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

module.exports = {
    getAllUsers
}