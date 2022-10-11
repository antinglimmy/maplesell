const express = require("express");
const router = express.Router();

class UsersRouter {
  constructor(controller) {
    this.controller = controller;
  }
  routes() {
    // we will insert routes into here later on
    router.get("/", this.controller.getAll.bind(this.controller));
    router.get("/:buyerId", this.controller.getInventory.bind(this.controller));
    return router;
  }
}

module.exports = UsersRouter;
