const transactionModel = require('../model/transaction')
const response = require('../utils/response')

const getAllTransaction = async (req, res) => {
    try {
        const result = await transactionModel.getAllTransaction()
        if (!result || result.length === 0) {
            return response(404, "", `transaction is empty`, res)
        }
        response(200, result, "success get all transaction", res)
    } catch (error) {
        console.log(error)
        return response(500, "", error, res)
    }
};

const getTransactionById = async (req, res) => {
    try {
        const id = req.params.id
        const result = await transactionModel.getTransactionById(id)
        if (result.length == 0) {
            return response(404, "", `transaction ${id} is not found`, res)
        }
        response(200, result, `success get transaction ${id}`, res)
    } catch (error) {
        console.log(error)
        return response(500, "", error, res)
    }
}

const insertNewTransaction = async (req, res) => {
    try {
        const transaction = { ...req.body }
        const result = await transactionModel.insertNewTransaction(transaction)
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

const updateTransaction = async (req, res) => {
    try {
        const transaction = { ...req.body }
        const id = req.params.id
        const resultCheck = await transactionModel.getTransactionById(id)
        if (resultCheck.length == 0) {
            return response(404, "", `transaction ${id} is not found`, res)
        }

        const result = await transactionModel.updateTransaction(id, transaction)
        if (!result) {
            return response(500, "", "insert data error", res)
        }

        const data = {
            id: id
        }
        response(200, data, `success update transaction ${id}`, res)
    } catch (error) {
        console.log(error)
        return response(500, "", error, res)
    }
}

const deleteTransaction = async (req, res) => {
    const id = req.params.id
    try {
        const resultCheck = await transactionModel.getTransactionById(id)
        if (resultCheck.length == 0) {
            return response(404, "", `transaction ${id} is not found`, res)
        }

        const result = await transactionModel.deleteTransaction(id)
        if (!result) {
            return response(500, "", "insert data error", res)
        }

        const data = {
            id: id
        }
        response(200, "", `success delete transaction ${id}`, res)
    } catch (error) {
        console.log(error)
        return response(500, "", error, res)
    }
}

module.exports = {
    getAllTransaction,
    getTransactionById,
    insertNewTransaction,
    updateTransaction,
    deleteTransaction
}