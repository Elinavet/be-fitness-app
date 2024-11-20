const { fetchWorkoutsByUserId, fetchWorkoutById } = require("../models/workouts-model.js")


function getWorkoutsByUserId(request, response, next) {
    fetchWorkoutsByUserId(request.params.user_id).then((workouts) => {
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

module.exports = { getWorkoutsByUserId, getWorkoutById }