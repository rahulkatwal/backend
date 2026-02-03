const mongoose = require('mongoose');
// create schema for notes
const noteSchema = new mongoose.Schema({
    title: String,
    discription: String,
})

// create model using mongoose models
const noteModel = mongoose.model("notes", noteSchema);