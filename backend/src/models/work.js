const mongoose = require("mongoose");

const WorkSchema = new mongoose.Schema(
  {
    creator: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Creator", // reference Creator schema
      required: true,
    },
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      default: "",
    },
    photos: [
      {
        type: String, // URL of uploaded photos
      },
    ],
    portfolioLinks: [
      {
        platform: { type: String, trim: true }, // e.g., "Behance", "Dribbble"
        url: { type: String, trim: true },
      },
    ],
    socialMedia: [
      {
        platform: { type: String, trim: true }, // e.g., "Instagram", "Twitter"
        url: { type: String, trim: true },
      },
    ],
    status: {
      type: String,
      enum: ["pending", "approved", "rejected"],
      default: "pending",
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { collection: "works" }
);

module.exports = mongoose.models.Work || mongoose.model("Work", WorkSchema);
