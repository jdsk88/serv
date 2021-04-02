import express from "express";
import {data} from "../../data/places.js";
import { Location } from "../models/locations.js";
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
  const { name,type,address:{street,city,country,cords:{longitude,latitude}},contact:{first_name,last_name,email,phone},invoice_data:{nip,full_name,short_name,adress}
 } = req.body;
  const result = await addLocation({ name,type,address:{street,city,country,cords:{longitude,latitude}},contact:{first_name,last_name,email,phone},invoice_data:{nip,full_name,short_name,adress}
 });
  res.header("Access-Control-Allow-Origin", "*");
  res.send(result)
});

routes.post('/add', (req, res, next) => {
  let query = req.body.name;
  Location.findOne({name:query}, function(err, location){
      if(err) console.log(err);
      if ( location){
          console.log("This location has already been saved");
      } else {

          var location = new Location(req.body);
          location.save(function(err, location) {
              if(err) console.log(err);
              console.log("New location profile created");
              res.redirect(`/api/locations`);
          });
      }
  });
});


routes.put("/:location_id", async (req, res) => {
  const { location_id } = req.params
  const { name,type,address:{street,city,country,cords:{longitude,latitude}},contact:{first_name,last_name,email,phone},invoice_data:{nip,full_name,short_name,adress}
 } = req.body
  const result = await updateLocation({
    id: location_id, name,type,address:{street,city,country,cords:{longitude,latitude}},contact:{first_name,last_name,email,phone},invoice_data:{nip,full_name,short_name,adress}


  });
  res.header("Access-Control-Allow-Origin", "*");
  res.send(result)
});

routes.patch("/:location_id", async (req, res) => {
  const { location_id } = req.params
  const { name,type,address:{street,city,country,cords:{longitude,latitude}},contact:{first_name,last_name,email,phone},invoice_data:{nip,full_name,short_name,adress}

  } = req.body

  const result = await updateLocation({ id: location_id, name,type,address:{street,city,country,cords:{longitude,latitude}},contact:{first_name,last_name,email,phone},invoice_data:{nip,full_name,short_name,adress}
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
