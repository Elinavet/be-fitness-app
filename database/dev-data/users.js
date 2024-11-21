const { ObjectId } = require("mongodb");

module.exports = [
  {
    _id: new ObjectId("673b26e3656d6301098761d0"),
    name: "Alice Johnson",
    email: "alice.johnson@example.com",
    age: 30,
    height: 165,
    weight: 55,
    xp: 1500,
    difficulty_level: 2,
    goals: ["Lose weight", "Build endurance"],
    reminders: [
      {
        workout_id: new ObjectId("673b26e3656d6301098761e0"),
        reminder_time: new Date("2024-11-21T08:00:00Z")
      }
    ],
    workout_ids: [
      new ObjectId("673b26e3656d6301098761e0"), // Difficulty level 1
      new ObjectId("673b26e3656d6301098761e2"), // Difficulty level 2
      new ObjectId("673b26e3656d6301098761e4")  // Difficulty level 2
    ]
  },
  {
    _id: new ObjectId("673b26e3656d6301098761d1"),
    name: "Bob Smith",
    email: "bob.smith@example.com",
    age: 25,
    height: 180,
    weight: 75,
    xp: 2000,
    difficulty_level: 3,
    goals: ["Gain muscle", "Increase strength"],
    reminders: [
      {
        workout_id: new ObjectId("673b26e3656d6301098761e1"),
        reminder_time: new Date("2024-11-22T08:00:00Z")
      }
    ],
    workout_ids: [
      new ObjectId("673b26e3656d6301098761e1"), // Difficulty level 3
      new ObjectId("673b26e3656d6301098761e3"), // Difficulty level 3
      new ObjectId("673b26e3656d6301098761e5")  // Difficulty level 3
    ]
  },
  {
    _id: new ObjectId("673b26e3656d6301098761d2"),
    name: "Charlie Davis",
    email: "charlie.davis@example.com",
    age: 40,
    height: 175,
    weight: 68,
    xp: 1000,
    difficulty_level: 1,
    goals: ["Improve flexibility", "Stay active"],
    reminders: [
      {
        workout_id: new ObjectId("673b26e3656d6301098761e0"),
        reminder_time: new Date("2024-11-21T10:00:00Z")
      }
    ],
    workout_ids: [
      new ObjectId("673b26e3656d6301098761e0"), // Difficulty level 1
      new ObjectId("673b26e3656d6301098761e6"), // Difficulty level 1
      new ObjectId("673b26e3656d6301098761e7")  // Difficulty level 1
    ]
  }
]
