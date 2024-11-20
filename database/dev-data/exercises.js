const { ObjectId } = require("mongodb");

module.exports = [
  {
    _id: new ObjectId("673b26e3656d6301098761ba"),
    exercise_name: "Push-up",
    exercise_type: "Home",
    difficulty_level: 1,
    target_muscle_group: "Chest",
    description: "Start in a plank position, lower your body until your chest is close to the ground, then push back up."
  },
  {
    _id: new ObjectId("673b26e3656d6301098761bb"),
    exercise_name: "Squat",
    exercise_type: "Home",
    difficulty_level: 1,
    target_muscle_group: "Legs",
    description: "Stand with feet shoulder-width apart, lower your hips until thighs are parallel to the ground, then stand back up."
  },
  {
    _id: new ObjectId("673b26e3656d6301098761bc"),
    exercise_name: "Pull-up",
    exercise_type: "Gym",
    difficulty_level: 3,
    target_muscle_group: "Back",
    description: "Grip a pull-up bar with palms facing away, pull yourself up until your chin clears the bar, then lower back down."
  },
  {
    _id: new ObjectId("673b26e3656d6301098761bd"),
    exercise_name: "Bench Press",
    exercise_type: "Gym",
    difficulty_level: 2,
    target_muscle_group: "Chest",
    description: "Lie on a bench, grip the barbell, lower it to your chest, then push it back up until arms are fully extended."
  },
  {
    _id: new ObjectId("673b26e3656d6301098761be"),
    exercise_name: "Plank",
    exercise_type: "Home",
    difficulty_level: 2,
    target_muscle_group: "Core",
    description: "Hold a push-up position with your elbows on the ground and body in a straight line for as long as possible."
  },
  {
    _id: new ObjectId("673b26e3656d6301098761bf"),
    exercise_name: "Deadlift",
    exercise_type: "Gym",
    difficulty_level: 3,
    target_muscle_group: "Back",
    description: "Stand with feet under a barbell, grip it firmly, and lift by straightening your legs and back, then lower it back down."
  }
]
