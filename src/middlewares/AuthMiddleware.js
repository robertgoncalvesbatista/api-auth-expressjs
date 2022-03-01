const User = require("../models/User")
const jwt = require("../config/jwt")

module.exports = {
    async admin(req, res, next) {
        const [, token] = req.headers.authorization.split(" ")

        try {
            const payload = jwt.verify(token)
            const user = await User.findById(payload.user)

            if (!user) {
                return res.status(401).send("User not found")
            }

            req.auth = user

            next()
        } catch (error) {
            res.status(401, error).send("Error header authorization")
        }
    }
}