
import { Cart } from "../models/cart.js";

export const getCarts = async () => {
    return Cart.find()
};

export const getCart = async ({ id }) => {
    return Cart.findById(id);
};

export const addCart = async ({ product_id,product_price,product_name,product_image,quantity,total_price
}) => {
    const result = new Cart({product_id,product_price,product_name,product_image,quantity,total_price});
    console.log(product_id,product_price,product_name,product_image,quantity,total_price)
    return result.save()
}

export const updateCart = async ({ 
    // id, 
    product_id,product_price,product_name,product_image,quantity,total_price
}) => {
    const result = Cart.findOne();
    console.log("updateCart")
    // console.log(product_id,product_price,product_name,product_image,quantity,total_price)
    return result.updateOne({product_id,product_price,product_name,product_image,quantity,total_price});
};

export const updateProductInCart = async ({ id, product_id,product_price,product_name,product_image,quantity,total_price
}) => {
    const result = Cart.findById(id);
    console.log(id,product_id,product_price,product_name,product_image,quantity,total_price)
    return result.updateOne({product_id,product_price,product_name,product_image,quantity,total_price});
};


export const destroyCart = async ({ cart_id }) => {
    const result = Cart.deleteOne({ _id: cart_id });
    console.log(result);
    return result;
};

export const clearCartsDataBase = async () => {
    return Cart.deleteMany();
}

export const getTranslatedCart = async ({ id }) => {
    return Cart.findById(id)
};


// const cart = {
// "product_price":"product_price",
// "product_name":"product_name",
// "product_image":"product_image",
// "quantity":2,
// "total_price":190}