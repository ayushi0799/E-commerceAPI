const mongoose=require("mongoose");

const rolesSchema=mongoose.Schema({
    Name: {
        type: String,
        required: [true, 'user must have a role'],
      },
      slug: {
        type: String,
        required: [true, 'role slug'],
      },
 
});

const rolesModel= mongoose.model("roles",rolesSchema);

module.exports=rolesModel;