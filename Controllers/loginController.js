const signinSchema = require("../Models/auth")
const bcrypt = require("bcrypt")

const log = async(req,res)=>{
    try{
        const {email,password} = req.body;
        const Alreadyuser = await signinSchema.find({email:email})
        if(Alreadyuser.length>0){
            const pass = await bcrypt.compare(password,Alreadyuser[0].password)
            if(pass){
                res.status(200).json("Login Successfully")
            }
            else{
                res.status(400).json("Wrong password")
            }
        }
        else{
            res.status(400).json("User does not exist")
        }
    }
    catch(err){
        console.log(err)
    }
}

module.exports = {log}