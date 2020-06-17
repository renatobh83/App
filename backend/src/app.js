const express = require("express");
const cors = require("cors");

class AppController {
  constructor() {
    this.express = express();
  }
  middleware() {
    this.express.use(express.json());
    this.express.use(cors());
  }
}

module.exports = new AppController().express;
