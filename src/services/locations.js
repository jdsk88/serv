import { Location } from "../models/locations.js";

export const getLocations = async (
    // { name, limit = 10, page = 1 }
    ) => {
    // const skip = (page -  .1) * limit;
    return Location.find({
        // name: {
        //     $regex: name || "",
        //     $options: "-i",
        // },
    })
        // .skip(skip)
        // .limit(limit);
};


export const getLocation = async ({ id }) => {
    return Location.findById(id);
};

export const addLocation = async ({name,type,address:{street,city,country,cords:{longitude,latitude}},contact:{first_name,last_name,email,phone},invoice_data:{nip,full_name,short_name,adress}
}) => {
    const result = new Location({name,type,address:{street,city,country,cords:{longitude,latitude}},contact:{first_name,last_name,email,phone},invoice_data:{nip,full_name,short_name,adress}
});
    return result.save()
}

export const updateLocation = async ({id,name,type,address:{street,city,country,cords:{longitude,latitude}},contact:{first_name,last_name,email,phone},invoice_data:{nip,full_name,short_name,adress}
}) => {
    const result = Location.findById(id);
    return result.updateOne({name,type,address:{street,city,country,cords:{longitude,latitude}},contact:{first_name,last_name,email,phone},invoice_data:{nip,full_name,short_name,adress}
});
};

export const destroyLocation = async ({location_id}) => {
    const result = Location.deleteOne({ _id: location_id});
    console.log(result);
    return result;
};

export const clearLocationsDataBase = async () => {
    return Location.deleteMany();
}

export const getTranslatedLocation = async ({id}) => {
    return Location.findById(id)

};