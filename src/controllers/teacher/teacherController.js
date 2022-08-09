let teacherController = (req,res)=>{

    let teacherData = {
        msg: 'hello student\'s how are you'
        

    }
    res.json (teacherData)
}
module.exports ={teacherController}