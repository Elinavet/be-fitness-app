const express = require("express")
const { getAllUsers, getUserById, patchUser } = require("../controllers/users-controller.js")
const { getGoals, postGoal, deleteGoal } = require("../controllers/goals-controller.js")
const { getReminders, postReminder, deleteReminder } = require("../controllers/reminders-controller.js")
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

router.route("/:user_id/reminders")
.get(getReminders)
.post(postReminder)
.delete(deleteReminder)

module.exports = router