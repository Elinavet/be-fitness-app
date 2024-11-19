const express = require("express")
const { getAllUsers, getUserById } = require("../controllers/users-controller.js")
const router = express.Router()

router.route("/")
.get(getAllUsers)

router.route("/:user_id")
.get(getUserById)

module.exports = router