const db = require('../config/connection')

const userLogin = (username, password) => {
    return new Promise((resolve, reject) => {
        const querySql = `select password from users where username = ?`
        db.query(querySql, username, (error, result) => {
            if (error) {
                reject(result)
            }

            resolve(result)
        })
    })
}

module.exports = {
    userLogin
}