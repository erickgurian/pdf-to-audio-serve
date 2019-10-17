const express = require("express");
const morgan = require("morgan");

class AppController {
  constructor() {
    this.express = express();
    this.middlewares();
    this.routes();
  }
  middlewares() {
    this.express.use(express.json());
    this.express.use(express.urlencoded({ extended: true }));
    this.express.use(morgan("dev"));
  }
  routes() {
    this.express.use(require("./routes"));
  }
}

module.exports = new AppController().express;
