import express from "express";
import { createInverter, deleteInverter, getAllInverters, getInvertersById, updateInverter } from "../controllers/productsController.js"

const router = express.Router();

router.get("/", getAllInverters);

router.get("/:id", getInvertersById);

router.post("/", createInverter);

router.put("/:id", updateInverter);

router.delete("/:id", deleteInverter);

export default router