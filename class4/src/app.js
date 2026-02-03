// create and config server
const express = require("express");
const app = express();
// require notemodels 
const noteModel = require("./models/notes.models")
// use middleware
app.use(express.json())

app.post("/notes", async (req,res) =>
{
    const{title, discription} = req.body

    // crate notes using create method
   const note = await noteModel.create({
        title, discription
    })

    // send respons using res method
    res.status(201).json({

        message:"note is created sucssefuly",
        note
    })
})
// export app using modules
module.exports = app;