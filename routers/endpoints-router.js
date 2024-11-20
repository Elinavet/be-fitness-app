const express = require("express")
const getEndpoints = require("../controllers/endpoints-controller")
const router = express.Router()

router.route("/")
.get(getEndpoints)

module.exports = router