const { addGoal, removeGoal, fetchGoals } = require("../models/goals-model.js")

function getGoals(request, response, next){
    fetchGoals(request.params.user_id).then((goals) => {
        response.status(200).send({goals})
    }).catch((err) => {
        next(err)
    })
}

function postGoal(request, response, next){
    addGoal(request.params.user_id, request.body.goal_to_add).then((goals) => {
        response.status(201).send({goals})
    }).catch((err) => {
        next(err)
    })
}

function deleteGoal(request, response, next){
    removeGoal(request.params.user_id, request.body.goal_to_remove).then(() => {
        response.status(204).send({})
    }).catch((err) => {
        next(err)
    })
}

module.exports = { getGoals, postGoal, deleteGoal }