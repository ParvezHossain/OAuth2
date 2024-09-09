const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: String,
  name: String,
  oauthProvider: String,
  oauthId: String,
});

module.exports = mongoose.model("User", userSchema);
