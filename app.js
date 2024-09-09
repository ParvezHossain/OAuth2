const express = require("express");
const mongoose = require("mongoose");
const authRoutes = require("./routes/authRoutes");

const app = express();

// Database Connection

mongoose.connect("mongodb://localhost/my-oauth2-app", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.json());

// Register routes
app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
