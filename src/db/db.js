import mongoose from "mongoose";


const dbConnect = async()=>{
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log(`dataBase connection succefully`)
    } catch (error) {
        console.log( "mongdb connection error ",error);
        process.exit(1);
    }
    
}

export default dbConnect ;