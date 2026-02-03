// this is use to run the server 
// and also use to connect the database

const app = require('./src/app');

// require mongoose
const mongoose = require('mongoose');

// create a function connectToDb and connect databse
function connectToDb(){
    mongoose.connect('mongodb+srv://katwalthakur80_db_user:H64IsNXu6bqUrhI0@cluster0.k10wcfz.mongodb.net/class-3')
    .then(()=>
    {
        console.log("connect to database");
        
    })
}

// call connecttodb
connectToDb()

// run the server on port 3000
app.listen(3000,()=>
{
    console.log("run the server over port 3000");
    
})