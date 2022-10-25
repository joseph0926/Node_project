const express = require("express");

const sequelize = require("./util/database");

const app = express();
const User = require("./models/user");

app.set("view engine", "ejs");

const errorController = require("./controller/404");

app.use(errorController.getError);

sequelize
  .sync()
  .then((result) => {
    return User.findByPk(1);
  })
  .then((user) => {
    if (!user) {
      return User.create({
        name: "Dummy",
        email: "test01@test.com",
      });
    }
    return Promise.resolve(user);
  })
  .then((result) => {
    console.log("서버 연결 성공!");
    app.listen(3000);
  })
  .catch((err) => console.log(err));
