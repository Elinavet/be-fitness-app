const {client, db} = require("../database/connection.js")
const { ObjectId } = require("mongodb")
const usersDb = db.collection("users")

function fetchGoals(userId){
    return client.connect().then(() => {
        return usersDb.findOne({_id: new ObjectId(userId)}).then((user) => {
            if(!user){
                return Promise.reject({status: 404, message: "User not found"})
            }
            return user.goals
        })
    })
}

function addGoal(userId, goalToAdd){
    return client.connect().then(() => {
        return usersDb.findOne({_id: new ObjectId(userId)})
    }).then((user) => {
        if(!user){
            return Promise.reject({status: 404, message: "User not found"})
        }
        if(user.goals.includes(goalToAdd)){
            return Promise.reject({status: 400, message: "Goal already exists"})
        }
        user.goals.push(goalToAdd)
        return usersDb.findOneAndUpdate({_id: new ObjectId(userId)}, {$set: {goals: user.goals}}, {returnDocument: "after"})
    }).then((user) => {
        return user.goals
    })
}

function removeGoal(userId, goalToRemove){
    return client.connect().then(() => {
        return usersDb.findOne({_id: new ObjectId(userId)})
    }).then((user) => {
        if(!user){
            return Promise.reject({status: 404, message: "User not found"})
        }
        if(!user.goals.includes(goalToRemove)){
            return Promise.reject({status: 404, message: "Goal not found"})
        }
        user.goals.splice(user.goals.indexOf(goalToRemove), 1)
        return usersDb.findOneAndUpdate({_id: new ObjectId(userId)}, {$set: {goals: user.goals}}, {returnDocument: "after"})
    })
}

module.exports = { addGoal, removeGoal, fetchGoals }