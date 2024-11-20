const { ObjectId } = require("mongodb");
const { client, db } = require("../database/connection.js");
const exerciseDb = db.collection("exercises")

function fetchAllExercises(){
    return client.connect().then(() => {
        return exerciseDb.find({}).toArray()
    }).then((exercises) => {
        return exercises
    })
}

function fetchExerciseById(exerciseId) {
    return client.connect().then(() => {
        return exerciseDb.findOne({_id: new ObjectId(exerciseId)})
    }).then((exercise) => {
        if(!exercise) {
            return Promise.reject({ status: 404, message: "Exercise not found"});
        }
        return exercise;
    })
}

module.exports = { fetchAllExercises, fetchExerciseById }