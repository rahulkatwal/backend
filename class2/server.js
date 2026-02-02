// this is user to start the server 
// and also for connecting to the database
const app = require("./src/app");


// ceate notes api 

// create a empty array and save it in notes variable
const notes = [];

// use post method to create notes api
app.post("/notes", (req,res)=>
{
    console.log(req.body);
    // push the req.body to notes array
    res.send('notes created successfully');
})



// listening to the server using port 3000

app.listen(3000,()=>
{
    console.log("server is running on the port 3000");
    
})