const express = require("express");
const { addEvent, getEvents } = require("../controllers/schedulerController");
const router = express.Router();
router.post("/addEvent", addEvent);
router.get("/getEvents", getEvents);

module.exports = router;
