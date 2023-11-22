const mysql = require('mysql')
const db = mysql.createConnection({
    host: "localhost", user: "root", password: "root", database: "db_financial"
})

db.connect((err) => {
    if (err) throw err
    console.log("Success connect to database...")
})

module.exports = db