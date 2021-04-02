
import { Cart } from "../models/cart.js";

export const getCarts = async ({ limit = 10, page = 1 }) => {
    const skip = (page - 1) * limit;
    return Cart.find()
        .skip(skip)
        .limit(limit);
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

export const updateCart = async ({ id, products,client,seller,total_price
}) => {
    const result = Cart.findById(id);
    console.log(products,client,seller,total_price)
    return result.updateOne({client,seller,total_price,$push:{products}});
};
// export const updateCart2 = async ({ id, products,client,seller,total_price
// }) => {
//     const result = Cart.findById(id);
//     console.log(products,client,seller,total_price)
//     return result.updateOne({client,seller,total_price,products});
// };

export const destroyCart = async ({ product_id }) => {
    const result = Cart.deleteOne({ _id: product_id });
    console.log(result);
    return result;
};

export const clearCartsDataBase = async () => {
    return Cart.deleteMany();
}

export const getTranslatedCart = async ({ id }) => {
    return Cart.findById(id)
};

