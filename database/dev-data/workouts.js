const { ObjectId } = require("mongodb");

module.exports = [
  {
    _id: new ObjectId("673b26e3656d6301098761e0"),
    difficulty_level: 1,
    exercise_ids: [
      new ObjectId("673b26e3656d6301098762a0"), // Jumping Jacks (Level 1)
      new ObjectId("673b26e3656d6301098762a1"), // Push-ups (Level 1)
      new ObjectId("673b26e3656d6301098762a2"), // Squats (Level 1)
      new ObjectId("673b26e3656d6301098762a3"), // High Knees (Level 1)
      new ObjectId("673b26e3656d6301098762a4")  // Plank Hold (Level 1)
    ]
  },
  {
    _id: new ObjectId("673b26e3656d6301098761e1"),
    difficulty_level: 3,
    exercise_ids: [
      new ObjectId("673b26e3656d6301098762b0"), // Deadlift (Level 3)
      new ObjectId("673b26e3656d6301098762b1"), // Bench Press (Level 3)
      new ObjectId("673b26e3656d6301098762b2"), // Pull-ups (Level 3)
      new ObjectId("673b26e3656d6301098762b3"), // Weighted Squats (Level 3)
      new ObjectId("673b26e3656d6301098762b4"), // Overhead Press (Level 3)
      new ObjectId("673b26e3656d6301098762b5")  // Barbell Row (Level 3)
    ]
  },
  {
    _id: new ObjectId("673b26e3656d6301098761e2"),
    difficulty_level: 2,
    exercise_ids: [
      new ObjectId("673b26e3656d6301098762c0"), // Lunges (Level 2)
      new ObjectId("673b26e3656d6301098762c1"), // Dips (Level 2)
      new ObjectId("673b26e3656d6301098762c2"), // Shoulder Taps (Level 2)
      new ObjectId("673b26e3656d6301098762c3"), // Step-ups (Level 2)
      new ObjectId("673b26e3656d6301098762c4"), // Russian Twists (Level 2)
      new ObjectId("673b26e3656d6301098762c5")  // Burpees (Level 2)
    ]
  },
  {
    _id: new ObjectId("673b26e3656d6301098761e3"),
    difficulty_level: 3,
    exercise_ids: [
      new ObjectId("673b26e3656d6301098762b1"), // Bench Press (Level 3)
      new ObjectId("673b26e3656d6301098762b2"), // Pull-ups (Level 3)
      new ObjectId("673b26e3656d6301098762b4"), // Overhead Press (Level 3)
      new ObjectId("673b26e3656d6301098762b5"), // Barbell Row (Level 3)
      new ObjectId("673b26e3656d6301098762b3"), // Weighted Squats (Level 3)
      new ObjectId("673b26e3656d6301098762b0")  // Deadlift (Level 3)
    ]
  },
  {
    _id: new ObjectId("673b26e3656d6301098761e4"),
    difficulty_level: 2,
    exercise_ids: [
      new ObjectId("673b26e3656d6301098762c0"), // Lunges (Level 2)
      new ObjectId("673b26e3656d6301098762c1"), // Dips (Level 2)
      new ObjectId("673b26e3656d6301098762c2"), // Shoulder Taps (Level 2)
      new ObjectId("673b26e3656d6301098762c4"), // Russian Twists (Level 2)
      new ObjectId("673b26e3656d6301098762c3")  // Step-ups (Level 2)
    ]
  },
  {
    _id: new ObjectId("673b26e3656d6301098761e5"),
    difficulty_level: 3,
    exercise_ids: [
      new ObjectId("673b26e3656d6301098762b0"), // Deadlift (Level 3)
      new ObjectId("673b26e3656d6301098762b2"), // Pull-ups (Level 3)
      new ObjectId("673b26e3656d6301098762b1"), // Bench Press (Level 3)
      new ObjectId("673b26e3656d6301098762b5"), // Barbell Row (Level 3)
      new ObjectId("673b26e3656d6301098762b3")  // Weighted Squats (Level 3)
    ]
  },
  {
    _id: new ObjectId("673b26e3656d6301098761e6"),
    difficulty_level: 1,
    exercise_ids: [
      new ObjectId("673b26e3656d6301098762a0"), // Jumping Jacks (Level 1)
      new ObjectId("673b26e3656d6301098762a2"), // Squats (Level 1)
      new ObjectId("673b26e3656d6301098762a3"), // High Knees (Level 1)
      new ObjectId("673b26e3656d6301098762a4"), // Plank Hold (Level 1)
      new ObjectId("673b26e3656d6301098762a1")  // Push-ups (Level 1)
    ]
  },
  {
    _id: new ObjectId("673b26e3656d6301098761e7"),
    difficulty_level: 1,
    exercise_ids: [
      new ObjectId("673b26e3656d6301098762a0"), // Jumping Jacks (Level 1)
      new ObjectId("673b26e3656d6301098762a4"), // Plank Hold (Level 1)
      new ObjectId("673b26e3656d6301098762a1"), // Push-ups (Level 1)
      new ObjectId("673b26e3656d6301098762a3"), // High Knees (Level 1)
      new ObjectId("673b26e3656d6301098762a2")  // Squats (Level 1)
    ]
  }
]
