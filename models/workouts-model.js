const { ObjectId } = require("mongodb");
const { client, db } = require("../database/connection.js");
const workoutsDb = db.collection("workouts");

function fetchAllWorkouts(sort_by = "level", order = "ASC"){
    const validCols = ["total_duration", "level"]
    const validOrder = ["ASC", "DESC"]

    if (!validCols.includes(sort_by)) sort_by = "level";
    if (!validOrder.includes(order)) order = "ASC"; 

    return client.connect().then(() => {
        return workoutsDb.aggregate([
            { $sort: { [sort_by]: order === "DESC" ? -1 : 1 }}
        ]).toArray()
    }).then((workouts) => {
        return workouts;
    })
}


function fetchWorkoutByLevel(workoutLevel) {
    if (isNaN(workoutLevel)) {
        return Promise.reject({status: 400, message: "Invalid level"})
    }
    return client.connect().then(() => {
        return workoutsDb.findOne({level: parseInt(workoutLevel)});
    }).then((workout) => {
        if(!workout) {
            return Promise.reject({status: 404, message: "Workout not found"});
        }
        return workout;
    })

}


module.exports = { fetchWorkoutByLevel, fetchAllWorkouts }