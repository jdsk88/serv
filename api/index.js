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
import path from 'path';
const __dirname = path.resolve();
const corsOptions ={
  origin:'*', 
  credentials:true,            //access-control-allow-credentials:true
  optionSuccessStatus:200
}

const app = express();
app.use(errorhandler());
app.use(cors(corsOptions));
app.use(express.static(path.join(__dirname,"..","front")))
app.use('/api',function (req, res, next) {
  res.header("Access-Control-Allow-Origin", `https://localhost:3000/`);
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
app.use('/api',passport.initialize());
app.use('/api',passport.session());
app.use('/api',express.json());




app.use("/api/", routes);
const PORT = process.env.PORT;
const HOST = process.env.HOST;
const PORT2 = process.env.PORT2;
const HOST2 = process.env.HOST2;

var httpsServer = https.createServer({
  key: fs.readFileSync('./.cert/ister.pl+5-key.pem'),
  cert: fs.readFileSync('./.cert/ister.pl+5.pem'),
  
  passphrase: 'admin'
}, app)
httpsServer.listen(process.env.PORT2);
  console.log(`Listening on https://${HOST}:${PORT2}/`);

export default routes;
