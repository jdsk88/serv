import express from 'express'
import {
  getOrder, getOrders,
  addOrder, updateOrder, destroyOrder,
  clearOrdersDataBase,
  updateProductInOrder,
} from "../services/order.js";


const routes = express.Router({});

routes.get("/", async (req, res) => {
  const result = await getOrders();
  res.header("Access-Control-Allow-Origin", "*");
  res.send(result);
});

routes.get("/:order_id", async (req, res) => {
  const { order_id } = req.params;
  const result = await getOrder({ id: order_id });
  res.header("Access-Control-Allow-Origin", "*");
  res.send(result);
});
routes.post("/", async (req, res) => {
  const {client,seller,total_price,total_discount,status,products} = req.body;
  const result = await addOrder({client,seller,total_price,total_discount,status,products});
  res.header("Access-Control-Allow-Origin", "*");
  res.send(result)
});

routes.put("/:order_id", async (req, res) => {
  const { order_id } = req.params
  const {  client,seller,total_price,total_discount,status,products } = req.body
  const result = await updateOrder({id: order_id,  client,seller,total_price,total_discount,status,products});
  res.header("Access-Control-Allow-Origin", "*");
  res.send(result)
});


routes.patch("/", async (req, res) => {
  // const { Order_id } = req.params
  const {  client,seller,total_price,total_discount,status,products

  } = req.body

  const result = await updateOrder({
    // id: Order_id,
      client,seller,total_price,total_discount,status,products
  });
  res.header("Access-Control-Allow-Origin", "*");
  res.send(result)
});

routes.patch("/:product_id", async (req, res) => {
  const { product_id } = req.params
  const { client,seller,total_price,total_discount,status,products

  } = req.body
 
  const result = await updateProductInOrder({
    id: product_id,
    client,seller,total_price,total_discount,status,products
  });
  res.header("Access-Control-Allow-Origin", "*");
  res.send(result)
});

routes.delete("/", async (req, res) => {
  const result = await clearOrdersDataBase();
  res.send(result);
});

routes.delete("/:Order_id", async (req, res) => {
  const { Order_id } = req.params;
  const result = await destroyOrder({ Order_id });
  res.send(result);
});

export default routes
