const data = require("../database/test-data/index.js")
const seed = require("../database/seed.js")
const client = require("../database/connection.js")

beforeEach(() => {
    return seed(data)
})

afterAll(() => {
    client.close()
})

describe("Placeholder test so I can run seed in test environment", () => {
    test("1 is equal to 1. No surprises there", () => {
        expect(1).toBe(1)
    })
})