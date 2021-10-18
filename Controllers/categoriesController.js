const categoriesModel= require("../Models/Categories")

const storeCategories= async(req,res) =>{
    try{
        const Users= await new categoriesModel(req.body);
        Users.save();
        res.status(201).send(Users);
    }catch(error){}
};
const getCategories = async (req, res) => {
    try {
      const users = await categoriesModel.find({});
      res.status(200).send(users);
    } catch (error) {}
  };
  const updatecategory = async (req, res) => {
    try {
        const modify=await categoriesModel.findByIdAndUpdate(req.params.id,req.body);
          
            res.status(200).send(modify);
            
        
    }catch(error){}
};
const getcategoryDetail = async (req, res) => {
    try{
        const getuser=await categoriesModel.findById(req.params.id);
        res.status(200).send(getuser);
    }catch(error){}
};

const deletecategory = async (req, res) => {
    try{
        const getuser=await categoriesModel.findByIdAndDelete(req.params.id);
        res.status(200).send(getuser);
    }catch(error){}
};

module.exports={
    getCategories,storeCategories,updatecategory,getcategoryDetail,deletecategory
   
};