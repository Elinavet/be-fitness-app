const express = require("express")
const { getAllUsers, getUserById, patchUser } = require("../controllers/users-controller.js")
const { getWorkouts } = require("../controllers/workouts-controller.js")
const router = express.Router()

router.route("/")
.get(getAllUsers)

router.route("/:user_id")
.get(getUserById)
.patch(patchUser)

router.route("/:user_id/workouts")
.get(getWorkouts)

module.exports = router