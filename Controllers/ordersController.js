const ordersModel= require("../Models/Orders")

const storeOrders= async(req,res) =>{
    try{
        const Users= await new ordersModel(req.body);
        Users.save();
        res.status(201).send(Users);
    }catch(error){}
};
const getOrders = async (req, res) => {
    try {
      const users = await ordersModel.find({});
      res.status(200).send(users);
    } catch (error) {}
  };
  const updateorder = async (req, res) => {
    try {
        const user=await ordersModel.findByIdAndUpdate(req.params.id,req.body);
          
            res.status(200).send(user);
            
        
    }catch(error){}
};
const getorderDetail = async (req, res) => {
    try{
        const getuser=await ordersModel.findById(req.params.id);
        res.status(200).send(getuser);
    }catch(error){}
};

const deleteorder = async (req, res) => {
    try{
        const getuser=await ordersModel.findByIdAndDelete(req.params.id);
        res.status(200).send(getuser);
    }catch(error){}
};

module.exports={
    storeOrders,getOrders,updateorder,deleteorder,getorderDetail
   
};