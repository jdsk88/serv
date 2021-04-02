import { Employer } from "../models/employers.js";

export const getEmployers = async () => {
    return Employer.find()
};

export const getEmployer = async ({ id }) => {
    return Employer.findById(id);
};

export const addEmployer = async ({first_name,last_name,username,contact:{email,phone,address:{street,city,country}},contract: {start_date,end_date},signature,localizations: [localization_id,localization_name,localization_adress,localization_status,localization_contact,localization_contact_phone]}) => {
    const result = new Employer({first_name,last_name,username,contact:{email,phone,address:{street,city,country}},contract: {start_date,end_date},signature,localizations: [localization_id,localization_name,localization_adress,localization_status,localization_contact,localization_contact_phone]});
    return result.save()
}

export const updateEmployer = async ({id,first_name,last_name,username,contact:{email,phone,address:{street,city,country}},contract: {start_date,end_date},signature,localizations: [localization_id,localization_name,localization_adress,localization_status,localization_contact,localization_contact_phone]}) => {
    const result = Employer.findById(id);
    return result.updateOne({first_name,last_name,username,contact:{email,phone,address:{street,city,country}},contract: {start_date,end_date},signature,localizations: [localization_id,localization_name,localization_adress,localization_status,localization_contact,localization_contact_phone]});
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