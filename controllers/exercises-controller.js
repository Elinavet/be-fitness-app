const { fetchExerciseById } = require("../models/exercises-model");


function getExerciseById(request, response, next) {
    const id = request.params.exercise_id;
    fetchExerciseById(id).then((exercise) => {
        response.status(200).send({exercise})
    }).catch((err) => {
        next(err)
    })

}


module.exports = { getExerciseById }