import express from "express";

// for connecting to the database
import db from "../db/connection.js";

import { ObjectId } from "mongodb";

// router is an instance of express router.
// they are used to define routes
// router is added as a middleware
// and will take full control of the requests starting with path /record.
const router = express.Router();

// this section helps in getting ths list of all the products
router.get("/", async (req, res) => {
  let collection = await db.collection("products");
  let result = await collection.find({}).toArray();
  res.status(200).send(result);
});

// this section is used for getting the product detail by id
router.get("/:id", async (req, res) => {
  try {
    let collection = db.collection("products");
    let query = { _id: new ObjectId(req.params.id) };
    let result = await collection.findOne(query);

    if (!result) {
      res.status(404).send("Not Found");
    } else {
      res.status(200).send(result);
    }
  } catch (err) {
    console.error(err);
    res.status(500).send("Error fetching product!");
  }
});

// this section is used to create new product
router.post("/", async (req, res) => {
  try {
    let newDocument = {
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
    };
    let collection = await db.collection("products");
    let result = await collection.insertOne(newDocument);
    res.status(201).send(result);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error adding to database!");
  }
});

// this section is used to update a record by id
router.patch("/:id", async (req, res) => {
  try {
    const query = { _id: new ObjectId(req.params.id) };
    const update = {
      $set: {
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
      },
    };

    let collection = await db.collection("products");
    let result = await collection.updateOne(query, update);
    res.status(200).send(result);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error Updating Products!");
  }
});

// this section is used to delete a record
router.delete("/:id", async (req, res) => {
  try {
    const query = { _id: new ObjectId(req.params.id) };

    const collection = db.collection("products");
    let result = await collection.deleteOne(query);

    res.status(200).send(result);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error deleting product!");
  }
});

export default router;
