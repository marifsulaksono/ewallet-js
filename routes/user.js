const express = require('express')
const router = express()
const userController = require("../controller/user")
const middleware = require('../middleware/middleware')

// list of user routes
router.get("/", middleware.jwtMiddleware, userController.getAllUsers)
router.post("/", userController.insertNewUser)
router.get("/:id", userController.getUserById)
router.put("/:id", userController.updateUser)
router.delete("/:id", userController.deleteUser)

module.exports = router