const { ObjectId } = require("mongodb")

const workouts = [
  {
    _id: new ObjectId("648d9f1a7a2d5b1f1e6d1237"),
    level: 1,
    exercise_names: ["Push-Ups", "Jumping Jacks", "Plank"],
  },
  {
    level: 2,
    exercise_names: ["Squats", "Plank", "Mountain Climbers"],
  },
  {
    level: 3,
    exercise_names: ["Burpees", "Lunges", "Push-Ups", "Jumping Jacks"],
  },
  {
    level: 4,
    exercise_names: ["Bicep Curls", "Tricep Dips", "Mountain Climbers", "Squats"],
  },
  {
    level: 5,
    exercise_names: ["Lunges", "Burpees", "Plank", "Push-Ups", "Jumping Jacks"],
  },
  {
    level: 6,
    exercise_names: ["Squats", "Bicep Curls", "Tricep Dips", "Mountain Climbers", "Burpees", "Lunges"],
  },
];

module.exports = workouts
