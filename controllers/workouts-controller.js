const { fetchWorkouts, fetchWorkoutById } = require("../models/workouts-model")


function getWorkouts(request, response, next) {
    const id = request.params.user_id
    fetchWorkouts(id).then((workouts) => {
        response.status(200).send({workouts})
    }).catch((err) => {
        next(err)
    })
}

function getWorkoutById(request, response, next) {
    fetchWorkoutById(request.params.workout_id).then((workout) => {
        response.status(200).send({workout})
    }).catch((err) => {
        next(err);
    })

}

module.exports = { getWorkouts, getWorkoutById }