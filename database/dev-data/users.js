// users.js

const users = [
  {
    name: "Alice Johnson",
    email: "alice.johnson@example.com",
    age: 29,
    xp: 1200,
    level: 3,
    goals: ["Run 5k", "Improve flexibility", "Lose 5 lbs"],
    reminders: [
      { reminder_time: new Date("2024-11-28T09:00:00") },
      { reminder_time: new Date("2024-11-30T18:00:00") },
    ],
    workout_log: [
      { level: 1, date_completed: new Date("2024-11-20") },
      { level: 2, date_completed: new Date("2024-11-22") }
    ],
  },
  {
    name: "Bob Smith",
    email: "bob.smith@example.com",
    age: 34,
    xp: 1500,
    level: 4,
    goals: ["Build muscle", "Increase bench press max", "Improve endurance"],
    reminders: [
      { reminder_time: new Date("2024-11-27T07:30:00") },
      { reminder_time: new Date("2024-12-01T20:00:00") },
    ],
    workout_log: [
      { level: 1, date_completed: new Date("2024-11-15") },
      { level: 2, date_completed: new Date("2024-11-18") },
      { level: 3, date_completed: new Date("2024-11-22") }
    ],
  },
  {
    name: "Charlie Brown",
    email: "charlie.brown@example.com",
    age: 26,
    xp: 900,
    level: 2,
    goals: ["Run a marathon", "Increase flexibility", "Daily yoga"],
    reminders: [
      { reminder_time: new Date("2024-11-28T06:45:00") },
      { reminder_time: new Date("2024-11-29T18:15:00") },
    ],
    workout_log: [
      { level: 1, date_completed: new Date("2024-11-10") }
    ],
  },
  {
    name: "Diana Miller",
    email: "diana.miller@example.com",
    age: 22,
    xp: 400,
    level: 1,
    goals: ["Start working out", "Drink more water"],
    reminders: [
      { reminder_time: new Date("2024-11-28T08:00:00") },
      { reminder_time: new Date("2024-11-30T08:00:00") },
    ]
  },
  {
    name: "Ethan Wright",
    email: "ethan.wright@example.com",
    age: 31,
    xp: 2300,
    level: 5,
    goals: ["Hit a 6-minute mile", "Max out on pull-ups", "Win a local marathon"],
    reminders: [
      { reminder_time: new Date("2024-11-27T07:00:00") },
      { reminder_time: new Date("2024-12-02T06:30:00") },
    ],
    workout_log: [
      { level: 1, date_completed: new Date("2024-10-01") },
      { level: 2, date_completed: new Date("2024-10-15") },
      { level: 3, date_completed: new Date("2024-10-30") },
      { level: 4, date_completed: new Date("2024-11-15") }
    ],
  },
  {
    name: "Fiona Black",
    email: "fiona.black@example.com",
    age: 28,
    xp: 650,
    level: 2,
    goals: ["Master yoga", "Run a 10k"],
    reminders: [
      { reminder_time: new Date("2024-11-29T09:00:00") },
      { reminder_time: new Date("2024-12-01T17:30:00") },
    ],
    workout_log: [
      { level: 1, date_completed: new Date("2024-11-10") }
    ],
  },
  {
    name: "George Lin",
    email: "george.lin@example.com",
    age: 35,
    xp: 1800,
    level: 4,
    goals: ["Lift 200kg deadlift", "Climb a mountain"],
    reminders: [
      { reminder_time: new Date("2024-11-27T07:45:00") },
      { reminder_time: new Date("2024-11-30T19:00:00") },
    ],
    workout_log: [
      { level: 1, date_completed: new Date("2024-09-20") },
      { level: 2, date_completed: new Date("2024-10-05") },
      { level: 3, date_completed: new Date("2024-10-20") }
    ],
  },
  {
    name: "Hannah Davis",
    email: "hannah.davis@example.com",
    age: 30,
    xp: 1100,
    level: 3,
    goals: ["Swim 500m nonstop", "Do 10 push-ups"],
    reminders: [
      { reminder_time: new Date("2024-11-28T07:00:00") },
      { reminder_time: new Date("2024-11-30T18:30:00") },
    ],
    workout_log: [
      { level: 1, date_completed: new Date("2024-10-01") },
      { level: 2, date_completed: new Date("2024-10-18") }
    ],
  },
  {
    name: "Ivy Green",
    email: "ivy.green@example.com",
    age: 27,
    xp: 1400,
    level: 4,
    goals: ["Improve balance", "Compete in a triathlon"],
    reminders: [
      { reminder_time: new Date("2024-11-27T06:45:00") },
      { reminder_time: new Date("2024-11-29T20:00:00") },
    ],
    workout_log: [
      { level: 1, date_completed: new Date("2024-09-15") },
      { level: 2, date_completed: new Date("2024-09-30") },
      { level: 3, date_completed: new Date("2024-10-15") }
    ],
  },
  {
    name: "Jack Morgan",
    email: "jack.morgan@example.com",
    age: 32,
    xp: 500,
    level: 2,
    goals: ["Increase stamina", "Improve posture"],
    reminders: [
      { reminder_time: new Date("2024-11-28T08:30:00") },
      { reminder_time: new Date("2024-12-01T09:00:00") },
    ],
    workout_log: [
      { level: 1, date_completed: new Date("2024-11-05") }
    ],
  },
];

module.exports = users
