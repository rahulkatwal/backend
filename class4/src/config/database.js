const mongoose = require("mongoose")
// create a funtion with name connectToDb and connect the database
function connectToDb()
{
    // connect the database with the help of mongoose packegs
    mongoose.connect("mongodb+srv://katwal:saTFPHet0b8AXcUv@cohort-test.gge3m9q.mongodb.net/")
    .then(()=>
    {
        console.log("database is connect");
        
    })
}

// exprot database
module.exports = connectToDb