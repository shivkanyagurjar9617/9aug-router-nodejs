const express = require('express')
const { studentController } = require('../../controllers/students/studentController')
const studentRouter = express.Router()

studentRouter.get('/studentrouter',studentController)

module.exports ={studentRouter}