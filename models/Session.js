const mongoose = require('mongoose')
const Schema = mongoose.Schema

const sessionSchema = new Schema ({
    sessionTimestamp: Date,
    exercises: Array
})

module.exports = mongoose.model('Session', sessionSchema)