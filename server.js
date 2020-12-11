const express = require("express");
const fetch = require("node-fetch");
const path = require("path");
const multer = require("multer");
const FormData = require("form-data");
const upload = multer();
const app = express();
const bodyParser = require("body-parser");
port = 8080;

const axios = require("axios");

if (process.env.NODE_ENV != "dev") {
  app.use(express.static(path.join(__dirname, "/build")));
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/zz", (req, res) => {
  console.log("api/users called!!!!");
  res.send("ok");
});

if (process.env.NODE_ENV != "dev") {
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname + "/build/index.html"));
  });
}

app.listen(port, () => {
  console.log(`Server listening on the port::${port}`);
});
