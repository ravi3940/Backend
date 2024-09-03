import {v2 as cloudinary} from "cloudinary"
import fs from "fs"
import dotenv from "dotenv" ;
dotenv.config()


cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET 
});

const uploadOnCloudinary = async (localFilePath) => {
    try {
            if (!localFilePath) return null

        const response = await cloudinary.uploader.upload(localFilePath)
        
        console.log("file is uploaded on cloudinary ", response.url);
        fs.unlinkSync(localFilePath)
        return response;

    } catch (error) {
        console.log("this is cloudnary   error " , error)
        fs.unlinkSync(localFilePath) 
        return null;
    }
}
export {uploadOnCloudinary}