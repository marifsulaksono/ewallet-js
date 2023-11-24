
const express = require('express')
const router = express()
const transactionController = require("../controller/transaction")

// list of transaction routes
router.get("/", transactionController.getAllTransaction)
router.get("/:id", transactionController.getTransactionById)
router.post("/", transactionController.insertNewTransaction)
router.put("/:id", transactionController.updateTransaction)
router.delete("/:id", transactionController.deleteTransaction)

module.exports = router