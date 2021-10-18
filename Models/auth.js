const mongoose = require("mongoose")
const bcrypt = require("bcrypt")
const signinSchema = mongoose.Schema({
    "email":{
        type:String,
        required:[true,"enter email"]
    },
    "password":{
        type:String,
        required:[true,"enter password"]
    }
})
signinSchema.pre("save",async function(next){
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password,salt);
    next();
})
const signin = mongoose.model("authentication",signinSchema)

module.exports = signin;