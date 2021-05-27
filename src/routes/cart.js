import express from 'express'
import {
  getCart, getCarts,
  addCart, updateCart, destroyCart,
  clearCartsDataBase,
  updateProductInCart,
} from "../services/cart.js";

const routes = express.Router({});

routes.get("/", async (req, res) => {
  const result = await getCarts();
  res.header("Access-Control-Allow-Origin", "*");
  res.send(result);
});

routes.get("/:cart_id", async (req, res) => {
  const { cart_id } = req.params;
  const result = await getCart({ id: cart_id });
  res.header("Access-Control-Allow-Origin", "*");
  res.send(result);
});

routes.patch("/:cart_id", async (req, res) => {
  const { cart_id } = req.params
  const { products,client,seller,total_price } = req.body
  const result = await updateCart({id: cart_id, products,client,seller,total_price});
  res.header("Access-Control-Allow-Origin", "*");
  res.send(result)
});

routes.post("/", async (req, res) => {
  const { products,client,seller,total_price
  } = req.body;
  const result = await addCart({products,client,seller,total_price});
  res.header("Access-Control-Allow-Origin", "*");
  res.send(result)
});

routes.put("/:cart_id", async (req, res) => {
  const { cart_id } = req.params
  const { products,client,seller,total_price } = req.body
  const result = await updateCart({id: cart_id, products,client,seller,total_price});
  res.header("Access-Control-Allow-Origin", "*");
  res.send(result)
});
// routes.post("/:cart_id", async (req, res) => {
//   const { cart_id } = req.params
//   const { products,client,seller,total_price } = req.body
//   const result = await updateProductCard({
//     id: cart_id, products,client,seller,total_price
//   });
//   res.header("Access-Control-Allow-Origin", "*");
//   res.send(result)
// });


routes.patch("/", async (req, res) => {
  // const { cart_id } = req.params
  const { products,client,seller,total_price

  } = req.body

  const result = await updateCart({
    // id: cart_id,
     products,client,seller,total_price
  });
  res.header("Access-Control-Allow-Origin", "*");
  res.send(result)
});

routes.patch("/:product_id", async (req, res) => {
  const { product_id } = req.params
  const { products,client,seller,total_price

  } = req.body

  const result = await updateProductInCart({
    id: product_id,
     products,client,seller,total_price
  });
  res.header("Access-Control-Allow-Origin", "*");
  res.send(result)
});

routes.delete("/", async (req, res) => {
  const result = await clearCartsDataBase();
  res.send(result);
});

routes.delete("/:cart_id", async (req, res) => {
  const { cart_id } = req.params;
  const result = await destroyCart({ cart_id });
  res.send(result);
});

export default routes
