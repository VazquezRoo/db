const { Sequelize } = require("sequelize");

const db = new Sequelize({
  dialect: "postgres",
  host: "localhost",
  username: "postgres",
  password: "password",
  database: "bicleshop",
  logging: false,
});

module.exports = { db };
