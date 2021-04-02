import express from "express";
import users from "./users.js";
import employers from "./employer.js";
import locations from "./locations.js";
import products from "./products.js";
import cart from "./cart.js";
import category from "./category.js";
import geolocation from "./geolocation.js";


const routes = express.Router({});


const HOST = process.env.HOST;

routes.get("/", (req, res) => {
  res.send("Hello API!");
  console.log(req.method + " on: " + req.protocol + "://" + HOST + req.originalUrl)
});

routes.use('/users', users)
routes.use('/employers', employers)
routes.use('/locations', locations)
routes.use('/products', products)
routes.use('/cart', cart)
routes.use('/productsEditor', products)
routes.use('/category', category)
routes.use('/geolocation', geolocation)

export default routes;