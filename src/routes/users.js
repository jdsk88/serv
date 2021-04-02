import express from "express";
import {
  registerUser,
  findUsers,
  logInUser,
  findUser,
  deleteUsers,
} from "../services/users.js";
import passport from "passport";

const users = express.Router({});

users.get("/", async (req, res) => {
  const { limit, page } = req.query;
  const result = await findUsers({ limit, page });
  res.header("Access-Control-Allow-Origin", "*");

  res.send(result);
});
users.delete("/", async (req, res) => {
  const result = await deleteUsers();
  res.send(result);
});

users.get("/me", async (req, res) => {
  // console.log(req.user)
  if (req.user) {
  // res.header("Access-Control-Allow-Origin", "*");
  res.send(await findUser({ id: req.user.id}));
  console.log(`user logged in: ${req.user.username} and id: ${req.user.id}`)
  }else{
  res.header("Access-Control-Allow-Origin", "*");
  res.send({error:'Not Logged in'})
  console.log(`user not logged in`)
  }
});

users.post("/register", async (req, res) => {
  try {
    const userData = req.body;
    const result = await registerUser({ user: userData });
    res.send(result);
  } catch (e) {
    res.send({ error: e.message });
  }
});

// => config/passport.js
users.post("/login", passport.authenticate("local"), function (req, res) {
  // If this function gets called, authentication was successful.
  // `req.user` contains the authenticated user.
  console.log(req.body)
  res.header("Access-Control-Allow-Origin", "*");
  res.redirect("/api/users/me"); // + req.user.username);
});

users.post("/confirmEmail", (req, res) => {
  res.send(["user 1"]);
});

users.post("/resetPassword", (req, res) => {
  res.send(["user 1"]);
});

users.get("/:user_id", (req, res) => {
    res.send(findUser({ id: req.user.id }));
});

users.put("/:user_id", (req, res) => {
  res.send(["user 1"]);
});

export default users;
