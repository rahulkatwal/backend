// require mongoose
const mongoose = require("mongoose");
// create user schema with the help of mongoose schema
const userSchema = new mongoose.Schema({
  user: String,
  email: String,
  password: String,
});
// create user models with help of mongoose models
const userModel = mongoose.model("user", userSchema);
// export user modules
module.exports = userModel;
