const { MongoClient, ServerApiVersion } = require('mongodb')

require("dotenv").config({
    path: `${__dirname}/../.env.connection`
})
const uri = process.env.DATABASE_URI

if (!process.env.DATABASE_URI) {
  throw new Error('DATABASE_URI not set');
}

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
})

const ENV = process.env.NODE_ENV || "development"

require("dotenv").config({
    path: `${__dirname}/../.env.${ENV}`
})

if (!process.env.DATABASE_NAME) {
  throw new Error('DATABASE_NAME not set');
}

const db = client.db(process.env.DATABASE_NAME)

module.exports = {db, client}