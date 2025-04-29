import mongoose from "mongoose"
import dotenv from "dotenv"

dotenv.config()

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("mongoDB connection success ✅")
    } catch (error) {
        console.log(`mongoDB connection failed :: error : ${error}`)
        process.exit(1)
    }
}

export default connectDB