import express from 'express'
import {deleteFile,createFile,updateFile,ReadFile} from "../services/fileSystem.js"
import { mailer } from '../services/mailer/index.js';
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



// MAKING ORDER
https://github.com/jdsk88/drugsDB/blob/master/src/routes/in.old.js
routes.post("/", async (req, res) => {
  const { client, seller, total_price, total_discount, status, products, date } = req.body;
  const result = await addOrder({ client, seller, total_price, total_discount, status, products, date });

  console.log("order post : ", products)

  // const renderer = (data) => Object.keys(data).map(key => {
  //   Object.keys(data[key]).map(item => {
  //     // console.log(`${data[key][item].product_name}: `, data[key][item])
  //     const html = {
  //       orderedProduct_id: data[key][item]._id,
  //       orderedProductProduct_id: data[key][item].product_id,
  //       orderedProductProduct_name: data[key][item].product_name,
  //       orderedProductQuantity: data[key][item].quantity,
  //       orderedProductProduct_price: data[key][item].product_price,
  //       orderedProductTotal_price: data[key][item].total_price
  //     }
  //     // console.log(html)
  //   })
  //   return data
  // });
  // renderer(products);

  res.header("Access-Control-Allow-Origin", "*");
  res.send(result)
  // mailer('jdsk88@gmail.com', date, "html" )
});

routes.put("/:order_id", async (req, res) => {
  const { order_id } = req.params
  const { client, seller, total_price, total_discount, status, products, date } = req.body
  const result = await updateOrder({ id: order_id, client, seller, total_price, total_discount, status, products, date });
  res.header("Access-Control-Allow-Origin", "*");
  res.send(result)
});


routes.patch("/", async (req, res) => {
  // const { Order_id } = req.params
  const { client, seller, total_price, total_discount, status, products, date

  } = req.body

  const result = await updateOrder({
    // id: Order_id,
    client, seller, total_price, total_discount, status, products, date
  });
  res.header("Access-Control-Allow-Origin", "*");
  res.send(result)
});

routes.patch("/:product_id", async (req, res) => {
  const { product_id } = req.params
  const { client, seller, total_price, total_discount, status, products, date

  } = req.body

  const result = await updateProductInOrder({
    id: product_id,
    client, seller, total_price, total_discount, status, products, date
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
