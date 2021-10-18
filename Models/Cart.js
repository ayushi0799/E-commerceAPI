const mongoose=require("mongoose");

const cartSchema=mongoose.Schema({
    "Sell price": {
        type: Number,
        required: [true, 'product selling price'],
      },  
      "Base price": {
        type: Number,
        required: [true, 'product base price'],
      },
    Product: {
        type: String,
        required: [true, 'product name'],
      },
      User: {
        type: String,
        required: [true, 'user name'],
      },
     "Product quantity": {
        type: Number,
        required: [true, 'product quantity'],
        default:1,
      },
    
     
      "Total price": {
        type: Number,
        required: [true, 'total price'],
      },
});

const cartModel= mongoose.model("cart",cartSchema);

module.exports=cartModel;