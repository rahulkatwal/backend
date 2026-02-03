// this is used to runn and contect the server 
const app = require("./src/app");
// require connectToDb
const connectToDb = require("./src/config/database")
// require mongoose
const mongoose = require("mongoose");



// call connectToDb funtion
connectToDb()
// run server on port 3000
app.listen(3000,()=>
{
    console.log("server is running");
    
})