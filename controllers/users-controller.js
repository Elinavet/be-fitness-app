const { fetchAllUsers, fetchUserById, updateUser, addGoal, removeGoal } = require("../models/users-model")

function getAllUsers(request, response, next){
    fetchAllUsers(request.query).then((users) => {
        response.status(200).send({users})
    }).catch((err) => {
        next(err)
    })
}

function getUserById(request, response, next){
    fetchUserById(request.params.user_id).then((user) => {
        response.status(200).send({user})
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

function patchUser(request, response, next){
    updateUser(request.params.user_id, request.body).then((user) => {
        response.status(200).send({user})
    }).catch((err) => {
        next(err)
    })
}

module.exports = { getAllUsers, getUserById, patchUser, postGoal, deleteGoal }