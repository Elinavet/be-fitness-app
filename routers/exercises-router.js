const express = require("express")
const { getExerciseById } = require("../controllers/exercises-controller.js")

const router = express.Router();

router.route("/:exercise_id")
.get(getExerciseById)


module.exports = router;