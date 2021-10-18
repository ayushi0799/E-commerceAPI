const tagsModel= require("../Models/Tags")

const storeTags= async(req,res) =>{
    try{
        const Users= await new tagsModel(req.body);
        Users.save();
        res.status(201).send(Users);
    }catch(error){}
};
const getTags = async (req, res) => {
    try {
      const users = await tagsModel.find({});
      res.status(200).send(users);
    } catch (error) {}
  };
  const updateTag = async (req, res) => {
    try {
        const user=await tagsModel.findByIdAndUpdate(req.params.id,req.body);
          
            res.status(200).send(user);
            
        
    }catch(error){}
};
const getTagDetail = async (req, res) => {
    try{
        const getuser=await tagsModel.findById(req.params.id);
        res.status(200).send(getuser);
    }catch(error){}
};

const deleteTag = async (req, res) => {
    try{
        const getuser=await tagsModel.findByIdAndDelete(req.params.id);
        res.status(200).send(getuser);
    }catch(error){}
};

module.exports={
    storeTags,getTags,getTagDetail,updateTag,deleteTag
   
};