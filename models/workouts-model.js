const { ObjectId } = require("mongodb");
const { client, db } = require("../database/connection.js");
const workoutsDb = db.collection("workouts");

function fetchAllWorkouts(){
    return client.connect().then(() => {
        return workoutsDb.find({}).toArray()
    }).then((workouts) => {
        return workouts
    })
}


function fetchWorkoutByLevel(workoutLevel) {
    return client.connect().then(() => {
        return workoutsDb.findOne({level: workoutLevel});
    }).then((workout) => {
        console.log(level)
        if(!workout) {
            return Promise.reject({status: 404, message: "Workout not found"});
        }
        return workout
    })
}


module.exports = { fetchWorkoutByLevel, fetchAllWorkouts }