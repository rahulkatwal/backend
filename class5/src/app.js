// create server and als config
const express = require("express");
const app = express();
// require note models
const noteModel = require("./models/notes.models");
// use middleware
app.use = express.json();

// create api using postman to test
app.post("/notes", async (req, res) => {
  const { title, description } = req.body;
  // create notes using create methods
  const note = await noteModel.create({
    title,
    description,
  });

  // send respons using res method
  res.status(201).json({
    message: "note is created successfuly",
    note,
  });
});

// exprot app module
module.exports = app;
