const express = require("express")
const { getAllUsers, getUserById, patchUser, postGoal, deleteGoal } = require("../controllers/users-controller.js")
const router = express.Router()

router.route("/")
.get(getAllUsers)

router.route("/:user_id")
.get(getUserById)
.patch(patchUser)

router.route("/:user_id/goals")
.post(postGoal)
.delete(deleteGoal)

module.exports = router