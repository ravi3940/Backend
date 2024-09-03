import express from  "express";
import dotenv  from "dotenv";
import cors from "cors"

const app=express();
  dotenv.config()

const Port =process.env.PORT || 3000;


const corsOptions = {
    origin : "https:://localhost:5173"
}
// app.use(cors(corsOptions));
app.get("/" ,(req,res) => {
    res.send("Server is ready") ;
     
})

app.get("/api/jokes" ,(req,res)=> {
    const jokes =[
        {
            "id": 1,
            "title": "Why don't scientists trust atoms?",
            "content": "Because they make up everything!"
        },
        {
            "id": 2,
            "title": "How do you organize a space party?",
            "content": "You planet!"
        },
        {
            "id": 3,
            "title": "Why did the scarecrow win an award?",
            "content": "Because he was outstanding in his field!"
        },
        {
            "id": 4,
            "title": "What do you call fake spaghetti?",
            "content": "An impasta!"
        },
        {
            "id": 5,
            "title": "Why don’t skeletons fight each other?",
            "content": "They don’t have the guts."
        }
    ]
    res.send(jokes);
    
})
app.listen(4000,(req , res)=>{

    console.log(`server run at the port  ${Port}`)
})