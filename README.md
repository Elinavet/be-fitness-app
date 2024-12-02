# be-fitness-app

## Project Summary

This is the back-end for a Fitness App project created by Alex, Robert, Uran, and Elina on the Northcoders bootcamp. It aims to create a gamified fitness app where you get timed on a series of exercises stored in workouts. Each workout is associated with a different level, and users would start from level 1 and work their way up. They can also gain XP from each exercise, and they'd be able to see how they compare with others on a leaderboard.

## Cloning

To clone the project, set your terminal to your chosen directory, then run `git clone https://github.com/Elinavet/be-fitness-app.git`, then run `cd be-fitness-app` to navigate into the repository with your terminal.

## Installing Dependencies

Once your terminal is set, run `npm install`. This will install the following dependencies:

Regular dependencies:
- mongodb 
    - Minimum version required: ^6.10.0.
    - Manages the database.
- express
    - Minimum version required: ^4.21.1.
    - Manages server requests.
- dotenv
    - Minimum version required: ^16.4.5.
    - Manages environment variables.
- cors
    - Minimum version required: ^2.8.5.
    - Allows cross origin resource sharing.
- nodemon
    - Minimum version required: ^3.1.7.
    - Optimises the listening process in dev mode so that the server automatically restarts when code is changed.

Dev dependencies:
- jest
    - Minimum version required: ^29.7.0.
    - Helps with the testing of the server.
- jest-sorted
    - Minimum version required: ^1.0.15.
    - Helps with checking if arrays are sorted in a particular order.
- supertest
    - Minimum version required: ^7.0.0.
    - Sends the request to the app in the server test suite.
- husky
    - Minimum version required: ^9.1.6.
    - Ensures that commits cannot be made if any tests fail.


You will need at least v22.3.0 of node.js to run this project.

If there are any issues with installing any particular package just by running `npm install` in your terminal, you can install individual packages by doing `npm install (package name)` without the brackets, replacing `package name` with the actual package name.

## Seeding

To seed the databases, run `npm run seed` into your terminal to seed the development database, and `npm run seed-prod` to seed the production database. The seeding of the test database is done automatically before each test when you run the server tests.

## Running the tests

To run the tests, run `npm test server` in your terminal. These tests will also be automatically run in your terminal after making a commit, where unsuccessful tests will prevent the commit from happening. The tests will also be run automatically in GitHub after making a pull request, where unsuccessful tests will prevent you from merging your changes into main.

## Creating the .env files

To store the necessary environment variables, you will need to create some .env files. First, create a .env.connection file and type into that `DATABASE_URI="insert URI here"`, where `insert URL here` gets replaced with your database URI. This will allow you to connect with the database server on MongoDB.

You will then need to create three more files: .env.development, .env.production, and .env.test. These will store the database names of the development, production, and test databases. In each of them, type `DATABASE_NAME="your_database_name"`, replacing `your_database_name` with your corresponding database name.

## Link to front-end repo

https://github.com/Elinavet/fitness-app.git



