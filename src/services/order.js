
import { Order } from "../models/order.js";

export const getOrders = async () => {
    return Order.find()
};

export const getOrder = async ({ id }) => {
    return Order.findById(id);
};

export const addOrder = async ({ client,seller,total_price,total_discount,status,products
}) => {
    const result = new Order({client,seller,total_price,total_discount,status,products});
    console.log(client,seller,total_price,total_discount,status,products)
    return result.save()
}

export const updateOrder = async ({ 
    // id, 
    client,seller,total_price,total_discount,status,products
}) => {
    const result = Order.findOne();
    console.log("updateOrder")
    // console.log(client,seller,total_price,total_discount,status,products)
    return result.updateOne({client,seller,total_price,total_discount,status,products});
};

export const updateProductInOrder = async ({ id, client,seller,total_price,total_discount,status,products
}) => {
    const result = Order.findById(id);
    console.log(id,client,seller,total_price,total_discount,status,products)
    return result.updateOne({client,seller,total_price,total_discount,status,products});
};


export const destroyOrder = async ({ order_id }) => {
    const result = Order.deleteOne({ _id: order_id });
    console.log(result);
    return result;
};

export const clearOrdersDataBase = async () => {
    return Order.deleteMany();
}

export const getTranslatedOrder = async ({ id }) => {
    return Order.findById(id)
};


// const Order = {
// "product_price":"product_price",
// "product_name":"product_name",
// "product_image":"product_image",
// "quantity":2,
// "total_price":190}