const mongoose=require("mongoose");

const tagsSchema=mongoose.Schema({
    Name: {
        type: String,
        required: [true, 'user must have a tag'],
      },
      slug: {
        type: String,
        required: [true, 'tag slug'],
      },
 
});

const tagsModel= mongoose.model("tags",tagsSchema);

module.exports=tagsModel;