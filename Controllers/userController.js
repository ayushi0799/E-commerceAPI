const userModel= require("../Models/Users")

const storeUser= async(req,res) =>{
    try{
        const Users= await new userModel(req.body);
        Users.save();
        res.status(201).send(Users);
    }catch(error){}
};
const getUsers = async (req, res) => {
    try {
      const users = await userModel.find({});
      res.status(200).send(users);
    } catch (error) {}
  };
const updateuser = async (req, res) => {
    try {
        const user=await userModel.findByIdAndUpdate(req.params.id,req.body);
          
            res.status(200).send(user);
            
        
    }catch(error){}
};
const getuserDetail = async (req, res) => {
    try{
        const getuser=await userModel.findById(req.params.id);
        res.status(200).send(getuser);
    }catch(error){}
};

const deleteUser = async (req, res) => {
    try{
        const getuser=await userModel.findByIdAndDelete(req.params.id);
        res.status(200).send(getuser);
    }catch(error){}
};

const usersQuery = async(req, res) => {

    try {

        const query = req.query;
        const queryParams = {...query };

        const users = await userModel.find(queryParams);

        // console.log(queryParams);

        res.status(200).send(users);

    } catch (error) {

    }
}



module.exports={
    storeUser,
    getUsers,
    getuserDetail,
    updateuser,
    deleteUser, usersQuery
   
};