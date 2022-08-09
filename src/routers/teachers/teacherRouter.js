const express = require('express');
const { teacherController } = require('../../controllers/teacher/teacherController');





const teacherRouter = express.Router()

teacherRouter.get('/teacherroute',teacherController)

module.exports ={teacherRouter}