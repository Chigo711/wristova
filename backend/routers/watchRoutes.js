const express = require("express");
const watchController = require("../controllers/watchController");

const router = express.Router();

router.route("/").get(watchController.getAllWatches);

module.exports = router;
