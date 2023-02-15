const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res, next) => {
  res.send({ message: "Welcome to the application." });
});

module.exports = app;
