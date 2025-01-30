import mongoose from "mongoose";

const connectDB = async () => {
  if (mongoose.connections[0].readyState === 1) {
    return true;
  }
  try {
    const mongoUri = process.env.MONGODB_URI;
    if (!mongoUri) {
      throw new Error("MONGODB_URI is not defined");
    }
    await mongoose.connect(mongoUri);
    console.log("Connected to MongoDB");
    return true;
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
