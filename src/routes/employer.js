import e from "cors";
import express from "express";
import { Employer } from "../models/employers.js";
import {
  getEmployer, getEmployers,
  addEmployer, updateEmployer, destroyEmployer,
  clearEmployersDataBase
} from "../services/employers.js";

const routes = express.Router({});

routes.get("/", async (req, res) => {
  const result = await getEmployers(
    // {
    //   name: req.query.name,
    //   limit: parseInt(req.query.limit),
    //   page: parseInt(req.query.page),
    // }
    );
  res.header("Access-Control-Allow-Origin", "*");
  res.send(result);
});

routes.get("/:Employer_id", async (req, res) => {
  const { Employer_id } = req.params;
  const result = await getEmployer({ id: Employer_id });
  res.header("Access-Control-Allow-Origin", "*");
  res.send(result);
});

routes.post('/add', (req, res, next) => {
  let query = req.body.username;
  Employer.findOne({username:query}, function(err, employer){
      if(err) console.log(err);
      if ( employer){
          console.log("This empolyer has already been saved");
      } else {

          var employer = new Employer(req.body);
          employer.save(function(err, employer) {
              if(err) console.log(err);
              console.log("New employer profile created");
              res.redirect(`/api/employers`);
          });
      }
  });
});

routes.put("/:Employer_id", async (req, res) => {
  const { Employer_id } = req.params
  const { first_name,last_name,username,contact:{email,phone,address:{street,city,country}},contract: {start_date,end_date},signature,localizations: [localization_id,localization_name,localization_adress,localization_status,localization_contact,localization_contact_phone] } = req.body
  const result = await updateEmployer({
    id: Employer_id, first_name,last_name,username,contact:{email,phone,address:{street,city,country}},contract: {start_date,end_date},signature,localizations: [localization_id,localization_name,localization_adress,localization_status,localization_contact,localization_contact_phone]

  });
  res.header("Access-Control-Allow-Origin", "*");
  res.send(result)
});

routes.patch("/:Employer_id", async (req, res) => {
  const { Employer_id } = req.params
  const { first_name,last_name,username,contact:{email,phone,address:{street,city,country}},contract: {start_date,end_date},signature,localizations: [localization_id,localization_name,localization_adress,localization_status,localization_contact,localization_contact_phone]
  } = req.body

  const result = await updateEmployer({ id: Employer_id, first_name,last_name,username,contact:{email,phone,address:{street,city,country}},contract: {start_date,end_date},signature,localizations: [localization_id,localization_name,localization_adress,localization_status,localization_contact,localization_contact_phone] });
  res.header("Access-Control-Allow-Origin", "*");
  res.send(result)
});

routes.delete("/", async (req, res) => {
  const result = await clearEmployersDataBase();
  res.send(result);
});

routes.delete("/:Employer_id", async (req, res) => {
  const { Employer_id } = req.params;
  const result = await destroyEmployer({ Employer_id });
  res.send(result);
});

export default routes
