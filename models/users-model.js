const {client, db} = require("../database/database-connection.js")
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
    return client.connect().then(() => {
        return usersDb.findOneAndUpdate({_id: new ObjectId(userId)}, {$inc: {xp: propertiesToUpdate.xp_increment}}, {returnDocument: "after"})
    }).then((user) => {
        console.log(user)
        return user
    })
}

module.exports = { fetchAllUsers, fetchUserById, updateUser }