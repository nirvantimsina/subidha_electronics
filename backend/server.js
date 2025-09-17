import express from "express";
import cors from "cors";

import products from "./src/routes/product.js";
import { connectDB } from "./src/db/connection.js";

const PORT = process.env.PORT || 5050;
const app = express();

app.use(cors());
app.use(express.json());
app.use("/products", products);

app.listen(PORT, async () => {
  await connectDB(); // connect DB only when server starts
  console.log(`🚀 Server running on port ${PORT}`);
});
