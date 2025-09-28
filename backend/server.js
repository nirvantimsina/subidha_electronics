import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import connectdb from "./src/config/connection.js";
import productsRoutes from "./src/routes/productRoutes.js";

dotenv.config();

const app = express();

// middlewares
app.use(cors());
app.use(express.json());

//routes
app.use("/api/products", productsRoutes);

connectdb(); // connect DB first
  app.listen(process.env.PORT, () => {
    console.log(`Server running at: http://localhost:${process.env.PORT}`);
    console.log(`Server started at port: ${process.env.PORT}`);
  });