// require mongoose and create schema with the help of mongoose
const mongoose = require("mongoose");
// create schema with the help of mongoose
const userSchema = new mongoose.Schema({ title: String, discription: String });
// create user model
const noteModel = mongoose.model("user", userSchema);
// export notemodel with the help of module
module.exports = noteModel;
