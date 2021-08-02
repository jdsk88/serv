import express from 'express'
import {getProducts} from '../services/products.js';
import {getOrders} from '../services/order.js';

const routes = express.Router({});

routes.get("/", async (req, res) => {
  const result = 
    await getProducts(
      { 
        Name: req.query.Name,
        Product_group: req.query.Product_group,
        limit: parseInt(req.query.limit),
        page: parseInt(req.query.page),
      });
    await getOrders(
      {
        Products: req.query.products.product_name,
        limit: parseInt(req.query.limit),
        page: parseInt(req.query.page),
      });
  res.header("Access-Control-Allow-Origin", "*");
  res.send(result);
});



export default routes
