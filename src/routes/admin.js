const { Router } = require("express")
const routes = Router()

const AuthController = require("../controllers/AuthController")
const AuthMiddleware = require("../middlewares/AuthMiddleware")

routes.post("/authenticate", AuthController.authenticate)
routes.post("/register", AuthController.register)

routes.get("/me", AuthMiddleware.admin, AuthController.me)

module.exports = routes