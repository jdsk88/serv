import mongoose from "mongoose";

export const EMPLOYERS = mongoose.Schema({
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,

    },
    contact: {
        email: {
            type: String,
            required: true,

        },
        phone: {
            type: Number,
            required: true,

        },
        address: {
            street: {
                type: String,
                required: true,
            },
            city: {
                type: String,
                required: true,
            },
            country: {
                type: String,
                required: true,
            },
        },
    },
    contract: {
        start_date: {
            type: String,
            required: true,
        },
        end_date: {
            type: String,
        }
    },
    signature: {
        type: String,
        required: true,
        maxlength: 22,

    },
    localizations:
        [{
            type: String,
            required: true, 
            id:false,
            localization_id:String,localization_name:String,localization_adress:String,localization_status:String,localization_contact: String,localization_contact_phone: Number
        }]
})

export const Employer = mongoose.model("Employer", EMPLOYERS);
// localization_id,localization_name,localization_adress,localization_status,localization_contact,localization_contact_phone