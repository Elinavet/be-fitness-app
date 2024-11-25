const express = require("express")
const { getAllUsers, getUserById, patchUser } = require("../controllers/users-controller.js")
const { getGoals, postGoal, deleteGoal } = require("../controllers/goals-controller.js")
const router = express.Router()

router.route("/")
.get(getAllUsers)

router.route("/:user_id")
.get(getUserById)
.patch(patchUser)

router.route("/:user_id/goals")
.get(getGoals)
.post(postGoal)
.delete(deleteGoal)

module.exports = router