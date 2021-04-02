import express from "express";
import {data} from "../../data/places.js";
import {
  getLocation, getLocations,
  addLocation, updateLocation, destroyLocation,
  clearLocationsDataBase
} from "../services/locations.js";


const routes = express.Router({});

routes.get("/", async (req, res) => {
  const result = await getLocations(
    // {
    //   name: req.query.name,
    //   limit: parseInt(req.query.limit),
    //   page: parseInt(req.query.page),
    // }
  );
  res.header("Access-Control-Allow-Origin", "*");
  res.send(result);
});
routes.get("/places", (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    // console.log(places)
    res.send(data);
});

routes.get("/:location_id", async (req, res) => {
  const { location_id } = req.params;
  const result = await getLocation({ id: location_id });
  res.header("Access-Control-Allow-Origin", "*");
  res.send(result);
});

routes.post("/", async (req, res) => {
  const { first_name, last_name, username, contact, phone, address, city, country, contract, signature } = req.body;
  const result = await addLocation({ first_name, last_name, username, contact, phone, address, city, country, contract, signature });
  res.header("Access-Control-Allow-Origin", "*");
  res.send(result)
});


routes.put("/:location_id", async (req, res) => {
  const { location_id } = req.params
  const { first_name, last_name, username, contact, phone, address, city, country, contract, signature } = req.body
  const result = await updateLocation({
    id: location_id, first_name, last_name, username, contact, phone, address, city, country, contract, signature

  });
  res.header("Access-Control-Allow-Origin", "*");
  res.send(result)
});

routes.patch("/:location_id", async (req, res) => {
  const { location_id } = req.params
  const { first_name, last_name, username, contact, phone, address, city, country, contract, signature
  } = req.body

  const result = await updateLocation({ id: location_id, first_name, last_name, username, contact, phone, address, city, country, contract, signature });
  res.header("Access-Control-Allow-Origin", "*");
  res.send(result)
});

routes.delete("/", async (req, res) => {
  const result = await clearLocationsDataBase();
  res.send(result);
});

routes.delete("/:location_id", async (req, res) => {
  const { location_id } = req.params;
  const result = await destroyLocation({ location_id });
  res.send(result);
});

export default routes
