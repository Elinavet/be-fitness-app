const { ObjectId } = require("mongodb");
const { client, db } = require("../database/database-connection");
const exerciseDb = db.collection("exercises")

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

module.exports = { fetchExerciseById }