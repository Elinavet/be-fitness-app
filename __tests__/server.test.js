const data = require("../database/test-data/index.js")
const seed = require("../database/seed.js")
const { client, db } = require("../database/connection.js")
const app = require("../app.js")
const request = require("supertest")
const endpoints = require("../endpoints.json")
const getTotalDurationOfWorkout = require("../utils/get-total-duration-of-workout.js")

beforeEach(() => {
    return seed(data)
})

afterAll(() => {
    client.close()
})

describe("/api", () => {
    describe("GET", () => {
        test("200: Responds with a JSON object detailing all endpoints", () => {
            return request(app)
            .get("/api")
            .expect(200)
            .then((response) => {
                expect(response.body.endpoints).toEqual(endpoints)
            })
        })
    })
})

describe("/api/users", () => {
    describe("GET", () => {
        test("200: Responds with an array of all users", () => {
            return request(app)
            .get("/api/users")
            .expect(200)
            .then((response) => {
                expect(response.body.users.length).toBe(3)
                response.body.users.forEach((user) => {
                    expect(user).toHaveProperty("_id")
                    expect(typeof user.name).toBe("string")
                    expect(typeof user.email).toBe("string")
                    expect(typeof user.age).toBe("number")
                    expect(typeof user.height).toBe("number")
                    expect(typeof user.weight).toBe("number")
                    expect(typeof user.xp).toBe("number")
                    expect(typeof user.level).toBe("number")
                    expect(Array.isArray(user.goals)).toBe(true)
                    user.goals.forEach((goal) => {
                        expect(typeof goal).toBe("string")
                    })
                    expect(Array.isArray(user.reminders)).toBe(true)
                    user.reminders.forEach((reminder) => {
                        expect(typeof reminder.message).toBe("string")
                        expect(typeof reminder.reminder_time).toBe("string")
                    })
                    expect(typeof user.image_url).toBe("string")
                })
            })
        })
    })
})

describe("/api/users/:user_id", () => {
    describe("GET", () => {
        test("200: Returns a user with the corresponding ID", () => {
            return request(app)
            .get("/api/users/648d9f1a7a2d5b1f1e6d1235")
            .expect(200)
            .then((response) => {
                const {user} = response.body
                expect(user._id).toEqual("648d9f1a7a2d5b1f1e6d1235")
                expect(typeof user.name).toBe("string")
                expect(typeof user.email).toBe("string")
                expect(typeof user.age).toBe("number")
                expect(typeof user.height).toBe("number")
                expect(typeof user.weight).toBe("number")
                expect(typeof user.xp).toBe("number")
                expect(typeof user.level).toBe("number")
                expect(Array.isArray(user.goals)).toBe(true)
                user.goals.forEach((goal) => {
                    expect(typeof goal).toBe("string")
                })
                expect(Array.isArray(user.reminders)).toBe(true)
                user.reminders.forEach((reminder) => {
                    expect(typeof reminder.message).toBe("string")
                    expect(typeof reminder.reminder_time).toBe("string")
                })
                expect(typeof user.image_url).toBe("string")
            })
        })
        test("400: Responds with a bad request message if ID is invalid", () => {
            return request(app)
            .get("/api/users/invalid_id")
            .expect(400)
            .then((response) => {
                expect(response.body.message).toBe("Invalid ID")
            })
        })
        test("404: Responds with a not found message if user does not exist", () => {
            return request(app)
            .get("/api/users/673b26e3656d6301098761d5")
            .expect(404)
            .then((response) => {
                expect(response.body.message).toBe("User not found")
            })
        })
    })
    describe("PATCH", () => {
        test("200: Adds a goal to the goal array when given a valid goal property", () => {
            return request(app)
            .patch("/api/users/648d9f1a7a2d5b1f1e6d1235")
            .send({goal: "Goal 3"})
            .expect(200)
            .then((response) => {
                expect(response.body.user.goals).toEqual(expect.arrayContaining(["Goal 3"]))
            })
        })
        test("200: Ignores any extra keys on object being sent", () => {
            return request(app)
            .patch("/api/users/648d9f1a7a2d5b1f1e6d1235")
            .send({goal: "Goal 3", extraKey: "Extra value"})
            .expect(200)
            .then((response) => {
                expect(response.body.user.goals).toEqual(expect.arrayContaining(["Goal 3"]))
            })
        })
        test("400: Responds with a bad request message when given an invalid ID", () => {
            return request(app)
            .patch("/api/users/invalid_id")
            .send({goal: "Goal 3"})
            .expect(400)
            .then((response) => {
                expect(response.body.message).toBe("Invalid ID")
            })
        })
        test("400: Responds with an error message when given an empty object", () => {
            return request(app)
            .patch("/api/users/648d9f1a7a2d5b1f1e6d1235")
            .send({})
            .expect(400)
            .then((response) => {
                expect(response.body.message).toBe("Goals body cannot be empty")
            })
        })
        test("404: Responds with a not found message when user does not exist", () => {
            return request(app)
            .patch("/api/users/673b26e3656d6301098761da")
            .send({goal: "Goal 3"})
            .expect(404)
            .then((response) => {
                expect(response.body.message).toBe("User not found")
            })
        })
    })
})

