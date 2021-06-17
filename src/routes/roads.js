import express from "express";
import {
  getRoad, getRoads,
  addRoad, updateRoad, destroyRoad,
  clearRoadsDataBase
} from "../services/roads.js";


const routes = express.Router({});

routes.get("/", async (req, res) => {
  const result = await getRoads();
  res.header("Access-Control-Allow-Origin", "*");
  res.send(result);
});

routes.get("/:Road_id", async (req, res) => {
  const { Road_id } = req.params;
  const result = await getRoad({ id: Road_id });
  res.header("Access-Control-Allow-Origin", "*");
  res.send(result);
});

routes.post("/", async (req, res) => {
  const {start,end,waypoints} = req.body;
  const result = await addRoad({start,end,waypoints});
  res.header("Access-Control-Allow-Origin", "*");
  res.send(result)
});

routes.put("/:Road_id", async (req, res) => {
  const { Road_id } = req.params
  const {start,end,waypoints} = req.body
  const result = await updateRoad({
    id: Road_id, name, type, address: { street, city, country, cords: { longitude, latitude } }, contact: { first_name, last_name, email, phone }, invoice_data: { nip, full_name, short_name, adress }


  });
  res.header("Access-Control-Allow-Origin", "*");
  res.send(result)
});

routes.patch("/:Road_id", async (req, res) => {
  const { Road_id } = req.params
  const { name, type, address: { street, city, country, cords: { longitude, latitude } }, contact: { first_name, last_name, email, phone }, invoice_data: { nip, full_name, short_name, adress }

  } = req.body

  const result = await updateRoad({
    id: Road_id, start,end,waypoints});
  res.header("Access-Control-Allow-Origin", "*");
  res.send(result)
});

routes.delete("/", async (req, res) => {
  const result = await clearRoadsDataBase();
  res.send(result);
});

routes.delete("/:Road_id", async (req, res) => {
  const { Road_id } = req.params;
  const result = await destroyRoad({ Road_id });
  res.send(result);
});

export default routes
