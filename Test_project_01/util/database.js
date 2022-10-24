const Sequelize = require("sequelize");

const sequelize = new Sequelize("node-test01", "root", "chlrkdgml77!", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
