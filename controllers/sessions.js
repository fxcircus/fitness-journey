const Session = require('../models/Session')

// Create
const createSession = async (req, res) => {
    try {
        const { body } = req
        const createdSession = await Session.create(body)
        res.status(200).json({ message: "Session created", createdSession})
    } catch (error) {
        res.status(400).json({ err: error.message })
    }
}

// Read
const getSession = (req, res) => {
    Session.find({}, (err, foundSession) => {
        if (!err) {
            res.status(200).json(foundSession)
        } else {
            res.status(400).json(err)
        }
    })
}

// Update
const updateSession = (req, res) => {
    const { body } = reqSession.findByIdAndUpdate(req.params.id, body, { new: true }, (err, updatedSession) => {
        if (!err) {
            res.status(200).json(updatedSession)
        } else {
            res.status(400).json(err)
        }
    })
}

// Delete
const deleteSession = (req, res) => {
    Session.findOneAndDelete(req.params.id, (err, deletedSession) => {
        if (!err) {
            res.status(200).json({ message: "Deleded session", deletedSession})
        } else {
            res.status(400).json(err)
        }
    })
}

module.exports = {
    getSession,
    createSession,
    updateSession,
    deleteSession
}