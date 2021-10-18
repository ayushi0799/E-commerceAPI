const productsModel= require("../Models/Products")

const storeProducts= async(req,res) =>{
    try{
        const Users= await new productsModel(req.body);
        Users.save();
        res.status(201).send(Users);
    }catch(error){}
};
const getProducts = async (req, res) => {
    try {
      const users = await productsModel.find({});
      res.status(200).send(users);
    } catch (error) {}
  };
const updateProduct = async (req, res) => {
    try {
        const user=await productsModel.findByIdAndUpdate(req.params.id,req.body);
          
            res.status(200).send(user);
            
        
    }catch(error){}
};
const getProductDetail = async (req, res) => {
    try{
        const getuser=await productsModel.findById(req.params.id);
        res.status(200).send(getuser);
    }catch(error){}
};

const deleteProduct = async (req, res) => {
    try{
        const getuser=await productsModel.findByIdAndDelete(req.params.id);
        res.status(200).send(getuser);
    }catch(error){}
};

module.exports={
    storeProducts,getProducts,updateProduct,getProductDetail,deleteProduct
   
};