const { fetchReminders, addReminder, removeReminder } = require("../models/reminders-model")

function getReminders(request, response, next){
    fetchReminders(request.params.user_id).then((reminders) => {
        response.status(200).send({reminders})
    }).catch((err) => {
        next(err)
    })
}

function postReminder(request, response, next){
    addReminder(request.params.user_id, request.body.reminder_to_add).then((reminders) => {
        response.status(201).send({reminders})
    }).catch((err) => {
        next(err)
    })
}

function deleteReminder(request, response, next){
    removeReminder(request.params.user_id, request.body.reminder_to_remove).then(() => {
        response.status(204).send({})
    }).catch((err) => {
        next(err)
    })
}

module.exports = { getReminders, postReminder, deleteReminder }