// run server and connect database
const app = require("./src/app");
// require dotenv file
require("dotenv").config();
// require databse
const connectToDb = require("./src/config/database");
// connect the database
connectToDb();
// runn server on port 3000
app.listen(3000, () => {
  console.log("server is running");
});
