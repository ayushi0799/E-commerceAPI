const mongoose=require("mongoose");

const productsSchema=mongoose.Schema({

    name: {
        type: String,
        required: [true, 'product name'],
      },
      thumbnail: {
        type: String,
        required: [true, 'product thumbnail'],
      },
      productGallery: {
        type: String,
        required: [true, 'product gallery'],
        unique: true,
      },
      description: {
        type: String,
        required: [true, 'product description'],
      },
      basePrice: {
        type: Number,
        required: [true, 'product base price'],
      },
      sellPrice: {
        type: Number,
        required: [true, 'product selling price'],
      },
      categoryName: {
        type: String,
        required: [true, 'product category'],
      },
      additionalInfo: {
        type: String,
        required: [true, 'product additional informations'],
      },
});

const productsModel= mongoose.model("products",productsSchema);

module.exports=productsModel;