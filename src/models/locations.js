import mongoose from "mongoose";

export const LOCATIONS = mongoose.Schema(
    {
        Name:String,
        Active:String,
        Tags:String,
        Territory:String,
        Representative_ID:String,
        Representative_name:String,
        Time_of_last_activity:String,
        Street_Address:String,
        ZIP_ext:String,
        City:String,
        Country:String,
        Country_code:String,
        Phone:String,
        Mobile:String,
        Website:String,
        Contact_name:String,
        Contact_title:String,
        Note:String,
        Status:String,
        latitude:String,
        longitude:String,
    }
)

export const Location = mongoose.model("Location", LOCATIONS);
