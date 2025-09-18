import express from "express";
import cors from "cors";
import productsRouter from "../src/routes/product.js";
import { connectDB } from "../src/db/connection.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use("/products", productsRouter);

// Export as serverless function
export default async function handler(req, res) {
  try {
    await connectDB(); // ensure DB connection
    app(req, res);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
}
