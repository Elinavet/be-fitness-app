const data = require("../database/test-data/index.js")
const seed = require("../database/seed.js")
const { client, db } = require("../database/database-connection.js")
const app = require("../app.js")
const request = require("supertest")

beforeEach(() => {
    return seed(data)
})

afterAll(() => {
    client.close()
})

describe("/api/users", () => {
    describe("GET", () => {
        test("200: Responds with an array of all users", () => {
            return request(app)
            .get("/api/users")
            .expect(200)
            .then((response) => {
                expect(response.body.users.length).toBe(5)
                response.body.users.forEach((user) => {
                    expect(user).toHaveProperty("_id")
                    expect(typeof user.name).toBe("string")
                    expect(typeof user.email).toBe("string")
                    expect(typeof user.age).toBe("number")
                    expect(typeof user.height).toBe("number")
                    expect(typeof user.weight).toBe("number")
                    expect(typeof user.xp).toBe("number")
                    expect(Array.isArray(user.goals)).toBe(true)
                    user.goals.forEach((goal) => {
                        expect(typeof goal).toBe("string")
                    })
                    expect(Array.isArray(user.reminders)).toBe(true)
                    user.reminders.forEach((reminder) => {
                        expect(reminder.constructor).toBe(Object)
                        expect(reminder).toHaveProperty("workout_id")
                        expect(typeof reminder.reminder_time).toBe("string")
                    })
                })
            })
        })
    })
})

describe("/api/users/:user_id", () => {
    describe("GET", () => {
        test("200: Returns a user with the corresponding ID", () => {
            return request(app)
            .get("/api/users/673b26e3656d6301098761d0")
            .expect(200)
            .then((response) => {
                const {user} = response.body
                expect(user._id).toEqual("673b26e3656d6301098761d0")
                expect(typeof user.name).toBe("string")
                expect(typeof user.email).toBe("string")
                expect(typeof user.age).toBe("number")
                expect(typeof user.height).toBe("number")
                expect(typeof user.weight).toBe("number")
                expect(typeof user.xp).toBe("number")
                expect(Array.isArray(user.goals)).toBe(true)
                user.goals.forEach((goal) => {
                    expect(typeof goal).toBe("string")
                })
                expect(Array.isArray(user.reminders)).toBe(true)
                user.reminders.forEach((reminder) => {
                    expect(reminder.constructor).toBe(Object)
                    expect(reminder).toHaveProperty("workout_id")
                    expect(typeof reminder.reminder_time).toBe("string")
                })
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
            .patch("/api/users/673b26e3656d6301098761d1")
            .send({goal: "Goal 3"})
            .expect(200)
            .then((response) => {
                expect(response.body.user.goals).toEqual(expect.arrayContaining(["Goal 3"]))
            })
        })
        test("200: Ignores any extra keys on object being sent", () => {
            return request(app)
            .patch("/api/users/673b26e3656d6301098761d1")
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
        test("404: Responds with a not found message when user does not exist", () => {
            return request(app)
            .patch("/api/users/673b26e3656d6301098761d5")
            .send({goal: "Goal 3"})
            .expect(404)
            .then((response) => {
                expect(response.body.message).toBe("User not found")
            })
        })
    })
})

describe("/api/users/:user_id/workouts", () => {
    describe("GET", () => {
        test("200: Returns a user with the corresponding workouts", () => {
            return request(app)
            .get("/api/users/673b26e3656d6301098761d0/workouts")
            .expect(200)
            .then((response) => {
                const workouts = response.body.workouts;
                expect(workouts.length).toBe(1);
                workouts.forEach((workout) => {
                    expect(workout.user_id).toBe("673b26e3656d6301098761d0")
                    expect(workout).toHaveProperty("_id");
                    expect(workout).toHaveProperty("exercise_names");
                    expect(workout).toHaveProperty("difficulty_level");
                    expect(workout).toHaveProperty("date_completed");
                    expect(workout).toHaveProperty("duration_in_seconds");
                    expect(workout).toHaveProperty("xp_earned");
                    expect(workout.exercise_names).toBeInstanceOf(Array)
                    workout.exercise_names.forEach((exercise) => {
                        expect(typeof exercise).toBe("string");
                    })
                })
            })
        })
        test("400: Responds with a bad request message if ID is invalid", () => {
            return request(app)
            .get("/api/users/invalid_id/workouts")
            .expect(400)
            .then((response) => {
                expect(response.body.message).toBe("Invalid ID")
            })
        })
        test("404: Responds with a not found message if user does not exist", () => {
            return request(app)
            .get("/api/users/673b26e3656d6301098761da/workouts")
            .expect(404)
            .then((response) => {
                expect(response.body.message).toBe("Workout not found")
            })
        })
    })
})

describe("/api/exercises/:exercise_id", () => {
    describe("GET", () => {
        test("200: Returns an exercise", () => {
            return request(app)
            .get("/api/exercises/673b26e3656d6301098761ba")
            .expect(200)
            .then((response) => {
                const exercise = response.body.exercise;
                expect(exercise).toHaveProperty("_id");
                expect(exercise).toHaveProperty("exercise_name")
                expect(exercise).toHaveProperty("exercise_type")
                expect(exercise).toHaveProperty("difficulty_level")
                expect(exercise).toHaveProperty("target_muscle_group")
                expect(exercise).toBeInstanceOf(Object)
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

