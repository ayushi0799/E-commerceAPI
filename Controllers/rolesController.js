const rolesModel= require("../Models/Roles")

const storeRoles= async(req,res) =>{
    try{
        const Users= await new rolesModel(req.body);
        Users.save();
        res.status(201).send(Users);
    }catch(error){}
};
const getRoles = async (req, res) => {
    try {
      const users = await rolesModel.find({});
      res.status(200).send(users);
    } catch (error) {}
  };
  const updateRole = async (req, res) => {
    try {
        const user=await rolesModel.findByIdAndUpdate(req.params.id,req.body);
          
            res.status(200).send(user);
            
        
    }catch(error){}
};
const getRoleDetail = async (req, res) => {
    try{
        const getuser=await rolesModel.findById(req.params.id);
        res.status(200).send(getuser);
    }catch(error){}
};

const deleteRole = async (req, res) => {
    try{
        const getuser=await rolesModel.findByIdAndDelete(req.params.id);
        res.status(200).send(getuser);
    }catch(error){}
};

module.exports={
    storeRoles,getRoles,updateRole,getRoleDetail,deleteRole
   
};