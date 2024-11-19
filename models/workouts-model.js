const { ObjectId } = require("mongodb");
const { client, db } = require("../database/database-connection");
const workoutsDb = db.collection("workouts");

function fetchWorkouts(userId) {
    return client.connect().then(() => {
        return workoutsDb.find({user_id: new ObjectId(userId)}).toArray();
    }).then((workouts) => {
        return workouts;
    })
}


module.exports = { fetchWorkouts }