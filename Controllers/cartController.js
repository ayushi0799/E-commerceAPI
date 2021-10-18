const cartModel= require("../Models/Cart")

const storeCart= async(req,res) =>{
    try{
        const Users= await new cartModel(req.body);
        Users.save();
        res.status(201).send(Users);
    }catch(error){}
};
const getCart = async (req, res) => {
    try {
      const users = await cartModel.find({});
      res.status(200).send(users);
    } catch (error) {}
  };
  const updatecart = async (req, res) => {
    try {
        const user=await cartModel.findByIdAndUpdate(req.params.id,req.body);
          
            res.status(200).send(user);
            
        
    }catch(error){}
};
const getcartDetail = async (req, res) => {
    try{
        const getuser=await cartModel.findById(req.params.id);
        res.status(200).send(getuser);
    }catch(error){}
};

const deletecart = async (req, res) => {
    try{
        const getuser=await cartModel.findByIdAndDelete(req.params.id);
        res.status(200).send(getuser);
    }catch(error){}
};

module.exports={
    storeCart,getCart,updatecart,getcartDetail,deletecart
   
};