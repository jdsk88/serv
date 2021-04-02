import { GeoLocation } from "../models/geolocation.js";

export const getGeoLocations = async (
    // { name, limit = 10, page = 1 }
    ) => {
    // const skip = (page -  .1) * limit;
    return GeoLocation.find({
        // name: {
        //     $regex: name || "",
        //     $options: "-i",
        // },
    })
        // .skip(skip)
        // .limit(limit);
};


export const getGeoLocation = async ({ id }) => {
    return GeoLocation.findById(id);
};

export const addGeoLocation = async ({ID,Name,Active,Tags,Territory,Representative_ID,Representative_name,Time_of_last_activity,Street_Address,ZIP,ZIP_ext,City,State,Country,Country_code,Email,Phone,Mobile,Website,Contact_name,Contact_title,Note,Status,latitude,longitude,}) => {
    const result = new GeoLocation({ID,Name,Active,Tags,Territory,Representative_ID,Representative_name,Time_of_last_activity,Street_Address,ZIP,ZIP_ext,City,State,Country,Country_code,Email,Phone,Mobile,Website,Contact_name,Contact_title,Note,Status,latitude,longitude,});
    return result.save()
}

export const updateGeoLocation = async ({id,ID,Name,Active,Tags,Territory,Representative_ID,Representative_name,Time_of_last_activity,Street_Address,ZIP,ZIP_ext,City,State,Country,Country_code,Email,Phone,Mobile,Website,Contact_name,Contact_title,Note,Status,latitude,longitude,}) => {
    const result = GeoLocation.findById(id);
    return result.updateOne({ID,Name,Active,Tags,Territory,Representative_ID,Representative_name,Time_of_last_activity,Street_Address,ZIP,ZIP_ext,City,State,Country,Country_code,Email,Phone,Mobile,Website,Contact_name,Contact_title,Note,Status,latitude,longitude,});
};

export const destroyGeoLocation = async ({Geolocation_id}) => {
    const result = GeoLocation.deleteOne({ _id: Geolocation_id});
    console.log(result);
    return result;
};

export const clearGeoLocationsDataBase = async () => {
    return GeoLocation.deleteMany();
}

export const getTranslatedGeoLocation = async ({id}) => {
    return GeoLocation.findById(id)

};