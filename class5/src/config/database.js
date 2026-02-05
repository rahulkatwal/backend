// require mongoose
const mongoose = require("mongoose")
// create function connectToDb with the help of mongoose
function connectToDb() {
    mongoose.connect("mongodb+srv://katwal:UC8JQXVU0Wu29k8N@cohort-test.gge3m9q.mongodb.net/")
    .then(()=>{
        console.log("database is connected");
        
    })
}

// export database with the help of module
module.exports = connectToDb;