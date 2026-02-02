// this is use to ceate a sever
const express = require("express");

// this is use to save express in app variable
const app = express();

app.use(express.json());

// exproting app module
module.exports = app;