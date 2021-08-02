import mongoose from "mongoose";
export const ORDER = mongoose.Schema({
  client: String,
  seller: String,
  total_price: Number,
  total_discount: Number,
  status: String,
  products:Array,
  date: String ,
})

export const Order = mongoose.model("Order", ORDER);

// client,seller,total_price,total_discount,status,products