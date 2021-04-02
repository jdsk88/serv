
import { Product } from "../models/products.js";

export const getProducts = async ({ Name, Product_group, limit = 10, page = 1 }) => {
    const skip = (page - 1) * limit;
    return Product.find({
        Name: {
            $regex: Name || "",
            $options: "-i",
        },
        Product_group: {
            $regex: Product_group || "",
            $options: "-i",
        },
    })
        .skip(skip)
        .limit(limit);
};


export const getProduct = async ({ id }) => {
    return Product.findById(id);
};

export const addProduct = async ({ Name,Barcode,Active,Tags,Note,Product_group_ID,Product_group,Unit_price, Images
 }) => {
    const result = new Product({ Name,Barcode,Active,Tags,Note,Product_group_ID,Product_group,Unit_price, Images
 });
 console.log(Name,Barcode,Active,Tags,Note,Product_group_ID,Product_group,Unit_price, Images)
    return result.save()
}


export const updateProduct = async ({ id, Name,Barcode,Active,Tags,Note,Product_group_ID,Product_group,Unit_price, Images
 }) => {
    const result = Product.findById(id);
    return result.updateOne({ Name,Barcode,Active,Tags,Note,Product_group_ID,Product_group,Unit_price, Images
 });
};

export const appendProduct = async ({ id, Name,Barcode,Active,Tags,Note,Product_group_ID,Product_group,Unit_price, Images
}) => {
   const result = Product.findById(id);
   return result.updateOne({ Name,Barcode,Active,Tags,Note,Product_group_ID,Product_group,Unit_price, $push:{Images}
});
};

export const destroyProduct = async ({ product_id }) => {
    const result = Product.deleteOne({ _id: product_id });
    console.log(result);
    return result;
};

export const clearProductsDataBase = async () => {
    return Product.deleteMany();
}

export const getTranslatedProduct = async ({id}) => {
    return Product.findById(id)

};
 