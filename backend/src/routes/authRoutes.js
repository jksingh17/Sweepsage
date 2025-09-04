const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Creator = require("../models/creator");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

/**
 * @route   POST /api/creators/register
 * @desc    Register a new creator
 * @access  Public
 */
router.post("/register", async (req, res) => {
  try {
    let { name, email, password, bio } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ message: "Please fill all required fields" });
    }

    // Normalize email
    email = email.trim().toLowerCase();

    // Check if creator already exists
    const existingCreator = await Creator.findOne({ email });
    if (existingCreator) {
      return res.status(400).json({ message: "Email already registered" });
    }

    // Hash password
   // const hashedPassword = await bcrypt.hash(password, 10);

    // Create new creator
    const creator = new Creator({
      name,
      email,
      password,
      bio: bio || "",
    });

    await creator.save();

    // Generate token for auto-login
    const token = jwt.sign({ id: creator._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    res.status(201).json({
      message: "Creator registered successfully",
      token,
      creator: {
        id: creator._id,
        name: creator.name,
        email: creator.email,
        bio: creator.bio,
      },
    });
  } catch (error) {
    console.error("Register error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

/**
 * @route   POST /api/auth/login
 * @desc    Login creator & get token
 * @access  Public
 */


router.post("/login", async (req, res) => {
  try {
    let { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Email and password are required" });
    }

    // Normalize email
    email = email.trim().toLowerCase();

    const creator = await Creator.findOne({ email });
   
    if (!creator) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    // Compare hashed password with plain password
    const isMatch = await bcrypt.compare(password, creator.password);
    
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    // Generate JWT
    const token = jwt.sign(
      { id: creator._id },
      process.env.JWT_SECRET || "default_secret", // fallback for dev
      { expiresIn: "7d" }
    );

    // Send response
    res.status(200).json({
      message: "Login successful",
      token,
      creator: {
        id: creator._id,
        name: creator.name,
        email: creator.email,
        bio: creator.bio,
        createdAt: creator.createdAt,
      },
    });
  } catch (error) {
    console.error("Login error:", error.message);
    res.status(500).json({ message: "Server error" });
  }
});


/**
 * @route   GET /api/creators/profile
 * @desc    Get logged-in creator profile
 * @access  Private
 */
router.get("/profile", authMiddleware, async (req, res) => {
  try {
    const creator = await Creator.findById(req.user).select("-password");
    if (!creator) {
      return res.status(404).json({ message: "Creator not found" });
    }
    res.json(creator);
  } catch (error) {
    console.error("Profile error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
