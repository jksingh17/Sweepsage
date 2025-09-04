const express = require("express");
const authMiddleware  = require("../middleware/authMiddleware");
const adminMiddleware =require("../middleware/adminMiddleware");
const Work = require("../models/work");
const Creator = require("../models/creator");

const router = express.Router();

/**
 * ✅ Get all works with creator details
 * Owner (admin) only
 */
router.get("/works", authMiddleware, adminMiddleware, async (req, res) => {
  try {
    const works = await Work.find()
      .populate("creator", "name email bio createdAt") // populate creator info
      .sort({ createdAt: -1 }); // newest first
    res.json(works);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch works", error: error.message });
  }
});

/**
 * ✅ Approve a work
 */
router.put("/works/:id/approve", authMiddleware, adminMiddleware, async (req, res) => {
  try {
    const work = await Work.findById(req.params.id);
    if (!work) {
      return res.status(404).json({ message: "Work not found" });
    }

    if (work.isApproved) {
      return res.status(400).json({ message: "Work already approved" });
    }

    work.isApproved = true;
    await work.save();

    res.json({ message: "Work approved successfully", work });
  } catch (error) {
    res.status(500).json({ message: "Failed to approve work", error: error.message });
  }
});

/**
 * ✅ Delete a work
 */
router.delete("/works/:id", authMiddleware, adminMiddleware, async (req, res) => {
  try {
    const work = await Work.findById(req.params.id);
    if (!work) {
      return res.status(404).json({ message: "Work not found" });
    }

    await work.deleteOne();
    res.json({ message: "Work deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete work", error: error.message });
  }
});

/**
 * ✅ Get all creators (Owner view)
 */
router.get("/creators", authMiddleware, adminMiddleware, async (req, res) => {
  try {
    const creators = await Creator.find().select("-password"); // don’t return password
    res.json(creators);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch creators", error: error.message });
  }
});

/**
 * ✅ Delete a creator (and their works)
 */
router.delete("/creators/:id", authMiddleware, adminMiddleware, async (req, res) => {
  try {
    const creator = await Creator.findById(req.params.id);
    if (!creator) {
      return res.status(404).json({ message: "Creator not found" });
    }

    // delete all works of that creator
    await Work.deleteMany({ creator: creator._id });
    await creator.deleteOne();

    res.json({ message: "Creator and their works deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete creator", error: error.message });
  }
});

module.exports = router;
