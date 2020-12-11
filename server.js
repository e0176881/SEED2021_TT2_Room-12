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

app.post("/api/login", (req, res) => {
  axios
    .post(
      "https://u8fpqfk2d4.execute-api.ap-southeast-1.amazonaws.com/techtrek2020/login",
      {
        username: "Group12",
        password: "wuXznjuC4RADkOM",
      },
      {
        headers: {
          "x-api-key": "LOWUmvIAYg4sS1mrgJvxk6M1KHJbCQLs8T5SLyof",
        },
      }
    )
    .then((response) => response)
    .catch((error) => error.response)
    .then((response) => {
      try {
        res.status(response.status).send(response.data);
      } catch (e) {}
    });
});

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
