import express from "express";
import { data } from "../../data/places.js";
import { Location } from "../models/locations.js";
import {
  getLocation, getLocations,
  addLocation, updateLocation, destroyLocation,
  clearLocationsDataBase
} from "../services/locations.js";


const routes = express.Router({});

routes.get("/", async (req, res) => {
  const result = await getLocations(
    {
      name: req.query.name,
      limit: parseInt(req.query.limit),
      page: parseInt(req.query.page),
    }
  );
  res.header("Access-Control-Allow-Origin", "*");
  res.send(result);
});

routes.get("/import", async (req, res) => {
  for (var item in data) {
    const Name = data[item].Name
    const Active = data[item].Active
    const Tags = data[item].Tags
    const Territory = data[item].Territory
    const Representative_ID = data[item].Representative_ID
    const Representative_name = data[item].Representative_name
    const Time_of_last_activity = data[item].Time_of_last_activity
    const Street_Address = data[item].Street_Address
    const ZIP_ext = data[item].ZIP_ext
    const City = data[item].City
    const Country = data[item].Country
    const Country_code = data[item].Country_code
    const Phone = data[item].Phone
    const Mobile = data[item].Mobile
    const Website = data[item].Website
    const Contact_name = data[item].Contact_name
    const Contact_title = data[item].Contact_title
    const Note = data[item].Note
    const Status = data[item].Status
    const latitude = data[item].latitude
    const longitude = data[item].longitude
    await addLocation({
      Name,
      Active,
      Tags,
      Territory,
      Representative_ID,
      Representative_name,
      Time_of_last_activity,
      Street_Address,
      ZIP_ext,
      City,
      Country,
      Country_code,
      Phone,
      Mobile,
      Website,
      Contact_name,
      Contact_title,
      Note,
      Status,
      latitude,
      longitude,
    });
  }

  res.header("Access-Control-Allow-Origin", "*");
  res.send(data)
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
  const { name, type, address: { street, city, country, cords: { longitude, latitude } }, contact: { first_name, last_name, email, phone }, invoice_data: { nip, full_name, short_name, adress }
  } = req.body;
  const result = await addLocation({
    name, type, address: { street, city, country, cords: { longitude, latitude } }, contact: { first_name, last_name, email, phone }, invoice_data: { nip, full_name, short_name, adress }
  });
  res.header("Access-Control-Allow-Origin", "*");
  res.send(result)
});

routes.post('/add', (req, res, next) => {
  let query = req.body.name;
  Location.findOne({ name: query }, function (err, location) {
    if (err) console.log(err);
    if (location) {
      console.log("This location has already been saved");
    } else {

      var location = new Location(req.body);
      location.save(function (err, location) {
        if (err) console.log(err);
        console.log("New location profile created");
        res.redirect(`/api/locations`);
      });
    }
  });
});


routes.put("/:location_id", async (req, res) => {
  const { location_id } = req.params
  const { name, type, address: { street, city, country, cords: { longitude, latitude } }, contact: { first_name, last_name, email, phone }, invoice_data: { nip, full_name, short_name, adress }
  } = req.body
  const result = await updateLocation({
    id: location_id, name, type, address: { street, city, country, cords: { longitude, latitude } }, contact: { first_name, last_name, email, phone }, invoice_data: { nip, full_name, short_name, adress }


  });
  res.header("Access-Control-Allow-Origin", "*");
  res.send(result)
});

routes.patch("/:location_id", async (req, res) => {
  const { location_id } = req.params
  const { name, type, address: { street, city, country, cords: { longitude, latitude } }, contact: { first_name, last_name, email, phone }, invoice_data: { nip, full_name, short_name, adress }

  } = req.body

  const result = await updateLocation({
    id: location_id, name, type, address: { street, city, country, cords: { longitude, latitude } }, contact: { first_name, last_name, email, phone }, invoice_data: { nip, full_name, short_name, adress }
  });
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
