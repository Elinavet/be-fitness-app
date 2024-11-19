const express = require("express")
const app = express()
const users = require("./routers/users-router.js")
const cors = require("cors")
const { invalidEndpoint, mongoErrors, internalServerError, customErrors } = require("./error-handlers.js")

app.use(cors())
app.use("/api/users", users)

// Error handling
app.use(invalidEndpoint)

app.use(mongoErrors)
app.use(customErrors)

app.use(internalServerError)


module.exports = app