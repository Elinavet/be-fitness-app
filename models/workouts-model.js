const { ObjectId } = require("mongodb");
const { client, db } = require("../database/database-connection");
const { fetchExerciseById } = require("./exercises-model");
const workoutsDb = db.collection("workouts");

function fetchWorkouts(userId) {
    return client.connect().then(() => {
        return workoutsDb.find({user_id: new ObjectId(userId)}).toArray();
    }).then((workouts) => {
        if (workouts.length === 0) {
            return Promise.reject({status: 404, message: "Workout not found"})
        }
        const allPromises = workouts.map((workout) => {
            const userPromises = []
            workout.exercise_ids.forEach((exerciseId) => {
                userPromises.push(fetchExerciseById(exerciseId))
            })
            return Promise.all(userPromises)
        })
        return Promise.all([Promise.all(allPromises), workouts])
    }).then(([exercises, workouts]) => {
        workouts.forEach((workout, index) => {
            workout.exercise_names = exercises[index].map((exercise) => {
                return exercise.exercise_name
            })
            delete workout.exercise_ids
        })
        return workouts
    })
}


module.exports = { fetchWorkouts }