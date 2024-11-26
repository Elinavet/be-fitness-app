const {client, db} = require("../database/connection.js")
const { ObjectId } = require("mongodb")
const usersDb = db.collection("users")

function fetchReminders(userId){
    return client.connect().then(() => {
        return usersDb.findOne({_id: new ObjectId(userId)}).then((user) => {
            if(!user){
                return Promise.reject({status: 404, message: "User not found"})
            }
            return user.reminders
        })
    })
}

function addReminder(userId, reminderToAdd){
    reminderToAdd.reminder_time = new Date(reminderToAdd.reminder_time).toISOString();

    return client.connect().then(() => {
        return usersDb.findOne({_id: new ObjectId(userId)})
    }).then((user) => {
        if(!user){
            return Promise.reject({status: 404, message: "User not found"})
        }
        
        const reminderExists = (user.reminders || []).some(reminder =>
            reminder.message === reminderToAdd.message
        );
        
        if (reminderExists) {
            return Promise.reject({ status: 400, message: "Reminder already exists" });
        }
        user.reminders.push(reminderToAdd)
        return usersDb.findOneAndUpdate({_id: new ObjectId(userId)}, {$set: {reminders: user.reminders}}, {returnDocument: "after"})
    }).then((user) => {
        return user.reminders
    })
}

function removeReminder(userId, reminderToRemove){
    return client.connect().then(() => {
        return usersDb.findOne({_id: new ObjectId(userId)})
    }).then((user) => {
        if(!user){
            return Promise.reject({status: 404, message: "User not found"})
        }
        const reminderIndex = user.reminders.findIndex(reminder =>
            reminder.message === reminderToRemove.message &&
            new Date(reminder.reminder_time).toISOString() === new Date(reminderToRemove.reminder_time).toISOString()
        );

        if (reminderIndex === -1) {
            return Promise.reject({ status: 404, message: "Reminder not found" });
        }

        // Remove the reminder from the array
        user.reminders.splice(reminderIndex, 1);
        return usersDb.findOneAndUpdate({_id: new ObjectId(userId)}, {$set: {reminders: user.reminders}}, {returnDocument: "after"})
    })
}

module.exports = { fetchReminders, addReminder, removeReminder }