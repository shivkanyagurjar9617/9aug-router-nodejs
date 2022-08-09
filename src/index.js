const express = require('express');
const { adminRouter } = require('./routers/admin/adminRouter');
const { parentRouter } = require('./routers/parents/parentRouter');
const { studentRouter } = require('./routers/students/studentRouter');
const { teacherRouter } = require('./routers/teachers/teacherRouter');


const app = express();
require('dotenv').config();

app.use(adminRouter,teacherRouter,studentRouter,parentRouter)


let port = process.env.PORT
app.listen(port,()=>{
    console.log('the server running on port'+port)
})