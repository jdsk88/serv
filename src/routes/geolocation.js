import express from "express";
import { data } from "../../data/places.js";
import {
  getGeoLocation, getGeoLocations,
  addGeoLocation, updateGeoLocation, destroyGeoLocation,
  clearGeoLocationsDataBase
} from "../services/geolocation.js";
const routes = express.Router({});

routes.get("/", async (req, res) => {
  const result = await getGeoLocations(
    // {
    //   name: req.query.name,
    //   limit: parseInt(req.query.limit),
    //   page: parseInt(req.query.page),
    // }
  );
  res.header("Access-Control-Allow-Origin", "*");
  res.send(result);
});
routes.get("/import", async (req, res) => {
     for (var item in data) {
      const result = 
        {
          ID: data[item].ID,
          Name: data[item].Name,
          Active: data[item].Active,
          Tags: data[item].Tags,
          Territory: data[item].Territory,
          Representative_ID: data[item].Representative_ID,
          Representative_name: data[item].Representative_name,
          Time_of_last_activity: data[item].Time_of_last_activity,
          Street_Address: data[item].Street_Address,
          ZIP: data[item].ZIP,
          ZIP_ext: data[item].ZIP_ext,
          City: data[item].City,
          State: data[item].State,
          Country: data[item].Country,
          Country_code: data[item].Country_code,
          Email: data[item].Email,
          Phone: data[item].Phone,
          Mobile: data[item].Mobile,
          Website: data[item].Website,
          Contact_name: data[item].Contact_name,
          Contact_title: data[item].Contact_title,
          Note: data[item].Note,
          Status: data[item].Status,
          latitude: data[item].latitude,
          longitude: data[item].longitude
        }
        await addGeoLocation(result)
    }
  res.header("Access-Control-Allow-Origin", "*");
  res.send(data);
});
routes.get("/places", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  // console.log(places)
  res.send(data);
});

routes.get("/:Geolocation_id", async (req, res) => {
  const { Geolocation_id } = req.params;
  const result = await getGeoLocation({ id: Geolocation_id });
  res.header("Access-Control-Allow-Origin", "*");
  res.send(result);
});

routes.post("/", async (req, res) => {
  const { ID, Name, Active, Tags, Territory, Representative_ID, Representative_name, Time_of_last_activity, Street_Address, ZIP, ZIP_ext, City, State, Country, Country_code, Email, Phone, Mobile, Website, Contact_name, Contact_title, Note, Status, latitude, longitude,
  } = req.body;
  const result = await addGeoLocation({
    ID, Name, Active, Tags, Territory, Representative_ID, Representative_name, Time_of_last_activity, Street_Address, ZIP, ZIP_ext, City, State, Country, Country_code, Email, Phone, Mobile, Website, Contact_name, Contact_title, Note, Status, latitude, longitude,
  });
  res.header("Access-Control-Allow-Origin", "*");
  res.send(result)
});


routes.put("/:Geolocation_id", async (req, res) => {
  const { Geolocation_id } = req.params
  const { ID, Name, Active, Tags, Territory, Representative_ID, Representative_name, Time_of_last_activity, Street_Address, ZIP, ZIP_ext, City, State, Country, Country_code, Email, Phone, Mobile, Website, Contact_name, Contact_title, Note, Status, latitude, longitude,
  } = req.body
  const result = await updateGeoLocation({
    id: Geolocation_id, ID, Name, Active, Tags, Territory, Representative_ID, Representative_name, Time_of_last_activity, Street_Address, ZIP, ZIP_ext, City, State, Country, Country_code, Email, Phone, Mobile, Website, Contact_name, Contact_title, Note, Status, latitude, longitude,


  });
  res.header("Access-Control-Allow-Origin", "*");
  res.send(result)
});

routes.patch("/:Geolocation_id", async (req, res) => {
  const { Geolocation_id } = req.params
  const { ID, Name, Active, Tags, Territory, Representative_ID, Representative_name, Time_of_last_activity, Street_Address, ZIP, ZIP_ext, City, State, Country, Country_code, Email, Phone, Mobile, Website, Contact_name, Contact_title, Note, Status, latitude, longitude,

  } = req.body

  const result = await updateGeoLocation({
    id: Geolocation_id, ID, Name, Active, Tags, Territory, Representative_ID, Representative_name, Time_of_last_activity, Street_Address, ZIP, ZIP_ext, City, State, Country, Country_code, Email, Phone, Mobile, Website, Contact_name, Contact_title, Note, Status, latitude, longitude,
  });
  res.header("Access-Control-Allow-Origin", "*");
  res.send(result)
});

routes.delete("/", async (req, res) => {
  const result = await clearGeoLocationsDataBase();
  res.send(result);
});

routes.delete("/:Geolocation_id", async (req, res) => {
  const { Geolocation_id } = req.params;
  const result = await destroyGeoLocation({ Geolocation_id });
  res.send(result);
});

export default routes
