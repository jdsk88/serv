
import { Cart } from "../models/cart.js";

export const getCarts = async () => {
    return Cart.findOne()
};

export const getCart = async ({ id }) => {
    return Cart.findById(id);
};

export const addCart = async ({ products,client,seller,total_price
}) => {
    const result = new Cart({products,client,seller,total_price});
    console.log(products,client,seller,total_price)
    return result.save()
}

export const updateCart = async ({ 
    // id, 
    products,client,seller,total_price
}) => {
    const result = Cart.findOne();
    // console.log(products,client,seller,total_price)
    return result.updateOne({client,seller,total_price,$push:{products}});
};

export const updateProductInCart = async ({ id, products,client,seller,total_price
}) => {
    const result = Cart.findById(id);
    // console.log(products,client,seller,total_price)
    return result.updateOne({client,seller,total_price,$push:{products}});
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

