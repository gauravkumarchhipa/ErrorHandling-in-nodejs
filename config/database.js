import mongoose from "mongoose";
export const connectDB = async () => {
    try {
        const { connection } = await mongoose.connect("mongodb://0.0.0.0:27017/expresserror");
        console.log(`Connected with ${connection.host}`)
    } catch (error) {
        console.log(error)
    }
}