const fetchEndpoints = require("../models/endpoints-model")

function getEndpoints(request, response, next){
    response.status(200).send({endpoints: fetchEndpoints()})
}

module.exports = getEndpoints