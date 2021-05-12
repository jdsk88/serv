import mongoose from "mongoose";
export const ORDER = mongoose.Schema({
  client: { type: String },
  seller: {type:String},
  total_price: Number,
  total_discount: Number,
  status: {type:String},
  products:[{_id:false, product_id:String,product_price:Number,product_name:String,quantity:Number,total_price: Number}],

})

export const Order = mongoose.model("Order", ORDER);