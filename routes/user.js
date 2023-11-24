const express = require('express')
const router = express()
const userController = require("../controller/user")

// list of user routes
router.get("/", userController.getAllUsers)
router.post("/", userController.insertNewUser)

module.exports = router