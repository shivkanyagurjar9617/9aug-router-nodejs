let adminController = (req,res)=>{

    let adminData = {
        name:"shivkanya",
        surname:"gurjar",
        address:",kherkheda"

    }
    res.json (adminData)
}
module.exports ={adminController}