const client = require("./client-connection.js")

const ENV = process.env.NODE_ENV || "development"

require("dotenv").config({
    path: `${__dirname}/../.env.${ENV}`
})

if (!process.env.DATABASE_NAME) {
  throw new Error('DATABASE_NAME not set');
}

const db = client.db(process.env.DATABASE_NAME)

module.exports = {db, client}