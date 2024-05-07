import mongoose from "mongoose";

let isConnected = false; // Track the connection status
const uri = process.env.MONGODB_URI || "YOUR_FALLBACK_URI";

export const connectToDB = async () => {
  mongoose.set("strictQuery", true);

  if (isConnected) {
    console.log("MongoDB is already connected");
    return;
  }

  try {
    // Connect to MongoDB Atlas using the provided URI
    await mongoose.connect(uri, {
      dbName: "share_prompt", // Specify the database name
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    isConnected = true;
    console.log("MongoDB connected");
  } catch (error) {
    // Handle connection errors
    console.error("Error connecting to MongoDB:", error);
    // Set isConnected to false to prevent further attempts
    isConnected = false;
    // Optionally, rethrow the error to propagate it further
    throw error;
  }
};
