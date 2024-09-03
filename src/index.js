import express from  "express"
import dotenv   from "dotenv";
import dbConnect from "./db/db.js";
import  {app} from "./App.js" 
dotenv.config({
    path: './.env'
})
const port = process.env.PORT || 4000

app.listen(port ,()=>{
    dbConnect()
    console.log(`server run at this port ${port}`)
   
})



