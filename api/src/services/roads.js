import { Roads } from "../models/roads.js";

export const getRoads = async () => {
    return Roads.find()};

export const getRoad = async ({ id }) => {
    return Roads.findById(id);
};

export const addRoad = async ({start,end,waypoints}
) => {
    const result = new Roads({start,end,waypoints}
    );
    return result.save()
}

export const updateRoad = async ({start,end,waypoints}
) => {
    const result = Roads.findById(id);
    return result.updateOne({start,end,waypoints}
    );
};

export const destroyRoad = async ({ Road_id }) => {
    const result = Roads.deleteOne({ _id: Road_id });
    console.log(result);
    return result;
};

export const clearRoadsDataBase = async () => {
    return Roads.deleteMany();
}
