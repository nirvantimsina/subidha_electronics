import express from "express";
import { ObjectId } from "mongodb";
import { db } from "../db/connection.js"; // import db (already connected)

const router = express.Router();

// GET all products
router.get("/", async (req, res) => {
  try {
    const collection = db.collection("products");
    const result = await collection.find({}).toArray();
    res.status(200).json(result);
  } catch (err) {
    console.error("❌ Error fetching products:", err);
    res.status(500).json({ error: "Failed to fetch products" });
  }
});

// GET product by ID
router.get("/:id", async (req, res) => {
  try {
    const collection = db.collection("products");
    const query = { _id: new ObjectId(req.params.id) };
    const result = await collection.findOne(query);

    if (!result) {
      return res.status(404).json({ error: "Product not found" });
    }

    res.status(200).json(result);
  } catch (err) {
    console.error("❌ Error fetching product:", err);
    res.status(500).json({ error: "Failed to fetch product" });
  }
});

// CREATE new product
router.post("/", async (req, res) => {
  try {
    const { name, description, price } = req.body;
    if (!name || !description || !price) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const collection = db.collection("products");
    const result = await collection.insertOne({ name, description, price });

    res.status(201).json(result);
  } catch (err) {
    console.error("❌ Error adding product:", err);
    res.status(500).json({ error: "Failed to add product" });
  }
});

// UPDATE product by ID
router.patch("/:id", async (req, res) => {
  try {
    const { name, description, price } = req.body;
    const query = { _id: new ObjectId(req.params.id) };
    const update = { $set: { name, description, price } };

    const collection = db.collection("products");
    const result = await collection.updateOne(query, update);

    if (result.matchedCount === 0) {
      return res.status(404).json({ error: "Product not found" });
    }

    res.status(200).json(result);
  } catch (err) {
    console.error("❌ Error updating product:", err);
    res.status(500).json({ error: "Failed to update product" });
  }
});

// DELETE product by ID
router.delete("/:id", async (req, res) => {
  try {
    const query = { _id: new ObjectId(req.params.id) };
    const collection = db.collection("products");
    const result = await collection.deleteOne(query);

    if (result.deletedCount === 0) {
      return res.status(404).json({ error: "Product not found" });
    }

    res.status(200).json({ message: "Product deleted" });
  } catch (err) {
    console.error("❌ Error deleting product:", err);
    res.status(500).json({ error: "Failed to delete product" });
  }
});

export default router;
