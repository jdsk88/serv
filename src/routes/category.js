import express from 'express'
import { CATEGORY } from '../models/category.js';
import {
  getCategory, getCategories,
  addCategory, updateCategory, destroyCategory,
  clearCategorysDataBase,
  // updateProductCard,
} from "../services/category.js";

const routes = express.Router({});

routes.get("/", async (req, res) => {
  const result = await getCategories(
    {
      limit: parseInt(req.query.limit),
      page: parseInt(req.query.page),
    });
  res.header("Access-Control-Allow-Origin", "*");
  res.send(result);
});

routes.get("/:Category_id", async (req, res) => {
  const { Category_id } = req.params;
  const result = await getCategory({ id: Category_id });
  res.header("Access-Control-Allow-Origin", "*");
  res.send(result);
});


routes.post("/", async (req, res) => {
  const { name,link,type,icon
  } = req.body;
  const result = await addCategory({name,link,type,icon});
  res.header("Access-Control-Allow-Origin", "*");
  res.send(result)
});

routes.put("/:Category_id", async (req, res) => {
  const { Category_id } = req.params
  const { name,link,type,icon } = req.body
  const result = await updateCategory({id: Category_id, name,link,type,icon});
  res.header("Access-Control-Allow-Origin", "*");
  res.send(result)
});
// routes.post("/:Category_id", async (req, res) => {
//   const { Category_id } = req.params
//   const { name,link,type,icon } = req.body
//   const result = await updateProductCard({
//     id: Category_id, name,link,type,icon
//   });
//   res.header("Access-Control-Allow-Origin", "*");
//   res.send(result)
// });


routes.patch("/:Category_id", async (req, res) => {
  const { Category_id } = req.params
  const { name,link,type,icon

  } = req.body

  const result = await updateCategory({
    id: Category_id, name,link,type,icon
  });
  res.header("Access-Control-Allow-Origin", "*");
  res.send(result)
});

routes.delete("/", async (req, res) => {
  const result = await clearCategorysDataBase();
  res.send(result);
});

routes.delete("/:Category_id", async (req, res) => {
  const { Category_id } = req.params;
  const result = await destroyCategory(Category_id);
  res.header("Access-Control-Allow-Origin", "*");
  res.send(result);
});

export default routes
