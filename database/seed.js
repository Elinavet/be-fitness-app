const {db, client} = require("./database-connection.js")

function seed({users, exercises, workouts}){
    return db.collection("workouts").drop().then(() => {
        return db.collection("users").drop()
    }).then(() => {
        return db.collection("exercises").drop()
    }).then(() => {
        return db.createCollection("users")
    }).then(() => {
        return db.collection("users").insertMany(users)
    }).then(() => {
        return db.collection("users").find({}).toArray()
    }).then((users) => {
        const promises = users.map((user) => {
            db.collection("users").findOneAndUpdate({_id: user._id}, {$set: {image_url: "https://hips.hearstapps.com/hmg-prod/images/hlh070123feacover-004-hi-646d26d7015ef.jpg"}})
        })
        return Promise.all(promises)
    }).then(() => {
        return db.createCollection("exercises")
    }).then(() => {
        return db.collection("exercises").insertMany(exercises)
    }).then(() => {
        return db.createCollection("workouts")
    }).then(() => {
        return db.collection("workouts").insertMany(workouts)
    })
    .catch((err) => {
        return err
    })
}

module.exports = seed