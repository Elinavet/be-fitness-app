const {client, db} = require("../database/connection.js")
const { ObjectId } = require("mongodb")
const usersDb = db.collection("users")

function fetchAllUsers(queries){
    const sort_by = queries.sort_by ? queries.sort_by : "xp"
    const order = queries.order ? (queries.order.toLowerCase() === "asc" ? 1 : (queries.order.toLowerCase() === "desc" ? -1 : undefined)) : -1
    const validSortBy = ["xp", "age", "level"]

    if(!validSortBy.includes(sort_by)){
        return Promise.reject({status: 400, message: "Invalid sort_by"})
    }

    if(order !== 1){
        if(order !== -1){
            return Promise.reject({status:400, message: "Invalid order"})
        }
    }
    
    return client.connect().then(() => {
        return usersDb.find({}).sort({[sort_by]: order}).toArray()
    }).then((users) => {
        return users
    })
    
}

function fetchUserById(userId, queries){
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
    const validKeys = ["level_increment"]
    for(const key of Object.keys(propertiesToUpdate)){
        if(!validKeys.includes(key)){
            delete propertiesToUpdate[key]
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

        const newProperties = {}
        if(propertiesToUpdate.level_increment !== 1){
            if(propertiesToUpdate.level_increment !== -1){
                return Promise.reject({status: 400, message: "Level increment must be 1 or -1"})
            }
        }
        const newLevel = user.level + propertiesToUpdate.level_increment
        if(propertiesToUpdate.level_increment){
            if(newLevel < 1){
                return Promise.reject({status: 400, message: "User's level cannot be decremented any further"})
            }
            if(propertiesToUpdate.level_increment === 1){
                if(!user.workout_log){
                    user.workout_log = [{level: user.level, date_completed: new Date()}]
                } else {
                    user.workout_log.push({level: user.level, date_completed: new Date()})
                }
            } else {
                user.workout_log.pop()
            }
            newProperties.level = newLevel
            newProperties.workout_log = user.workout_log
        }

        return usersDb.findOneAndUpdate(
            {_id: new ObjectId(userId)}, 
            {$set: newProperties}, 
            {returnDocument: "after"})
    }).then((user) => {
        return user
    })
}

module.exports = { fetchAllUsers, fetchUserById, updateUser }