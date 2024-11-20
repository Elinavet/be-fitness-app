const { ObjectId } = require("mongodb");

module.exports = [
  {
    _id: new ObjectId("673b26e3656d6301098761e0"),
    exercise_ids: [
      new ObjectId("673b26e3656d6301098761ba"), // Push-up
      new ObjectId("673b26e3656d6301098761bb"), // Squat
      new ObjectId("673b26e3656d6301098761be"), // Plank
      new ObjectId("673b26e3656d6301098761bc"), // Pull-up
      new ObjectId("673b26e3656d6301098761bd")  // Bench Press
    ],
    difficulty_level: 1,
    date_completed: new Date("2024-11-20T08:00:00Z"),
    xp_earned: 500
  },
  {
    _id: new ObjectId("673b26e3656d6301098761e1"),
    exercise_ids: [
      new ObjectId("673b26e3656d6301098761bc"), // Pull-up
      new ObjectId("673b26e3656d6301098761bf"), // Deadlift
      new ObjectId("673b26e3656d6301098761bd"), // Bench Press
      new ObjectId("673b26e3656d6301098761be"), // Plank
      new ObjectId("673b26e3656d6301098761bb")  // Squat
    ],
    difficulty_level: 3,
    date_completed: new Date("2024-11-19T07:30:00Z"),
    xp_earned: 600
  },
  {
    _id: new ObjectId("673b26e3656d6301098761e2"),
    exercise_ids: [
      new ObjectId("673b26e3656d6301098761bd"), // Bench Press
      new ObjectId("673b26e3656d6301098761be"), // Plank
      new ObjectId("673b26e3656d6301098761ba"), // Push-up
      new ObjectId("673b26e3656d6301098761bc"), // Pull-up
      new ObjectId("673b26e3656d6301098761bb"), // Squat
      new ObjectId("673b26e3656d6301098761bf")  // Deadlift
    ],
    difficulty_level: 2,
    date_completed: new Date("2024-11-20T06:00:00Z"),
    xp_earned: 600
  },
  {
    _id: new ObjectId("673b26e3656d6301098761e3"),
    exercise_ids: [
      new ObjectId("673b26e3656d6301098761bf"), // Deadlift
      new ObjectId("673b26e3656d6301098761bc"), // Pull-up
      new ObjectId("673b26e3656d6301098761bb"), // Squat
      new ObjectId("673b26e3656d6301098761bd"), // Bench Press
      new ObjectId("673b26e3656d6301098761ba"), // Push-up
      new ObjectId("673b26e3656d6301098761be")  // Plank
    ],
    difficulty_level: 3,
    date_completed: new Date("2024-11-19T20:00:00Z"),
    xp_earned: 800
  }
]

