const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
// Define schema
const CreatorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
    },
    bio: {
      type: String,
      default: "",
    },    isApproved: {   // ✅ New field for approval
      type: Boolean,
      default: false,
    },
    isAdmin: { type: Boolean, default: false },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { collection: "creators" } 
);
CreatorSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// ✅ Method to compare passwords during login
CreatorSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

module.exports= mongoose.models.Creator || mongoose.model("Creator", CreatorSchema);
