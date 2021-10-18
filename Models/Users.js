const mongoose=require("mongoose");

const userSchema=mongoose.Schema({
    "First name": String,
    "Last name": String,
    "Email": String,
    "Role":String,
    "Profile image":String,
});

const userModel= mongoose.model("users",userSchema);

module.exports=userModel;