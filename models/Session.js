const mongoose = require('mongoose')
const Schema = mongoose.Schema

const sessionSchema = new Schema ({
    sessionTimestamp: Date
})

module.exports = mongoose.model('Session', sessionSchema)