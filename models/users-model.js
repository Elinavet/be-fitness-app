const {client, db} = require("../database/database-connection.js")
const { ObjectId } = require("mongodb")

function fetchAllUsers(){
    return client.connect().then(() => {
        return db.collection("users").find({}).toArray()
    }).then((users) => {
        return users
    })
    
}

function fetchUserById(Id){
    return client.connect().then(() => {
        return db.collection("users").findOne({_id: new ObjectId(Id)})
    }).then((user) => {
        return user
    })
}

module.exports = { fetchAllUsers, fetchUserById }