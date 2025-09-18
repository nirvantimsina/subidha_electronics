import express from "express";
import cors from "cors";

import products from "./src/routes/product.js";
import { connectDB } from "./src/db/connection.js";

const PORT = process.env.PORT || 5050;
const app = express();

app.use(cors());
app.use(express.json());
app.use("/products", products);

async function startServer() {
  try {
    await connectDB(); // connect DB first
    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  } catch (err) {
    console.error("❌ Failed to start server due to DB connection error", err);
    process.exit(1); // exit process if DB connection fails
  }
}

startServer();
