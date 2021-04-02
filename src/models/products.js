import mongoose from "mongoose";
export const PRODUCTS = mongoose.Schema({
  Name: { type: String, required: true },
  Barcode: { type: String},
  Active: { type: String },
  Tags: { type: String },
  Note: { type: String },
  Product_group_ID: { type: String },
  Product_group: { type: String },
  Unit_price: { type: String },
  Images: [{ type: String }],
})

export const Product = mongoose.model("Product", PRODUCTS);