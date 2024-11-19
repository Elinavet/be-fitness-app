const { fetchWorkouts } = require("../models/workouts-model")


function getWorkouts(request, response, next) {
    const id = request.params.user_id
    fetchWorkouts(id).then((workouts) => {
        response.status(200).send({workouts})
    }).catch((err) => {
        next(err)
    })
}

module.exports = { getWorkouts }