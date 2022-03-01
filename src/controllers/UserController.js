const User = require("../models/User")

module.exports = {
    async readAll(req, res) {
        try {
            const readAllUsers = await User.find()

            return res.send({ readAllUsers })
        } catch (error) {
            res.status(400).send(error)
        }
    },
    async create(req, res) {
        try {
            const createUser = await User.create(req.body)

            return res.send({ createUser })
        } catch (error) {
            res.status(400).send(error)
        }
    },
    async read(req, res) {
        try {
            const readUser = await User.findById(req.params._id)

            return res.send({ readUser })
        } catch (error) {
            res.status(400).send(error)
        }
    },
    async update(req, res) {
        try {
            const userUpdate = await User.findByIdAndUpdate(req.params._id, req.body)

            return res.send({ userUpdate })
        } catch (error) {
            res.status(400).send(error)
        }
    },
    async delete(req, res) {
        try {
            const deleteUser = await User.findByIdAndDelete(req.params._id)

            return res.send({ deleteUser })
        } catch (error) {
            res.status(400).send(error)
        }
    }
}
