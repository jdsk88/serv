import { Employer } from "../models/isbm/employers.js";

export const getEmployers = async (
    // { name, limit = 10, page = 1 }
    ) => {
    // const skip = (page -  .1) * limit;
    return Employer.find({
        // name: {
        //     $regex: name || "",
        //     $options: "-i",
        // },
    })
        // .skip(skip)
        // .limit(limit);
};


export const getEmployer = async ({ id }) => {
    return Employer.findById(id);
};

export const addEmployer = async ({first_name,last_name,username,contact,phone,address,city,country,contract,signature}) => {
    const result = new Employer({first_name,last_name,username,contact,phone,address,city,country,contract,signature});
    return result.save()
}

export const updateEmployer = async ({id,first_name,last_name,username,contact,phone,address,city,country,contract,signature}) => {
    const result = Employer.findById(id);
    return result.updateOne({first_name,last_name,username,contact,phone,address,city,country,contract,signature});
};

export const destroyEmployer = async ({employer_id}) => {
    const result = Employer.deleteOne({ _id: employer_id});
    console.log(result);
    return result;
};

export const clearEmployersDataBase = async () => {
    return Employer.deleteMany();
}

export const getTranslatedEmployer = async ({id}) => {
    return Employer.findById(id)

};