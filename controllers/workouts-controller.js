const { fetchWorkoutByLevel, fetchAllWorkouts } = require("../models/workouts-model.js")


function getAllWorkouts(request, response, next) {
    const { sort_by, order } = request.query;

    const validCols = ["total_duration", "level"]
    const validOrder = ["ASC", "DESC"]

    const normalizedOrder = order ? order.toUpperCase() : undefined;

    if (sort_by && !validCols.includes(sort_by)) {
        return response.status(400).send({ message: "Invalid sort by"})
    }
    if (normalizedOrder && !validOrder.includes(normalizedOrder)) {
        return response.status(400).send({ message: "Invalid order"})
    }

    fetchAllWorkouts(sort_by, normalizedOrder).then((workouts) => {
        response.status(200).send({workouts});
    }).catch((err) => {
        next(err)
    })
}


function getWorkoutByLevel(request, response, next) {
    const { level } = request.params;
    fetchWorkoutByLevel(level).then((workout) => {
        response.status(200).send({workout})
    }).catch((err) => {
        next(err);
    })

}

module.exports = { getWorkoutByLevel, getAllWorkouts }