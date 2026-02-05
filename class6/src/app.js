// require express packaages
const express = require("express");
// require userModels
const userModels = require("./models/user.models");
const app = express();

app.use(express.json());


// calling API 


module.exports = app;
