
import { Category } from "../models/category.js";

export const getCategories = async ({ limit = 10, page = 1 }) => {
    const skip = (page - 1) * limit;
    return Category.find()
        .skip(skip)
        .limit(limit);
};

export const getCategory = async ({ id }) => {
    return Category.findById(id);
};

export const addCategory = async ({ name,link,type,icon
}) => {
    const result = new Category({name,link,type,icon});
    console.log(name,link,type,icon)
    return result.save()
}

export const updateCategory = async ({ id, name,link,type,icon
}) => {
    const result = Category.findById(id);
    console.log(name,link,type,icon)
    return result.updateOne({name,link,type,icon});
};

export const destroyCategory = async ({ Category_id }) => {
    const result = Category.deleteOne({ _id: Category_id });
    console.log(result);
    return result;
};

export const clearCategorysDataBase = async () => {
    return Category.deleteMany();
}

export const getTranslatedCategory = async ({ id }) => {
    return Category.findById(id)

};

