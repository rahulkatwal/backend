// create server
const express = require("express");
// require usermodels
const userModel = require("./models/user.models");
const app = express();
// user middle ware
app.use(express.json());

// create Api for userregistration
app.post("/registration", (req, res) => {
  const { user, email, password } = req.body;
  //   create user registration with the help of userModel
  const registration = userModel.create({ user, email, password });
  // send response to the server using res method

  res.status(201).json({
    message: "user is created",
    registration,
  });
});

// export app modules
module.exports = app;
