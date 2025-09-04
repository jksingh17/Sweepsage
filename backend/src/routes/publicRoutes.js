// routes/publicRoutes.js
const express = require("express");
const { getApprovedCreatorsPublic } = require("../controllers/publicController");

const router = express.Router();

// Public route: Get all approved creators + their works
router.get("/approved-creators", getApprovedCreatorsPublic);

module.exports = router;
