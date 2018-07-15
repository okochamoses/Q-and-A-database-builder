const express = require("express");

const app = express();

// define express middleware
app.use(express.static(__dirname + "public"));

app.get("/", (req, res) => {
  res.send("Hello World!!!");
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
