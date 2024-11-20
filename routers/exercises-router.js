const express = require("express")
const { getExerciseById, getAllExercises } = require("../controllers/exercises-controller.js")

const router = express.Router();

router.route("/")
.get(getAllExercises)

router.route("/:exercise_id")
.get(getExerciseById)


module.exports = router;