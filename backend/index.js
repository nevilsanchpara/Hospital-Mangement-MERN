require("dotenv").config();
const express = require("express");
const app = express();
const route = require("./routes/router");
const db = require("./config/db.config");
const path = require("path");
const { port, messages } = require("./constant/index.constant");
const { publicEncrypt } = require("crypto");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "uploads")));

route(app);
db();

app.listen(port.server || 3002, () => {
  console.log(messages.welive);
});
