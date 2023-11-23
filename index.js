const express = require('express')
const bodyParser = require('body-parser')
const transactionController = require("./controller/transaction")
const app = express()
const port = 8000

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/transactions", transactionController.getAllTransaction)

app.get("/transactions/:id", transactionController.getTransactionById)

app.post("/transactions", transactionController.insertNewTransaction)

app.put("/transactions/:id", transactionController.updateTransaction)

app.delete("/transactions/:id", transactionController.deleteTransaction)

app.listen(port, () => {
    console.log(`server started at localhost:${port}....`)
})
