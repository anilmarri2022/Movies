var express = require("express");
var connectDB = require("./db");
require("dotenv").config();
var app = express();

app.get("/hello", (req, res) => {
  res.send("");
});

connectDB();
app.listen(process.env.PORT, () =>
  console.log("connected to server port 5000")
);
