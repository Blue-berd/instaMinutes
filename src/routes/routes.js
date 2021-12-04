const express = require("express");

const router = express.Router();
const path = require("path");
const {storeEvents, alertUser} = require("../controller")

router.post("/event", storeEvents);

router.get("/event",alertUser)

module.exports = router;
