const express = require("express")
const app = express()
const users = require("./routers/users-router.js")
const cors = require("cors")

app.use(cors())
app.use("/api/users", users)


module.exports = app