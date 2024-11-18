const client = require("./connection.js")

function seed({users, exercises, workouts}){
    client.connect().then(() => {
        const oldDatabase = client.db(process.env.DATABASE_NAME)
        oldDatabase.dropDatabase()
        const newDatabase = client.db(process.env.DATABASE_NAME)
        newDatabase.createCollection("users")
        return Promise.all([newDatabase.collection("users").insertMany(users), newDatabase])
    }).then(([usersInsert, newDatabase]) => {
        newDatabase.createCollection("exercises")
        return Promise.all([newDatabase.collection("exercises").insertMany(exercises), newDatabase])
    }).then(([exercisesInsert, newDatabase]) => {
        newDatabase.createCollection("workouts")
        return newDatabase.collection("workouts").insertMany(workouts)
    }).catch((err) => {
        console.log(err)
    })
}

module.exports = seed