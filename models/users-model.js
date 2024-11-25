const {client, db} = require("../database/connection.js")
const { ObjectId } = require("mongodb")
const usersDb = db.collection("users")

function fetchAllUsers(queries){
    /*const validQueries = ["sort_by", "order"]
    if(!Object.keys(queries).includes(validQueries)){
        return Promise.reject({status: 400, message: "One or more queries are invalid"})
    }*/
    const querySettings = {}
    return client.connect().then(() => {
        return usersDb.find({}).sort({xp: -1}).toArray()
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
    const validKeys = ["level_increment", "image_url"]
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
        
        //handle level increment
        if(propertiesToUpdate.level_increment){
            if(propertiesToUpdate.level_increment !== 1){
                if(propertiesToUpdate.level_increment !== -1){
                    return Promise.reject({status: 400, message: "Level increment must be 1 or -1"})
                }
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

        // handle image_url updates
        if (propertiesToUpdate.image_url !== undefined) {
            if (typeof propertiesToUpdate.image_url !== "string") {
                return Promise.reject({ status: 400, message: "Invalid image URL" });
            }
            const urlPattern = /^(https?:\/\/[^\s$.?#].[^\s]*)$/;
            if (!urlPattern.test(propertiesToUpdate.image_url)) {
                return Promise.reject({ status: 400, message: "Invalid image URL" });
            }
            newProperties.image_url = propertiesToUpdate.image_url;

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