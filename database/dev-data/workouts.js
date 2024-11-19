const { ObjectId } = require("mongodb");

module.exports = [
  {
    _id: new ObjectId("673b26e3656d6301098761e0"),
    user_id: new ObjectId("673b26e3656d6301098761d0"), // Alice Johnson
    exercise_names: ["Push-up", "Squat"],
    difficulty_level: 1,
    date_completed: new Date("2024-11-20T08:00:00Z"),
    duration_in_seconds: 1800,
    xp_earned: 200
  },
  {
    _id: new ObjectId("673b26e3656d6301098761e1"),
    user_id: new ObjectId("673b26e3656d6301098761d1"), // Bob Smith
    exercise_names: ["Pull-up"],
    difficulty_level: 3,
    date_completed: new Date("2024-11-19T07:30:00Z"),
    duration_in_seconds: 1200,
    xp_earned: 300
  },
  {
    _id: new ObjectId("673b26e3656d6301098761e2"),
    user_id: new ObjectId("673b26e3656d6301098761d2"), // Charlie Davis
    exercise_names: ["Bench Press", "Plank"],
    difficulty_level: 2,
    date_completed: new Date("2024-11-20T06:00:00Z"),
    duration_in_seconds: 1500,
    xp_earned: 250
  },
  {
    _id: new ObjectId("673b26e3656d6301098761e3"),
    user_id: new ObjectId("673b26e3656d6301098761d4"), // Evan Green
    exercise_names: ["Deadlift"],
    difficulty_level: 3,
    date_completed: new Date("2024-11-19T20:00:00Z"),
    duration_in_seconds: 2400,
    xp_earned: 400
  }
]
