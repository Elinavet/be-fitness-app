const { ObjectId } = require("mongodb");

module.exports = [
  {
    _id: new ObjectId("673b26e3656d6301098761d0"),
    name: "Alice Johnson",
    email: "alice.johnson@example.com",
    age: 29,
    height: 165,
    weight: 60,
    xp: 1200,
    goals: ["Lose weight", "Run a marathon"],
    reminder: [
      {
        user_id: new ObjectId("673b26e3656d6301098761d0"),
        workout_id: new ObjectId("673b26e3656d6301098761e0"),
        reminder_time: "2024-11-20T08:00:00Z"
      }
    ]
  },
  {
    _id: new ObjectId("673b26e3656d6301098761d1"),
    name: "Bob Smith",
    email: "bob.smith@example.com",
    age: 35,
    height: 180,
    weight: 85,
    xp: 900,
    goals: ["Build muscle", "Improve flexibility"],
    reminder: [
      {
        user_id: new ObjectId("673b26e3656d6301098761d1"),
        workout_id: new ObjectId("673b26e3656d6301098761e1"),
        reminder_time: "2024-11-19T07:30:00Z"
      }
    ]
  },
  {
    _id: new ObjectId("673b26e3656d6301098761d2"),
    name: "Charlie Davis",
    email: "charlie.davis@example.com",
    age: 24,
    height: 172,
    weight: 70,
    xp: 600,
    goals: ["Increase stamina", "Learn yoga"],
    reminder: [
      {
        user_id: new ObjectId("673b26e3656d6301098761d2"),
        workout_id: new ObjectId("673b26e3656d6301098761e2"),
        reminder_time: "2024-11-20T06:00:00Z"
      }
    ]
  },
  {
    _id: new ObjectId("673b26e3656d6301098761d3"),
    name: "Dana White",
    email: "dana.white@example.com",
    age: 42,
    height: 160,
    weight: 68,
    xp: 1500,
    goals: ["Maintain weight", "Improve endurance"],
    reminder: []
  },
  {
    _id: new ObjectId("673b26e3656d6301098761d4"),
    name: "Evan Green",
    email: "evan.green@example.com",
    age: 31,
    height: 178,
    weight: 77,
    xp: 700,
    goals: ["Run a half marathon", "Eat healthier"],
    reminder: [
      {
        user_id: new ObjectId("673b26e3656d6301098761d4"),
        workout_id: new ObjectId("673b26e3656d6301098761e3"),
        reminder_time: "2024-11-19T20:00:00Z"
      }
    ]
  }
]
