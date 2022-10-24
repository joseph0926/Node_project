const express = require("express");

const sequelize = require("./util/database");

const app = express();

app.set("view engine", "ejs");

sequelize
  .sync()
  .then((result) => {
    console.log("서버 연결 성공!");
    app.listen(3000);
  })
  .catch((err) => console.log(err));
