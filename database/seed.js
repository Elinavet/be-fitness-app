const client = require("./connection.js")

function seed({users, exercises}){
    client.connect().then(() => {
        const oldDatabase = client.db(process.env.DATABASE_NAME)
        oldDatabase.dropDatabase()
        const newDatabase = client.db(process.env.DATABASE_NAME)
        newDatabase.createCollection("users")
        return Promise.all([newDatabase.collection("users").insertMany(users), newDatabase])
    }).then(([insertResult, newDatabase]) => {
        newDatabase.createCollection("exercises")
        newDatabase.collection("exercises").insertMany(exercises)
    })
    .catch((err) => {
        console.log(err)
    })
}

module.exports = seed