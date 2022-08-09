const express = require('express');
const { adminController } = require('../../controllers/admin/adminControler');

const adminRouter = express.Router()

adminRouter.get('/adminroute',adminController)

module.exports ={adminRouter}