import mongoose from "mongoose";
export const CATEGORY = mongoose.Schema({
  name: { type: String },
  link: {type:String},
  type: {type:String},
  // icon: {type:String},
})

export const Category = mongoose.model("Category", CATEGORY);