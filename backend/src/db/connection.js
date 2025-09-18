// backend/src/db/connection.js
import { MongoClient, ServerApiVersion } from "mongodb";

// fucking vercel's .env isnt working, i hate it here, pls dont hack my db :(
const uri = process.env.CLOUD_URI || "mongodb+srv://rajtimsina403:admin@subidha-db.epgzsnp.mongodb.net/?retryWrites=true&w=majority&appName=subidha-db";

if (!uri) {
  throw new Error("❌ CLOUD_URI is not defined in environment variables");
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
    await client.connect();
    await client.db("admin").command({ ping: 1 });
    console.log("✅ Connected and pinged MongoDB successfully!");
  } catch (err) {
    console.error("❌ Failed to connect MongoDB:", err);
    process.exit(1); // Exit app if DB fails
  }
}

export const db = client.db("subidha-db");
