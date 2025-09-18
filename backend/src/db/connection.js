import { MongoClient, ServerApiVersion } from "mongodb";

// import { fileURLToPath } from "url";
// import { dirname, join } from "path";
// import dotenv from "dotenv";

// const __dirname = dirname(fileURLToPath(import.meta.url));

// load backend/.env explicitly
// dotenv.config{ path: join(__dirname, "../../.env") }

// dotenv.config();

const uri = process.env.CLOUD_URI;

if (!uri) {
  throw new Error("❌ CLOUD_URI is not defined in .env file");
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