const express = require('express')
const bodyParser = require('body-parser')
const db = require('./connection')
const response = require('./response')
const app = express()
const port = 8000

app.get("/", (req, res) => {
    const query = "select * from transaction"
    db.query(query, (error, result) => {
        response(200, result, "success get all transaction", res)
    })
})

app.listen(port, () => {
    console.log(`server started at localhost:${port}`)
})
