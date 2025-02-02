import mongoose from "mongoose";

export const connectDB = async () =>{
    await mongoose.connect('mongodb+srv://aniDb:ani123@cluster0.0xqvo.mongodb.net/bgkpro').then(()=>console.log("DB Connected"));
}

