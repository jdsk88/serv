import mongoose from "mongoose";

export const ROADS = mongoose.Schema(
    {
        start:String,
        end:String,
        waypoints:Array,
    }
)

export const Roads = mongoose.model("Roads", ROADS);
