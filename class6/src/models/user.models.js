// require mongoose
const mongoose = require("mongoose");
// Create user create schema
const userSchema = new mongoose.Schema({
  user: String,
  email: {
    type: String,
    unique: true,
  },
  passowrd: String,
});

// create user models
const userModel = mongoose.model("user", userSchema);
module.exports = userModel;
