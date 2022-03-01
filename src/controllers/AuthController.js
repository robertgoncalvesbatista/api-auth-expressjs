const User = require("../models/User")
const jwt = require("../config/jwt")

module.exports = {
    async authenticate(req, res) {
        try {
            const { email, password } = req.body
            const user = await User.findOne({ email, password })

            if (!user) {
                return res.status(401).send("User not found")
            }

            const token = jwt.sign({ user: user.id })

            res.send({ user, token })
        } catch (error) {
            res.status(401).send("Error to authenticate")
        }
    },
    async register(req, res) {
        try {
            const result = await User.create(req.body)
            const {
                password,
                ...user
            } = result.toObject()

            const token = jwt.sign({ user: user.id })

            res.send({ user, token })
        } catch (error) {
            res.status(400).send(error)
        }
    },
    async me(req, res) {
        res.send(req.auth)
    }
}