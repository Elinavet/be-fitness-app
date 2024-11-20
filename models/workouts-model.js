const { ObjectId } = require("mongodb");
const { client, db } = require("../database/database-connection");
const workoutsDb = db.collection("workouts");

function fetchWorkouts(userId) {
    return client.connect().then(() => {
        return workoutsDb.find({user_id: new ObjectId(userId)}).toArray();
    }).then((workouts) => {
        if (workouts.length === 0) {
            return Promise.reject({status: 404, message: "Workout not found"})
        }
        return workouts;
    })
}


module.exports = { fetchWorkouts }