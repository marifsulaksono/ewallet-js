const db = require("../config/connection")

const getAllTransaction = () => {
    return new Promise((resolve, reject) => {
        const querySql = "select * from transaction"
        db.query(querySql, (error, result) => {
            if (error) {
                reject(result)
            } else {
                resolve(result)
            }
        })

    })
}

const getTransactionById = (id, res) => {
    return new Promise((resolve, reject) => {
        const querySql = `select * from transaction where id = ${id}`
        db.query(querySql, (error, result) => {
            if (error) {
                reject(result)
            } else {
                resolve(result)
            }
        })
    })
}

const insertNewTransaction = (data) => {
    return new Promise((resolve, reject) => {
        const querySql = `insert into transaction set ?`
        db.query(querySql, data, (error, result) => {
            if (error) {
                reject(result)
            } else {
                resolve(result)
            }
        })
    })
}

const updateTransaction = (id, data) => {
    return new Promise((resolve, reject) => {
        const querySql = `update transaction set ? where id = ${id}`
        db.query(querySql, data, (error, result) => {
            if (error) {
                reject(result)
            } else {
                resolve(result)
            }
        })
    })
}

const deleteTransaction = (id, res) => {
    return new Promise((resolve, reject) => {
        const querySql = `delete from transaction where id = ${id}`
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
    getAllTransaction,
    getTransactionById,
    insertNewTransaction,
    updateTransaction,
    deleteTransaction
}