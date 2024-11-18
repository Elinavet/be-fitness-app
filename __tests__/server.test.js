const data = require("../database/test-data/index.js")
const seed = require("../database/seed.js")
const {client, db} = require("../database/database-connection.js")
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
                        expect(reminder).toHaveProperty("user_id")
                        expect(reminder).toHaveProperty("workout_id")
                        expect(typeof reminder.reminder_time).toBe("string")
                    })
                })
            })
        })
    })
})