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

export const addLocation = async ({name,type,address,contact,invoice_data,contract}) => {
    const result = new Location({name,type,address,contact,invoice_data,contract});
    return result.save()
}

export const updateLocation = async ({id,name,type,address,contact,invoice_data,contract}) => {
    const result = Location.findById(id);
    return result.updateOne({name,type,address,contact,invoice_data,contract});
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