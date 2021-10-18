const logout = async(req,res)=>{
    try{
        res.send("logged out")
    }
    catch(err){}
}

module.exports = {logout}