// adminMiddleware.js
const Creator = require("../models/creator");

const adminMiddleware = async (req, res, next) => {
  try {
    // req.user comes from authMiddleware (decoded.id)
    const user = await Creator.findById(req.user);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    if (!user.isAdmin) {
      return res.status(403).json({ message: "Access denied. Admin only." });
    }

    next();
  } catch (error) {
    res.status(500).json({ message: "Server error: " + error.message });
  }
};

module.exports = adminMiddleware;
