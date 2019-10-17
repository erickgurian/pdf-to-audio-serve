const router = require("express").Router();
const SessionController = require("../app/controller/SessionController");

router.post("/sessions", SessionController.store);

router.post("/logout", SessionController.logout);

module.exports = router;
