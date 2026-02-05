// require mongoose packages
const mongoose = require("mongoose");
// create schema
const noteSchema = new mongoose.Schema({
  title: String,
  description: String,
});

// create models using mongoose models
const noteModel = mongoose.model("notes", noteSchema);
