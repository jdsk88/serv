import mongoose from "mongoose";
export const CART = mongoose.Schema({
  client: { type: String },
  seller: {type:String},
  total_price: Number,
  total_discount: Number,
  products:[{_id:false, product_id:String,product_price:Number,product_name:String,quantity:Number,total_price: Number}],
})

export const Cart = mongoose.model("Cart", CART);