let parentController = (req,res)=>{

    let parentData = {
        name:"samrath",
        surname:"gurjar",
        address:",kherkheda",
        mon:8226063925

    }
    res.json (parentData)
}
module.exports ={parentController}