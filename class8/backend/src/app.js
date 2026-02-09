// create server and also config it
// require express
const express = require("express");
const app = express();
// require notemodels
const notesModel = require("./models/notes.models");
// user middleware
app.use(express.json());

// create apis here
app.post("/usernotes", async (req, res) => {
  const { title, discription } = req.body;
  const usernotes = await notesModel.create({ title, discription });

  //   send respons
  res.status(201).json({
    message: "notes is created successfuly",
    usernotes,
  });
});

// get api
app.get("/usernotes", async (req, res) => {
  try {
    const usernotes = await notesModel.find();

    res.status(200).json({
      message: "Notes fetched successfully",
      usernotes,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
});
// export module
module.exports = app;
