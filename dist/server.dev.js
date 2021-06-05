"use strict";

var express = require("express");

var cors = require("cors");

var app = express();
app.use(cors());
app.use("/signin", function (req, res) {
  res.send({
    token: "test123"
  });
});
app.listen(3000, function () {
  return console.log("API is running on http://localhost:3000/signin");
});