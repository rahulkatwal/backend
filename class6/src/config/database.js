// require mongoose
const mongoose = require("mongoose");
// create function connectToDb to connect database
function connectToDb() {
  mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log("Database connected");
  });
}

// export database
module.exports = connectToDb;
