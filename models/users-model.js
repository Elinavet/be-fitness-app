const {client, db} = require("../database/connection.js")
const { ObjectId } = require("mongodb")
const usersDb = db.collection("users")

function fetchAllUsers(){
    return client.connect().then(() => {
        return usersDb.find({}).toArray()
    }).then((users) => {
        return users
    })
    
}

function fetchUserById(userId){
    return client.connect().then(() => {
        return usersDb.findOne({_id: new ObjectId(userId)})
    }).then((user) => {
        if(!user){
            return Promise.reject({status: 404, message: "User not found"})
        }
        return user
    })
}

function updateUser(userId, propertiesToUpdate){
    const validKeys = ["add_goal", "level_increment"]
    for(const key of Object.keys(propertiesToUpdate)){
        if(!validKeys.includes(key)){
            delete propertiesToUpdate.key
        }
    }
    if(Object.values(propertiesToUpdate).length === 0){
        return Promise.reject({status: 400, message: "Bad request"})
    }
    return client.connect().then(() => {
        return usersDb.findOne({_id: new ObjectId(userId)})
    }).then((user) => {
        if(!user){
            return Promise.reject({status: 404, message: "User not found"})
        }

        user.goals.push(propertiesToUpdate.add_goal)

        if(!user.workout_log){
            user.workout_log = [{level: user.level, date_completed: new Date()}]
        } else {
            user.workout_log.push([{level: user.level, date_completed: new Date()}])
        }

        return usersDb.findOneAndUpdate(
            {_id: new ObjectId(userId)}, 
            {$set: {
                goals: user.goals,
                level: user.level + propertiesToUpdate.level_increment,
                workout_log: user.workout_log
            }}, 
            {returnDocument: "after"})
    }).then((user) => {
        return user
    })
}

module.exports = { fetchAllUsers, fetchUserById, updateUser }