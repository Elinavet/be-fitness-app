const express = require("express");
const { getWorkoutById } = require("../controllers/workouts-controller");

const router = express.Router();

router.route("/:workout_id")
.get(getWorkoutById)

module.exports = router;