import mongoose from "mongoose";

let isConnected: boolean = false;

export const connectToDatabase = async () => {
  mongoose.set("strictQuery", true);
  if (!process.env.MONGODB_URL) return console.log("MISSIN MONGODB_URL");

  if (isConnected) {
    console.log("mongodb is already connnected");
  }

  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      dbName: "devflow",
    });

    isConnected = true;

    console.log("MongoDB is connected");
  } catch (error) {
    console.log("Connection failed", error);
  }
};
