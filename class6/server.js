const app = require("./src/app");
// requrie dotenv
require("dotenv").config();
// require connectToDb function
const connectToDb = require("./src/config/database");
connectToDb();

app.listen(3000, () => {
  console.log("server is running");
});
