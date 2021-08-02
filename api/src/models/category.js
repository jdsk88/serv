import mongoose from "mongoose";
export const CATEGORY = mongoose.Schema({
  name: { type: String,requied: true},
  link: {type:String,requied: true},
  type: {type:String,requied: true},
  icon: {type:String},
})

export const Category = mongoose.model("Category", CATEGORY);