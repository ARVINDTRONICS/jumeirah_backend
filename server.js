const express = require("express");
const path = require("path");
const app = express();
const bodyParser = require("body-parser");

global.__basedir = __dirname;

app.set("port", 3002);
// Serve static files from the React app
app.use(express.static(path.join(__dirname, "client/build")));

//Header and core
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Methods",
    "GET,HEAD,OPTIONS,POST,PUT,DELETE"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  next();
});

//body-parser configuration
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

const login = require("./routes/login/loginController");
app.post("/login", login);

const getRestaurantDetails = require("./routes/details/restaurantController");
app.get("/getRestaurantDetails", getRestaurantDetails);

app.get("/", function (req, res) {
  res.send("Hello World!");
});

app.listen(3002, function () {
  console.log("Example app listening on port 3002!");
});
