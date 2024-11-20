const { fetchExerciseById: fetchExercise } = require("../models/exercises-model");


function getExercise(request, response, next) {
    const id = request.params.exercise_id;
    fetchExercise(id).then((exercise) => {
        response.status(200).send({exercise})
    }).catch((err) => {
        next(err)
    })

}


module.exports = { getExercise }