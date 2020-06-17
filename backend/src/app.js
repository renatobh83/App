const express = require("express");
const cors = require("cors");

class AppController {
  constructor() {
    this.express = express();
    this.middleware();
    this.router();
  }
  middleware() {
    this.express.use(express.json());
    this.express.use(cors());
  }
  router() {
    this.express.use(require("./route/routes"));
  }
}

module.exports = new AppController().express;
