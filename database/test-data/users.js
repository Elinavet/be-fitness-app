const { ObjectId } = require("mongodb")

const users = [
  {
    _id: new ObjectId("648d9f1a7a2d5b1f1e6d1234"),
    name: "Alice Johnson",
    email: "alice.johnson@example.com",
    age: 29,
    height: 165,
    weight: 68,
    xp: 120,
    level: 2,
    goals: ["Lose weight", "Build core strength"],
    reminders: [{ reminder_time: new Date("2024-11-21T08:00:00") }],
  },
  {
    _id: new ObjectId("648d9f1a7a2d5b1f1e6d1235"),
    name: "Bob Smith",
    email: "bob.smith@example.com",
    age: 34,
    height: 180,
    weight: 75,
    xp: 220,
    level: 3,
    goals: ["Gain muscle", "Improve stamina"],
    reminders: [{ reminder_time: new Date("2024-11-21T07:30:00") }],
  },
  {
    _id: new ObjectId("648d9f1a7a2d5b1f1e6d1236"),
    name: "Charlie Lee",
    email: "charlie.lee@example.com",
    age: 25,
    height: 172,
    weight: 70,
    xp: 300,
    level: 4,
    goals: ["Build strength", "Run a marathon"],
    reminders: [{ reminder_time: new Date("2024-11-21T06:30:00") }],
  },
];

module.exports = users
