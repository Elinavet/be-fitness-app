const { ObjectId } = require("mongodb");

module.exports = [
  {
    _id: new ObjectId("673b26e3656d6301098762a0"),
    exercise_name: "Jumping Jacks",
    exercise_type: "Home",
    difficulty_level: 1,
    target_muscle_group: "Full Body",
    duration_in_seconds: 30,
    description: "Perform quick jumps while spreading and closing your legs and arms simultaneously.",
    xp: 50
  },
  {
    _id: new ObjectId("673b26e3656d6301098762a1"),
    exercise_name: "Push-ups",
    exercise_type: "Home",
    difficulty_level: 1,
    target_muscle_group: "Chest, Arms",
    duration_in_seconds: 40,
    description: "Lower and raise your body while keeping your back straight and your arms bent at 90 degrees.",
    xp: 75
  },
  {
    _id: new ObjectId("673b26e3656d6301098762a2"),
    exercise_name: "Squats",
    exercise_type: "Home",
    difficulty_level: 1,
    target_muscle_group: "Legs, Glutes",
    duration_in_seconds: 45,
    description: "Lower your hips down and back, then return to standing while keeping your chest up.",
    xp: 70
  },
  {
    _id: new ObjectId("673b26e3656d6301098762a3"),
    exercise_name: "High Knees",
    exercise_type: "Home",
    difficulty_level: 1,
    target_muscle_group: "Legs, Cardio",
    duration_in_seconds: 20,
    description: "Run in place, bringing your knees up to waist height with each step.",
    xp: 60
  },
  {
    _id: new ObjectId("673b26e3656d6301098762a4"),
    exercise_name: "Plank Hold",
    exercise_type: "Home",
    difficulty_level: 1,
    target_muscle_group: "Core",
    duration_in_seconds: 30,
    description: "Hold a plank position with your core tight and your body straight from head to heels.",
    xp: 65
  },
  {
    _id: new ObjectId("673b26e3656d6301098762c0"),
    exercise_name: "Lunges",
    exercise_type: "Home",
    difficulty_level: 2,
    target_muscle_group: "Legs, Glutes",
    duration_in_seconds: 40,
    description: "Step forward with one leg, lower your body, and push back to starting position.",
    xp: 90
  },
  {
    _id: new ObjectId("673b26e3656d6301098762c1"),
    exercise_name: "Dips",
    exercise_type: "Home or Gym",
    difficulty_level: 2,
    target_muscle_group: "Triceps, Chest",
    duration_in_seconds: 30,
    description: "Lower your body by bending your arms while supporting yourself on a stable surface.",
    xp: 85
  },
  {
    _id: new ObjectId("673b26e3656d6301098762c2"),
    exercise_name: "Shoulder Taps",
    exercise_type: "Home",
    difficulty_level: 2,
    target_muscle_group: "Core, Shoulders",
    duration_in_seconds: 30,
    description: "In a plank position, alternate tapping your shoulders with opposite hands.",
    xp: 80
  },
  {
    _id: new ObjectId("673b26e3656d6301098762c3"),
    exercise_name: "Step-ups",
    exercise_type: "Home or Gym",
    difficulty_level: 2,
    target_muscle_group: "Legs, Glutes",
    duration_in_seconds: 50,
    description: "Step up onto a sturdy platform with one leg and then the other, stepping down to repeat.",
    xp: 95
  },
  {
    _id: new ObjectId("673b26e3656d6301098762c4"),
    exercise_name: "Russian Twists",
    exercise_type: "Home",
    difficulty_level: 2,
    target_muscle_group: "Core",
    duration_in_seconds: 30,
    description: "Sit on the floor, twist your torso side to side while holding your feet off the ground.",
    xp: 90
  },
  {
    _id: new ObjectId("673b26e3656d6301098762c5"),
    exercise_name: "Burpees",
    exercise_type: "Home",
    difficulty_level: 2,
    target_muscle_group: "Full Body",
    duration_in_seconds: 45,
    description: "Perform a squat, kick out into a push-up position, jump back to standing, and jump up.",
    xp: 100
  },
  {
    _id: new ObjectId("673b26e3656d6301098762b0"),
    exercise_name: "Deadlift",
    exercise_type: "Gym",
    difficulty_level: 3,
    target_muscle_group: "Back, Legs",
    duration_in_seconds: 60,
    description: "Lift a barbell from the ground while maintaining a straight back.",
    xp: 150
  },
  {
    _id: new ObjectId("673b26e3656d6301098762b1"),
    exercise_name: "Bench Press",
    exercise_type: "Gym",
    difficulty_level: 3,
    target_muscle_group: "Chest, Arms",
    duration_in_seconds: 50,
    description: "Push a weighted barbell upwards while lying flat on a bench.",
    xp: 140
  },
  {
    _id: new ObjectId("673b26e3656d6301098762b2"),
    exercise_name: "Pull-ups",
    exercise_type: "Gym",
    difficulty_level: 3,
    target_muscle_group: "Back, Arms",
    duration_in_seconds: 40,
    description: "Pull your body up on a bar until your chin is above it.",
    xp: 120
  },
  {
    _id: new ObjectId("673b26e3656d6301098762b3"),
    exercise_name: "Weighted Squats",
    exercise_type: "Gym",
    difficulty_level: 3,
    target_muscle_group: "Legs, Glutes",
    duration_in_seconds: 70,
    description: "Perform a squat while holding a weighted barbell across your shoulders.",
    xp: 160
  },
  {
    _id: new ObjectId("673b26e3656d6301098762b4"),
    exercise_name: "Overhead Press",
    exercise_type: "Gym",
    difficulty_level: 3,
    target_muscle_group: "Shoulders, Arms",
    duration_in_seconds: 50,
    description: "Press a weighted barbell upwards from your shoulders to overhead.",
    xp: 130
  },
  {
    _id: new ObjectId("673b26e3656d6301098762b5"),
    exercise_name: "Barbell Row",
    exercise_type: "Gym",
    difficulty_level: 3,
    target_muscle_group: "Back, Arms",
    duration_in_seconds: 60,
    description: "Pull a weighted barbell towards your torso while bending at the waist.",
    xp: 145
  }
]
