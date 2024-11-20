const { ObjectId } = require("mongodb");

module.exports = [
  {
    _id: new ObjectId("673b26e3656d6301098761e0"),
    user_id: new ObjectId("673b26e3656d6301098761d0"), // Alice Johnson
    exercise_ids: [
      new ObjectId("673b26e3656d6301098761ba"), // Push-up
      new ObjectId("673b26e3656d6301098761bb"), // Squat
      new ObjectId("673b26e3656d6301098761be"), // Plank
      new ObjectId("673b26e3656d6301098761bc"), // Pull-up
      new ObjectId("673b26e3656d6301098761bd"), // Bench Press
      new ObjectId("673b26e3656d6301098761bf")  // Deadlift
    ],
    difficulty_level: 1,
    date_completed: new Date("2024-11-20T08:00:00Z"),
    duration_in_seconds: 4800,
    xp_earned: 500
  },
  {
    _id: new ObjectId("673b26e3656d6301098761e1"),
    user_id: new ObjectId("673b26e3656d6301098761d1"), // Bob Smith
    exercise_ids: [
      new ObjectId("673b26e3656d6301098761bc"), // Pull-up
      new ObjectId("673b26e3656d6301098761bf"), // Deadlift
      new ObjectId("673b26e3656d6301098761bd"), // Bench Press
      new ObjectId("673b26e3656d6301098761be"), // Plank
      new ObjectId("673b26e3656d6301098761bb")  // Squat
    ],
    difficulty_level: 3,
    date_completed: new Date("2024-11-19T07:30:00Z"),
    duration_in_seconds: 5400,
    xp_earned: 600
  },
  {
    _id: new ObjectId("673b26e3656d6301098761e2"),
    user_id: new ObjectId("673b26e3656d6301098761d2"), // Charlie Davis
    exercise_ids: [
      new ObjectId("673b26e3656d6301098761bd"), // Bench Press
      new ObjectId("673b26e3656d6301098761be"), // Plank
      new ObjectId("673b26e3656d6301098761ba"), // Push-up
      new ObjectId("673b26e3656d6301098761bc"), // Pull-up
      new ObjectId("673b26e3656d6301098761bb"), // Squat
      new ObjectId("673b26e3656d6301098761bf"), // Deadlift
      new ObjectId("673b26e3656d6301098761ba")  // Push-up (repeated for variety)
    ],
    difficulty_level: 2,
    date_completed: new Date("2024-11-20T06:00:00Z"),
    duration_in_seconds: 5400,
    xp_earned: 600
  },
  {
    _id: new ObjectId("673b26e3656d6301098761e3"),
    user_id: new ObjectId("673b26e3656d6301098761d4"), // Evan Green
    exercise_ids: [
      new ObjectId("673b26e3656d6301098761bf"), // Deadlift
      new ObjectId("673b26e3656d6301098761bc"), // Pull-up
      new ObjectId("673b26e3656d6301098761bb"), // Squat
      new ObjectId("673b26e3656d6301098761bd"), // Bench Press
      new ObjectId("673b26e3656d6301098761ba"), // Push-up
      new ObjectId("673b26e3656d6301098761be"), // Plank
      new ObjectId("673b26e3656d6301098761bc"), // Pull-up (repeated)
      new ObjectId("673b26e3656d6301098761bf")  // Deadlift (repeated)
    ],
    difficulty_level: 3,
    date_completed: new Date("2024-11-19T20:00:00Z"),
    duration_in_seconds: 7200,
    xp_earned: 800
  }
]
