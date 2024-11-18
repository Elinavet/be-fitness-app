const {client, db} = require("../database/database-connection.js")

function fetchAllUsers(){
    return client.connect().then(() => {
        return db.collection("users").find({}).toArray().then((users) => {
            return users
        })
    })
    
}

module.exports = { fetchAllUsers }