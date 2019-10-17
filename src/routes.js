const router = require("express").Router();
const authMiddleware = require("./app/middleware/auth");
const routeNotFound = require("./app/middleware/routeNotFound");

router.get("/test", (req, res) => res.json({ api: "active" }));

router.use("/", require("./routes/login"));

router.use(authMiddleware);

router.get("/dashboard", (req, res) => {
  return res.status(200).send();
});

router.use("/itens", require("./routes/item"));

router.use(routeNotFound);

module.exports = router;
