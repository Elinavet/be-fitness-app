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
    difficulty_level: 2, // Alice is currently at difficulty level 2
    goals: ["Lose weight", "Build endurance"],
    reminders: [
      {
        workout_id: new ObjectId("673b26e3656d6301098761e0"),
        reminder_time: new Date("2024-11-21T08:00:00Z")
      }
    ],
    workout_ids: [
      new ObjectId("673b26e3656d6301098761e0"),
      new ObjectId("673b26e3656d6301098761e2")
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
    difficulty_level: 3, // Bob is currently at the maximum difficulty level
    goals: ["Gain muscle", "Increase strength"],
    reminders: [
      {
        workout_id: new ObjectId("673b26e3656d6301098761e1"),
        reminder_time: new Date("2024-11-22T08:00:00Z")
      }
    ],
    workout_ids: [
      new ObjectId("673b26e3656d6301098761e1"),
      new ObjectId("673b26e3656d6301098761e3")
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
    difficulty_level: 1, // Charlie is just starting out
    goals: ["Improve flexibility", "Stay active"],
    reminders: [
      {
        workout_id: new ObjectId("673b26e3656d6301098761e2"),
        reminder_time: new Date("2024-11-21T10:00:00Z")
      }
    ],
    workout_ids: [
      new ObjectId("673b26e3656d6301098761e2"),
      new ObjectId("673b26e3656d6301098761e0")
    ]
  }
]
