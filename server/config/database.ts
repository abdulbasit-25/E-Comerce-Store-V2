import mongoose from "mongoose";

const globalWithDb = globalThis as typeof globalThis & {
  __mongooseConnection?: Promise<typeof mongoose>;
};

export const connectDatabase = async () => {
  const uri = process.env.MONGODB_URI;

  if (!uri) {
    throw new Error("MONGODB_URI is not configured");
  }

  if (!globalWithDb.__mongooseConnection) {
    globalWithDb.__mongooseConnection = mongoose.connect(uri).catch((error) => {
      console.error("❌ MongoDB connection error:", error);
      throw error;
    });
  }

  await globalWithDb.__mongooseConnection;
  return mongoose.connection;
};

mongoose.connection.on("disconnected", () => {
  console.log("MongoDB disconnected");
});

mongoose.connection.on("error", (err) => {
  console.error("MongoDB error:", err);
});
