require("dotenv").config();
require("./src/config/db");

const express = require("express");
const app = express();

// Middlewares
app.use((req, res, next) => {
    next()
})

// Parser JSON
app.use(express.json())

// Routes
app.use("/admin", require("./src/routes/admin"))
app.use("/", require("./src/routes/index"))

// Server
app.listen(process.env.PORT || 3000, () =>
    console.log(`Server is running... http://127.0.0.1:${process.env.PORT}`)
)
