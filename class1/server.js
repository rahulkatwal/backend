// this is used to start the server 
//  and also used for contect to the database

const app = require("./src/app");

// create a api 

app.get("/", (req, res)=>
{
   res.send("welcome to my server");
})

// listen to the server 

app.listen(3000, ()=>
{
    console.log("server is running on the port 3000");
    
})