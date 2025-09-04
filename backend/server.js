const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const authRoutes = require("./src/routes/authRoutes");
const workRoutes=require("./src/routes/workRoutes");
//const password = "utkarshOwner"; // choose your admin password
const adminRoutes =require("./src/routes/adminRoutes");
const publicRoutes = require("./src/routes/publicRoutes");
dotenv.config();
const app = express();

// middlewares
app.use(cors());
app.use(express.json());

// ✅ mount routes
app.use("/api/auth", authRoutes);
app.use("/api/works",workRoutes);

app.use("/api/public", publicRoutes);

app.use("/api/admin", adminRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");
    app.listen(process.env.PORT || 5000, () =>
      console.log(`Server running on port ${process.env.PORT || 5000}`)
    );
  })
  .catch((err) => console.error(err));
