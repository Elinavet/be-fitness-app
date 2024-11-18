const { MongoClient, ServerApiVersion } = require('mongodb')

require("dotenv").config({
    path: `${__dirname}/../.env.connection`
})
const uri = process.env.DATABASE_URI

if (!process.env.DATABASE_URI) {
  throw new Error('DATABASE_URI not set');
}

const ENV = process.env.NODE_ENV || "development"

require("dotenv").config({
    path: `${__dirname}/../.env.${ENV}`
})

if (!process.env.DATABASE_NAME) {
  throw new Error('DATABASE_NAME not set');
}

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
})

/*async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect()
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 })
    //console.log("Pinged your deployment. You successfully connected to MongoDB!")
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close()
  }
}
run().catch(console.dir)*/

module.exports = client