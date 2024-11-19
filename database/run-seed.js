const devData = require("./dev-data/index.js")
const seed = require("./seed.js")
const {db, client} = require("./database-connection.js")

function runSeed(){
    client.connect().then(() => {
        return seed(devData)
    }).then(() => {
        client.close()
    })
}

runSeed()