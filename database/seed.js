const {db} = require("./database-connection.js")

function seed({users, exercises, workouts}){
    db.collection("users").drop()
    db.createCollection("users")
    return db.collection("users").insertMany(users).then(() => {
        db.collection("exercises").drop()
        db.createCollection("exercises")
        return db.collection("exercises").insertMany(exercises)
    }).then(() => {
        db.collection("workouts").drop()
        db.createCollection("workouts")
        return db.collection("workouts").insertMany(workouts)
    })
    .catch((err) => {
        return err
    })
}

module.exports = seed