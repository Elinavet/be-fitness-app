const { fetchWorkoutByLevel, fetchAllWorkouts } = require("../models/workouts-model.js")


function getAllWorkouts(request, response, next) {
    fetchAllWorkouts().then((workouts) => {
        response.status(200).send({workouts});
    }).catch((err) => {
        next(err)
    })
}


function getWorkoutByLevel(request, response, next) {
    fetchWorkoutByLevel(request.params.level).then((workout) => {
        response.status(200).send({workout})
    }).catch((err) => {
        next(err);
    })

}

module.exports = { getWorkoutByLevel, getAllWorkouts }