import mongoose from "mongoose";

export const LOCATIONS = mongoose.Schema(
    {
        name: { type: String },
        type: { type: String },
        address: {
            street: { type: String },
            city: { type: String },
            country: { type: String },
            cords: {
                longitude: { type: Number },
                latitude: { type: Number },
            }
        },
        contact: {
                first_name: { type: String },
                last_name: { type: String },
                email: { type: String },
                phone: { type: Number }
        },
        invoice_data: {
            nip: { type: String },
            full_name: { type: String },
            short_name: { type: String },
            adress: { type: Number },
        },
    }
)

export const Location = mongoose.model("Location", LOCATIONS);
