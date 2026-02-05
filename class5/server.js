// runn server and connect with database
const app = require("./src/app");
// require mongoose packages
const mongoose = require("mongoose");

// require database
const connectToDb = require("./src/config/database");
// call function connectToDb
connectToDb();

// run on port 3000
app.listen(3000, () => {
  console.log("server is running on prot 3000");
});
