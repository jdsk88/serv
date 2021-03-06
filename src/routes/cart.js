import express from 'express'
import { Cart } from '../models/cart.js';
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

// routes.patch("/:cart_id", async (req, res) => {
//   const { cart_id } = req.params
//   const { product_id,product_price,product_name,product_image,quantity,total_price } = req.body
//   const result = await updateCart({id: cart_id,  product_id,product_price,product_name,product_image,quantity,total_price});
//   res.header("Access-Control-Allow-Origin", "*");
//   res.send(result)
// });

routes.post('/', (req, res, next) => {
  let query = req.body.product_id;
  Cart.findOne({product_id:query}, function(err, item){
    console.log("query",query)
    console.log("item",item)
      if(err) console.log(err);
      if (item === query){
          console.log("This item is already in cart");
          updateCart(item)
          // Cart.updateOne({product_id:query});
      } else {
          var item = new Cart(req.body);
          item.save(function(err, user) {
              if(err) console.log(err);
              console.log("New item added to cart")
          });
      }
  });
});

// routes.post("/", async (req, res) => {
//   const {  product_id,product_price,product_name,product_image,quantity,total_price
//   } = req.body;
//   const result = await addCart({ product_id,product_price,product_name,product_image,quantity,total_price});
//   res.header("Access-Control-Allow-Origin", "*");
//   res.send(result)
// });

routes.put("/:cart_id", async (req, res) => {
  const { cart_id } = req.params
  const {  product_id,product_price,product_name,product_image,quantity,total_price } = req.body
  const result = await updateCart({id: cart_id,  product_id,product_price,product_name,product_image,quantity,total_price});
  res.header("Access-Control-Allow-Origin", "*");
  res.send(result)
});

// routes.post("/:cart_id", async (req, res) => {
//   const { cart_id } = req.params
//   const {  product_id,product_price,product_name,product_image,quantity,total_price } = req.body
//   const result = await updateProductCard({
//     id: cart_id,  product_id,product_price,product_name,product_image,quantity,total_price
//   });
//   res.header("Access-Control-Allow-Origin", "*");
//   res.send(result)
// });


routes.patch("/", async (req, res) => {
  // const { cart_id } = req.params
  const {  product_id,product_price,product_name,product_image,quantity,total_price

  } = req.body

  const result = await updateCart({
    // id: cart_id,
      product_id,product_price,product_name,product_image,quantity,total_price
  });
  res.header("Access-Control-Allow-Origin", "*");
  res.send(result)
});

routes.patch("/:product_id", async (req, res) => {
  const { product_id } = req.params
  const { product_price,product_name,product_image,quantity,total_price

  } = req.body
 
  const result = await updateProductInCart({
    id: product_id,
      product_price,product_name,product_image,quantity,total_price
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
