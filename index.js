import express from "express";
import "./config/mongo.js";
import "./config/passport.js";
import routes from "./src/routes/index.js";
import bodyParser from "body-parser";
import cors from 'cors';
import errorhandler from "errorhandler";
import morgan from "morgan";
import session from "express-session";
import passport from "passport";
import fs from 'fs';
import https from 'https';


const app = express();

app.use(errorhandler());
app.use("*", cors());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", `http://${HOST}:${PORT}`);
  res.setHeader("Content-Type", "application/json");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] ":referrer" ":user-agent"'));

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: true,
    cookie: { secure: false, sameSite: "none", httpOnly: false ,maxAge:150000},
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("iSter Smart Server!");
});

app.use("/api/", routes);
const PORT = process.env.PORT;
const HOST = process.env.HOST;
const PORT2 = process.env.PORT2;
const HOST2 = process.env.HOST2;



// app.listen(PORT, HOST, () => {
//   console.log(`Listening on http://${HOST}:${PORT}/`);
// });
// app.listen(PORT2, HOST2, () => {
//   console.log(`Listening on http://${HOST2}:${PORT2}/`);
// });

var httpsServer = https.createServer({
  key: fs.readFileSync('./key.pem'),
  cert: fs.readFileSync('./cert.pem'),
  
  passphrase: 'admin'
}, app)
httpsServer.listen(process.env.PORT3);

export default routes;
