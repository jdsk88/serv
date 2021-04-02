import mongoose from "mongoose";
// import config from 'config';
// import jwt from 'jsonwebtoken';
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
        required: true
    },
    contact: {
        email: {
            type: String,
            required: true
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
            required: true,
        }
    },
    signature: {
        type: String,
        required: true,
        maxlength: 22
    },
    localizations: 
            [{type: String,
            required: true}]
    ,
})

export const Employer = mongoose.model("Employer", EMPLOYERS);



// {
//     "first_name": "maciek",
//     "last_name": "admin",
//     "username": "jdsk88",
//     "contact": {
//         "email": "maciej@admin.pl",
//         "phone": "123123123",
//         "address": {
//             "street": "chlopska 12",
//             "city": "krakow",
//             "country": "poland",
//         },
//     },
//     "contract": {
//         "start_date": "12.21.2020",
//         "end_date": "12.21.2022"
//     },
//     "signature": "admin.pl",
// }

