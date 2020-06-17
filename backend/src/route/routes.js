const routes = require("express").Router();

routes.get("/", (req, res) => {
  res.send("Ola Mundo Git");
});

module.exports = routes;
