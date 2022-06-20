const express = require('express')
const router = express.Router()
const {createSession, getSession, updateSession, deleteSession} = require('../controllers/sessions')
const { create } = require('../models/Session')

router.get("/", getSession)

router.post("/", createSession)

router.put("/:id", updateSession)

router.delete("/:id", deleteSession)

module.exports = router