describe("/api/exercises", () => {
    describe("GET", () => {
        test("200: Returns an array of all exercises", () => {
            return request(app)
            .get("/api/exercises")
            .expect(200)
            .then((response) => {
                expect(response.body.exercises.length).toBe(9)
                response.body.exercises.forEach((exercise) => {
                expect(exercise).toHaveProperty("_id");
                expect(typeof exercise.name).toBe("string")
                expect(typeof exercise.type).toBe("string")
                expect(typeof exercise.target_muscle_group).toBe("string")
                expect(typeof exercise.description).toBe("string")
                })
            })
        })
    })
})

describe("/api/exercises/:exercise_id", () => {
    describe("GET", () => {
        test("200: Returns an exercise with the corresponding ID", () => {
            return request(app)
            .get("/api/exercises/64ae9f1b7a2d5b1f1e6d3001")
            .expect(200)
            .then((response) => {
                const exercise = response.body.exercise;
                expect(exercise._id).toBe("64ae9f1b7a2d5b1f1e6d3001");
                expect(typeof exercise.name).toBe("string")
                expect(typeof exercise.type).toBe("string")
                expect(typeof exercise.target_muscle_group).toBe("string")
                expect(typeof exercise.duration_in_seconds).toBe("number")
                expect(typeof exercise.description).toBe("string")
            })
        })
        test("400: Responds with a bad request message if ID is invalid", () => {
            return request(app)
            .get("/api/exercises/invalid_exercise_id")
            .expect(400)
            .then((response) => {
                expect(response.body.message).toBe("Invalid ID")
            })
        })
        test("404: Responds with a not found message if user does not exist", () => {
            return request(app)
            .get("/api/exercises/673b26e3656d6301098761da")
            .expect(404)
            .then((response) => {
                expect(response.body.message).toBe("Exercise not found")
            })
        })
    })
})

describe("/api/workouts/:workout_id", () => {
    describe("GET", () => {
        test("200: Returns a workout given the workout ID", () => {
            return request(app)
            .get("/api/workouts/648d9f1a7a2d5b1f1e6d1240")
            .expect(200)
            .then((response) => {
                const { workout } = response.body;
                expect(workout._id).toBe("648d9f1a7a2d5b1f1e6d1240");
                expect(typeof workout.level).toBe("number");
                expect(typeof workout.total_duration).toBe("number");
                expect(Array.isArray(workout.exercises)).toBe(true);
                workout.exercises.forEach((exercise) => {
                    expect(exercise).toHaveProperty("_id");
                    expect(typeof exercise.name).toBe("string");
                    expect(typeof exercise.type).toBe("string");
                    expect(typeof exercise.target_muscle_group).toBe("string");
                    expect(typeof exercise.description).toBe("string")
                })
            })
        })
        test("400: Responds with a bad request message if ID is invalid", () => {
            return request(app)
            .get("/api/workouts/out_id")
            .expect(400)
            .then((response) => {
                expect(response.body.message).toBe("Invalid ID")
            })
        })
        test("404: Responds with a not found message if workout does not exist", () => {
            return request(app)
            .get("/api/workouts/673b26e3656d6301098761e8")
            .expect(404)
            .then((response) => {
                expect(response.body.message).toBe("Workout not found")
            })
        })
    })
})


describe("/*", () => {
    test("404: Responds with an error if given an invalid endpoint", () => {
        return request(app)
        .get("/api/invalid_endpoint")
        .expect(404)
        .then((response) => {
            expect(response.body.message).toBe("Endpoint not found")
        })
    })
})

