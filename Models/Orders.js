const mongoose = require('mongoose');

const ordersSchema = mongoose.Schema({
    "User id": {
        type: Number,
        required: [true, 'user id ref'],
      },
      "Total items": {
        type: Number,
        required: [true, 'ordered items'],
      },
      "Products": {
        type:String,
        required: [true, 'ordered products'],
       
      },
      "Billing address": {
        type: String,
        required: [true, 'billing address'],
      },
      "Shipping address": {
        type: String,
        required: [true, 'shipping address'],
      },
      "Transaction status": {
        type: String,
        required: [true, 'transection status'],
        enum: ['successfull', 'unsuccessfull'],
        lowercase: true,
      },
      "Payment mode": {
        type: String,
        required: [true, 'payment mode'],
  
      },
      "Payment status": {
        type: String,
        required: [true, 'payment status'],
        enum: ['successfull', 'unsuccessfull'],
        lowercase: true,
      },
      "Order status": {
        type: String,
        required: [true, 'order status'],
        enum: ['successfull', 'unsuccessfull'],
        lowercase: true,
      },
 
});
const ordersModel= mongoose.model("orders",ordersSchema);

module.exports=ordersModel;
