const mongoose = require('mongoose');

const categoriesSchema = mongoose.Schema({
  "Name": {
    type: String,
    required: [true, 'category name'],
  },
  "Slug": {
    type: String,
    required: [true, 'category slug'],
  },
  "Image": {
    type: String,
    required: [true, 'category image'],
   
  },
 "Description": {
    type: String,
    required: [true, 'category description'],
  },
});
const categoriesModel= mongoose.model("categories",categoriesSchema);

module.exports=categoriesModel;
