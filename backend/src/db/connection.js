// backend/src/db/connection.js
import { MongoClient, ServerApiVersion } from "mongodb";

const uri = process.env.CLOUD_URI;
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
    // connect once
    await client.connect();
    // ping to confirm
    await client.db("admin").command({ ping: 1 });
    console.log("✅ Connected and pinged MongoDB successfully!");
  } catch (err) {
    console.error("❌ MongoDB connection failed:", err);
    throw err; // let the caller handle exit if needed
  }
}

// export db instance directly
export const db = client.db("subidha-db");
