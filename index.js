const express = require('express')
const bodyParser = require('body-parser')
const db = require('./connection')
const response = require('./response')
const app = express()
const port = 8000

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/transactions", (req, res) => {
    const querySql = "select * from transaction"
    db.query(querySql, (error, result) => {
        if (error) {
            return response(500, "", error, res)
        } else if (result.length == 0) {
            return response(404, "", `transaction is empty`, res)
        }
        response(200, result, "success get all transaction", res)
    })
})

app.get("/transactions/:id", (req, res) => {
    const querySql = `select * from transaction where id = ${req.params.id}`
    db.query(querySql, (error, result) => {
        if (error) {
            return response(500, "", error, res)
        } else if (result.length == 0) {
            return response(404, "", `transaction ${req.params.id} is not found`, res)
        }
        response(200, result, `success get transaction ${req.params.id}`, res)
    })
})

app.post("/transactions", (req, res) => {
    const data = { ...req.body }
    const querySql = `insert into transaction set ?`
    db.query(querySql, data, (error, result) => {
        if (error) {
            console.log(error)
            return response(500, "", "insert data error", res)
        }

        const data = {
            id: result.insertId
        }
        response(201, data, "success insert new transction", res)
    })
})

app.put("/transactions/:id", (req, res) => {
    const data = { ...req.body }
    const id = req.params.id
    const queryId = `select * from transaction where id = ${id}`
    const querySql = `update transaction set ? where id = ${id}`
    db.query(queryId, (error, result) => {
        if (error) {
            return response(500, "", error, res)
        } else if (result.length == 0) {
            return response(404, "", `transaction ${id} is not found`, res)
        }

        db.query(querySql, data, (error, result) => {
            if (error) {
                console.log(error)
                return response(500, "", "update data error", res)
            }

            const data = {
                id: id
            }
            response(200, data, `success update transaction ${id}`, res)
        })
    })
})

app.delete("/transactions/:id", (req, res) => {
    const id = req.params.id
    const querySql = `delete from transaction where id = ${id}`
    db.query(querySql, (error, result) => {
        if (error) {
            console.log(error)
            return response(500, "", "delete data error", res)
        }
        response(200, "", `success delete transaction ${id}`, res)
    })
})

app.listen(port, () => {
    console.log(`server started at localhost:${port}....`)
})
