import mongoose from "mongoose";

export const GEOLOCATIONS = mongoose.Schema({
    ID: String,
    Name: {
        type: String,
        index: { unique: true, dropDups: true }
    },
    Active: String,
    Tags: String,
    Territory: String,
    Representative_ID: String,
    Representative_name: String,
    Time_of_last_activity: String,
    Street_Address: String,
    ZIP: String,
    ZIP_ext: String,
    City: String,
    State: String,
    Country: String,
    Country_code: String,
    Email: String,
    Phone: String,
    Mobile: String,
    Website: String,
    Contact_name: String,
    Contact_title: String,
    Note: String,
    Status: String,
    latitude: {
        type: Number,
        //  index: { unique: true, dropDups: true }
    },
    longitude: {
        type: Number,
        //  index: { unique: true, dropDups: true }
    },
})

export const GeoLocation = mongoose.model("GeoLocation", GEOLOCATIONS);

