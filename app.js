const express = require("express")
const app = express()
const users = require("./routers/users-router.js")

app.use("/api/users", users)


module.exports = app