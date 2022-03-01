const { Router } = require("express")
const routes = Router()

const UserController = require("../controllers/UserController")
const AuthMiddleware = require("../middlewares/AuthMiddleware")

// Controllers
routes.get("/readAllUsers", AuthMiddleware.admin, UserController.readAll)
routes.post("/createUser", AuthMiddleware.admin, UserController.create)
routes.get("/readUser/:_id", AuthMiddleware.admin, UserController.read)
routes.put("/updateUser/:_id", AuthMiddleware.admin, UserController.update)
routes.delete("/deleteUser/:_id", AuthMiddleware.admin, UserController.delete)

module.exports = routes
