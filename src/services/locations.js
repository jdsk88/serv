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

export const addLocation = async ({ Name,
    Active,
    Tags,
    Territory,
    Representative_ID,
    Representative_name,
    Time_of_last_activity,
    Street_Address,
    ZIP_ext,
    City,
    Country,
    Country_code,
    Phone,
    Mobile,
    Website,
    Contact_name,
    Contact_title,
    Note,
    Status,
    latitude,
    longitude, }
) => {
    const result = new Location({
        Name,
        Active,
        Tags,
        Territory,
        Representative_ID,
        Representative_name,
        Time_of_last_activity,
        Street_Address,
        ZIP_ext,
        City,
        Country,
        Country_code,
        Phone,
        Mobile,
        Website,
        Contact_name,
        Contact_title,
        Note,
        Status,
        latitude,
        longitude,
    }
    );
    return result.save()
}

export const updateLocation = async ({
    id,
    Name,
    Active,
    Tags,
    Territory,
    Representative_ID,
    Representative_name,
    Time_of_last_activity,
    Street_Address,
    ZIP_ext,
    City,
    Country,
    Country_code,
    Phone,
    Mobile,
    Website,
    Contact_name,
    Contact_title,
    Note,
    Status,
    latitude,
    longitude, }
) => {
    const result = Location.findById(id);
    return result.updateOne({
        Name,
        Active,
        Tags,
        Territory,
        Representative_ID,
        Representative_name,
        Time_of_last_activity,
        Street_Address,
        ZIP_ext,
        City,
        Country,
        Country_code,
        Phone,
        Mobile,
        Website,
        Contact_name,
        Contact_title,
        Note,
        Status,
        latitude,
        longitude,
    }
    );
};

export const destroyLocation = async ({ location_id }) => {
    const result = Location.deleteOne({ _id: location_id });
    console.log(result);
    return result;
};

export const clearLocationsDataBase = async () => {
    return Location.deleteMany();
}

export const getTranslatedLocation = async ({ id }) => {
    return Location.findById(id)

};