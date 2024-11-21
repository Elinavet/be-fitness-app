function getTotalDurationOfWorkout(exercises){
    let total = 0
    exercises.forEach((exercise) => {
        total = total + exercise.duration_in_seconds
    })
    return total
}

module.exports = getTotalDurationOfWorkout