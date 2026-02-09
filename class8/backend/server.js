// connect database and run server
// export express server
const app = require("./src/app");
const connectToDb = require("./src/config/database");
// requrie dotenv
require("dotenv").config();
// connect with data base
connectToDb();
// run server on port 3000
app.listen(3000, () => {
  console.log("server is running");
});
