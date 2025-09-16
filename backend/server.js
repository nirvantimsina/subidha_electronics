import express from "express";
import cors from "cors";
import products from "./src/routes/product.js";

const PORT = process.env.PORT || 5050;
const app = express();

app.use(cors());
app.use(express.json());
app.use("/products", products);

// for starting the express server
app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`);
});