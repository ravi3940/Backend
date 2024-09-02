import express from  "express";
import dotenv  from "dotenv";
dotenv.config({})
const app   = express();

const Port =process.env.PORT || 4000 ;
app.get("/" ,(req,res) => {
     
})
app.listen(4000,(req , res)=>{

    console.log(`server run at the port  ${Port}`)
})