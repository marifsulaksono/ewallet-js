require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const transactionRoutes = require('./routes/transaction')
const app = express()
const port = process.env.SERVER_PORT || 8080

// middleware to control request HTTP
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//grouping transaction routes
app.use("/transactions", transactionRoutes)

// start server
app.listen(port, () => {
    console.log(`server started at localhost:${port}....`)
})
