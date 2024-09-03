import express from  "express"
import dotenv   from "dotenv";
import dbConnect from "./db/db.js";
const app = express();
dotenv.config();
const port = process.env.PORT || 4000
app.get("/",(req , res) => {
    res.send("this is Home Page")
})



app.listen(port ,()=>{
    console.log(`server run at this port ${port}`)
    dbConnect()
})



