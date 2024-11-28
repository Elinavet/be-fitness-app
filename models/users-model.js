const {client, db} = require("../database/connection.js")
const { ObjectId } = require("mongodb")
const usersDb = db.collection("users")
const workoutsDb = db.collection("workouts")

function fetchAllUsers(queries){
    const sort_by = queries.sort_by ? queries.sort_by : "xp"
    const order = queries.order ? (queries.order.toLowerCase() === "asc" ? 1 : (queries.order.toLowerCase() === "desc" ? -1 : undefined)) : -1
    const validSortBy = ["xp", "age", "level"]

    if(!validSortBy.includes(sort_by)){
        return Promise.reject({status: 400, message: "Invalid sort_by"})
    }

    if(order !== 1){
        if(order !== -1){
            return Promise.reject({status:400, message: "Invalid order"})
        }
    }
    
    return client.connect().then(() => {
        return usersDb.find({}).sort({[sort_by]: order}).toArray()
    }).then((users) => {
        return users
    })
    
}

function fetchUserById(userId, queries){
    return client.connect().then(() => {
        return usersDb.findOne({_id: new ObjectId(userId)})
    }).then((user) => {
        if(!user){
            return Promise.reject({status: 404, message: "User not found"})
        }
        return user
    })
}

function updateUser(userId, propertiesToUpdate){
    const validKeys = ["level_increment", "image_url", "xp_increment", "reset_level", "reset_xp"]
    for(const key of Object.keys(propertiesToUpdate)){
        if(!validKeys.includes(key)){
            delete propertiesToUpdate[key]
        }
    }
    if(Object.values(propertiesToUpdate).length === 0){
        return Promise.reject({status: 400, message: "Bad request"})
    }

    return client.connect().then(() => {
        return usersDb.findOne({_id: new ObjectId(userId)})
    }).then((user) => {
        if(!user){
            return Promise.reject({status: 404, message: "User not found"})
        }

        const newProperties = {}
        const propertiesToRemove = {}

        
        return workoutsDb.find().toArray().then((workouts) => {
            const maxLevel = workouts.length;
            
            // Handle level_increment
            if (propertiesToUpdate.level_increment) {
                const increment = propertiesToUpdate.level_increment;

                if (increment !== 1 && increment !== -1) {
                    return Promise.reject({
                        status: 400,
                        message: "Level increment must be 1 or -1",
                    });
                }

                if (user.level === 'All workouts completed') {
                    if (increment === -1) {
                        newProperties.level = maxLevel;
                    } else {
                        return Promise.reject({
                            status: 400,
                            message: "Cannot increment beyond completed workouts",
                        });
                    }
                } else {
                    const newLevel = user.level + increment;

                    if (newLevel >= maxLevel) {
                        newProperties.level = "All workouts completed";
                    } else if (newLevel < 1) {
                        return Promise.reject({
                            status: 400,
                            message: "User's level cannot be decremented any further",
                        });
                    } else {
                        newProperties.level = newLevel;
                    }

                    // Update workout_log
                    if (increment === 1) {
                        if (!user.workout_log) {
                            user.workout_log = [
                                { level: user.level, date_completed: new Date() },
                            ];
                        } else {
                            user.workout_log.push({
                                level: user.level,
                                date_completed: new Date(),
                            });
                        }
                    } else if (increment === -1 && user.workout_log) {
                        user.workout_log.pop();
                    }
                    newProperties.workout_log = user.workout_log;
                }
            }
            // Handle reset_level
            if (propertiesToUpdate.reset_level === true) {
                newProperties.level = 1;
                propertiesToRemove.workout_log = "";
            }

            // Handle reset_xp
            if (propertiesToUpdate.reset_xp === true) {
                newProperties.xp = 0;
            }


            // Handle xp_increment
            if (propertiesToUpdate.xp_increment !== undefined) {
                const increment = propertiesToUpdate.xp_increment;

                if (typeof increment !== "number") {
                    return Promise.reject({
                        status: 400,
                        message: "XP increment must be a number",
                    });
                }

                const newXP = user.xp + increment;
                newProperties.xp = Math.max(0, newXP);
            }

            // Handle image_url
            if (propertiesToUpdate.image_url) {
                const imageUrl = propertiesToUpdate.image_url;

                if (typeof imageUrl !== "string") {
                    return Promise.reject({
                        status: 400,
                        message: "Invalid image URL",
                    });
                }

                const urlPattern = /^(https?:\/\/[^\s$.?#].[^\s]*)$/;
                if (!urlPattern.test(imageUrl)) {
                    return Promise.reject({
                        status: 400,
                        message: "Invalid image URL",
                    });
                }

                newProperties.image_url = imageUrl;
            }

            return usersDb.findOneAndUpdate(
                { _id: new ObjectId(userId) },
                { $set: newProperties, $unset: propertiesToRemove },
                { returnDocument: "after" }
            );
        });
    }).then((updatedUser) => {
        if (!updatedUser) {
            return Promise.reject({ status: 404, message: "User not found after update" });
        }
        return updatedUser;
    });
}

module.exports = { fetchAllUsers, fetchUserById, updateUser }