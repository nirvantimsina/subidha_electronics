import { MongoClient, ServerApiVersion } from "mongodb";

const uri = process.env.CLOUD_URI || "mongodb://127.0.0.1:27017/subidha-db";

if (!uri) {
  throw new Error("❌ MongoDB URI is not defined in environment variables");
}

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

export async function connectDB() {
  try {
    if (!client.isConnected()) {
      await client.connect();
      await client.db("admin").command({ ping: 1 });
      console.log("✅ Connected to MongoDB!");
    }
  } catch (err) {
    console.error("❌ MongoDB connection failed:", err);
    throw err;
  }
}

export const db = client.db("subidha-db");
