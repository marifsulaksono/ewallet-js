const express = require('express')
const bodyParser = require('body-parser')
const db = require('./connection')
const app = express()
const port = 8000

app.get("/", (request, response) => {
    response.send('Hello world')
})

app.listen(port, () => {
    console.log(`server started at localhost:${port}`)
})
