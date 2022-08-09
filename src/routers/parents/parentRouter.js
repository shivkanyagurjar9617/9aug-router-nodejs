const express = require('express');
const { parentController } = require('../../controllers/parents/parentController');






const parentRouter = express.Router()

parentRouter.get('/parentRoute',parentController)

module.exports ={parentRouter}