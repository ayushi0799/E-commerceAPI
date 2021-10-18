const authModel = require("../Models/auth");

const forerror = (err)=>{
    let error = {email:"",password:""}
    if(err.code===11000){
        error.email="this email exits. Login to your account"
        return error 
    }
    if(err.message.includes("authentication validation failed")){
        Object.values(err.errors).forEach(({properties})=>{
            error[properties.path] = properties.message
        })
    }
    return error;
}


const userAuth = async(req,resp)=>{
    const data = await authModel.find();
    resp.send(data)
}

const siginGet = async(req,resp)=>{
    resp.send("Welcome to signin Page")
}

const signinPost = async(req,resp)=>{
    const {email,password} = req.body;
    try{
        const user = await authModel.create({email,password})
        resp.status(201).json(user);
    }
    catch(err){
        const errors = forerror(err)
        resp.status(400).json(errors)
    }
}

module.exports = {siginGet,signinPost,userAuth}