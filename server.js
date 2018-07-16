const express = require("express");
const bodyParser = require("body-parser");
const hbs = require("hbs");
const mongoose = require("mongoose");

const routes = require("./routes");

const app = express();

// Register partials
hbs.registerPartials(__dirname + "views/partials");

// define express middleware
app.use(express.static(__dirname + "public"));

// body-parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Database configuration
const db = require("./config/keys").mongoURI;

//Connect to database
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => {
    console.log(`Mongoose connected to MongoDB successfully`);
  })
  .catch(err => {
    console.log(`Error connecting to database: ${err}`);
  });

app.use("/", routes);

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
