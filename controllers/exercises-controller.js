const { fetchExerciseById, fetchAllExercises } = require("../models/exercises-model");

function getAllExercises(request, response, next){
    fetchAllExercises().then((exercises) => {
        response.status(200).send({exercises})
    }).catch((err) => {
        next(err)
    })
}

function getExerciseById(request, response, next) {
    const id = request.params.exercise_id;
    fetchExerciseById(id).then((exercise) => {
        response.status(200).send({exercise})
    }).catch((err) => {
        next(err)
    })

}


module.exports = { getAllExercises, getExerciseById }