// require mongoose packages
const mongoose = require("mongoose");
// create function with name connectToDb
function connectToDb() {
  // connect with databse
  mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log("database is connect successfuly");
  });
}

// export connectToDb function
module.exports = connectToDb;
