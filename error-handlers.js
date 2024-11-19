function invalidEndpoint(request, response, next){
    response.status(404).send({message: "Endpoint not found"})
}

function mongoErrors(err, request, response, next){
    if(err.message === "input must be a 24 character hex string, 12 byte Uint8Array, or an integer"){
        response.status(400).send({message: "Invalid ID"})
    }
    next(err)
}

function customErrors(err, request, response, next){
    if(err.status && err.message){
        response.status(err.status).send({message: err.message})
    }
    next(err)
}

function internalServerError(err, request, response, next){
    response.status(500).send({message: "Internal server error"})
}

module.exports = { invalidEndpoint, mongoErrors, internalServerError, customErrors }