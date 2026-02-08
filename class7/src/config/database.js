// connecting with database
const mongoose = require("mongoose");
// create a function with name connectToDb
function connectToDb() {
  mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log("databse is connected");
  });
}

// export connectToDb function
module.exports = connectToDb;
