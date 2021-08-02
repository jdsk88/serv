import mongoose from "mongoose";
export const CART = mongoose.Schema({
  // _id: false,
  product_id: String,
  product_price: Number,
  product_name: String,
  product_image: String,
  quantity: Number,
  total_price: Number
},
)

export const Cart = mongoose.model("Cart", CART);

// product_id,product_price,product_name,product_image,quantity,total_price