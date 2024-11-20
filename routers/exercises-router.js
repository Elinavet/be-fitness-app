const express = require("express")
const { getExercise } = require("../controllers/exercises-controller.js")

const router = express.Router();

router.route("/:exercise_id")
.get(getExercise)


module.exports = router;