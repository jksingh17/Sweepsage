const express = require("express");
const router = express.Router();
const {
  createWork,
  getMyWorks,
  updateWork,
  deleteWork,
} = require("../controllers/workController");
const authMiddleware = require("../middleware/authMiddleware");

// Creator Work Routes
router.post("/", authMiddleware, createWork);   // Create new work
router.get("/my", authMiddleware, getMyWorks);  // Get logged-in creator works
router.put("/:id", authMiddleware, updateWork); // Update work
router.delete("/:id", authMiddleware, deleteWork); // Delete work

module.exports = router;
