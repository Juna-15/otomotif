const express = require("express");
const router = express.Router();
const carController = require("../controllers/carcontroller");

router.get("/", carController.Index);

router.get("/:id", carController.GetById);

module.exports = router;