import express from 'express'
import { prodData } from "../../data/products.js"
import {
  getProduct, getProducts,
  addProduct, updateProduct, destroyProduct,
  clearProductsDataBase, getTranslatedProduct, appendProduct
} from "../services/products.js";
import translate from 'translate';
import { Product } from '../models/products.js';
translate.engine = 'google';
translate.key = process.env.TRANSLATE_KEY;

const routes = express.Router({});

routes.get("/", async (req, res) => {
  const result = await getProducts(
    {
      Name: req.query.Name,
      Product_group: req.query.Product_group,
      limit: parseInt(req.query.limit),
      page: parseInt(req.query.page),
    });
  res.header("Access-Control-Allow-Origin", "*");
  res.send(result);
});

routes.get("/import", async (req, res) => {
  for(var item in prodData){
    const Name = prodData[item].Name;
    const Barcode = prodData[item].Barcode;
    const Active = prodData[item].Active;
    const Tags = prodData[item].Tags;
    const Note = prodData[item].Note;
    const Product_group_ID = prodData[item].Product_group_ID;
    const Product_group = prodData[item].Product_group;
    const Unit_price = prodData[item].Unit_price;
    const Images = prodData[item].Images;
    console.log(`Name: ${Name}, Barcode: ${Barcode}, Active: ${Active}, Tags: ${Tags}, Note: ${Note}, Product_group_ID: ${Product_group_ID}, Product_group: ${Product_group}, Unit_price: ${Unit_price}, Images: ${Images}`)
    await addProduct({
      Name, Barcode, Active, Tags, Note, Product_group_ID, Product_group, Unit_price, Images
    });
  }

  res.header("Access-Control-Allow-Origin", "*");
  res.send(prodData)
});

routes.get("/:product_id", async (req, res) => {
  const { product_id } = req.params;
  const result = await getProduct({ id: product_id });
  res.header("Access-Control-Allow-Origin", "*");
  res.send(result);
});

routes.get(`/:product_id/:language`, async (req, res) => {
  const { product_id, language } = req.params;
  const result = await getTranslatedProduct({ id: product_id });
  res.header("Access-Control-Allow-Origin", "*");
  console.log(result)
  const translated_result = {
    name: result.from,
    type: result.to,
    category: result.toCopy,
    price: result.toHiddenCopy,
    ean: await translate(result.title, language),
    bar: await translate(result.letter, language),
    images: await translate(result.signature, language),
  }
  console.log(translated_result)
  res.send(translated_result);
});

routes.post('/', (req, res, next) => {
  let query = req.body.Name;
  Product.findOne({Name:query}, function(err, product){
      if(err) console.log(err);
      if ( product){
          console.log("This product has already been saved");
      } else {
          var product = new Product(req.body);
          product.save(function(err, product) {
              if(err) console.log(err);
              console.log("New product profile created");
              res.redirect(`/api/products`);
          });
      }
  });
});

routes.post('/file_upload', (req, res) => {
  res.send(`You have uploaded this image: <hr/><img src="${req.file.path}" width="500"><hr /><a href="./">Upload another image</a>`);
});

routes.put("/:product_id", async (req, res) => {
  const { product_id } = req.params
  const { Name, Barcode, Active, Tags, Note, Product_group_ID, Product_group, Unit_price, Images,
  } = req.body
  const result = await updateProduct({
    id: product_id, Name, Barcode, Active, Tags, Note, Product_group_ID, Product_group, Unit_price, Images,


  });
  res.header("Access-Control-Allow-Origin", "*");
  res.send(result)
});

routes.put("/append/:product_id", async (req, res) => {
  const { product_id } = req.params
  const { Name, Barcode, Active, Tags, Note, Product_group_ID, Product_group, Unit_price, Images,
  } = req.body
  const result = await appendProduct({
    id: product_id, Name, Barcode, Active, Tags, Note, Product_group_ID, Product_group, Unit_price, Images,
  });
  res.header("Access-Control-Allow-Origin", "*");
  res.send(result)
});

routes.patch("/:product_id", async (req, res) => {
  const { product_id } = req.params
  const { Name, Barcode, Active, Tags, Note, Product_group_ID, Product_group, Unit_price, Images,

  } = req.body

  const result = await updateProduct({
    id: product_id, Name, Barcode, Active, Tags, Note, Product_group_ID, Product_group, Unit_price, Images,
  });
  res.header("Access-Control-Allow-Origin", "*");
  res.send(result)
});

routes.delete("/", async (req, res) => {
  const result = await clearProductsDataBase();
  res.send(result);
});

routes.delete("/:product_id", async (req, res) => {
  const { product_id } = req.params;
  const result = await destroyProduct({ product_id });
  res.send(result);
});

export default routes
