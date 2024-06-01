const express = require("express")
const { welcomeUser, postRegister, getRegister, login, listOfStudents } = require("../controllers/user.controller")
const router = express.Router()

router.get("/welcome", welcomeUser)
router.get("/welcome", getRegister)
router.post("/welcome", postRegister)
router.get("/welcome", login)
router.get("/", listOfStudents)


module.exports = router