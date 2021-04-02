import mongoose from "mongoose";

export const PLACES = mongoose.Schema({
    name: {
        type: String,
            },
    type: {
        type: String,
            },
    address: {
        street: {
            type: String,
        },
        city: {
            type: String,
        },
        country: {
            type: String,
        },
        cords: {
            longitude: {
                type: Number,
            },
            latitude: {
                type: Number,
            },
        }
    },
    contact: {
        client: {
            first_name: {
                type: String,
                
            },
            last_name: {
                type: String,
                
            },
            email: {
                type: String,
                
            },
            phone: {
                type: Number,
                
            },
            delivery: {
                first_name: {
                    type: String,
                    
                },
                last_name: {
                    type: String,
                    
                },
                email: {
                    type: String,
                    
                },
                phone: {
                    type: Number,
                    
                },
                address: {
                    street: {
                        type: String,
                        
                    },
                    city: {
                        type: String,
                        
                    },
                    country: {
                        type: String,
                        
                    },
                    cords: {
                        longitude: {
                            type: Number,
                            
                        },
                        latitude: {
                            type: Number,
                            
                        }
                    }
                }
            }
        }
    },
    invoice_data: {
        nip: {
            type: String,
            
        },
        full_name: {
            type: String,
            
        },
        short_name: {
            type: String,
            
        },
        adress: {
            type: Number,
            
        },

    },
    contract: {
        type: {
            type: String,
            
        },
        discounts:{
        ice_cream: {
            type: Number,
            
        },
        dumplings: {
            type: Number,
            
        }},
    },
})

export const Places = mongoose.model("Places", PLACES);

