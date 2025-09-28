import { json } from "express";
import Inverter from "../models/inverterModel.js"

// define all the crud operations to be preformed for the products

export const getAllInverters = async( req, res ) => {
  try {
    const inverters = await Inverter.find().sort({ price: -1 });
    res.send,json({message:"hello"})
  } catch (error) {
    console.error("Error occured in getAllInverters.", error);
    res.status(500).json({message:"Server error fetching inverters data"});
  }
};

export const getInvertersById = async( req, res ) => {
  try {
    const inverter = await Inverter.findById(req.params.id);
    if (!inverter) return res.status(404).json({message:"Product not found!"});
    res.json(inverter);
  } catch (error) {
    console.error("Error occured in getInvertersById.", error);
    res.status(500).json({message:"Server error fetching inverters by id."})
  }
};

export const createInverter = async( req, res ) => {
  try {
    const { name, description, price } = req.body;
    const newInverter = new Inverter({ name, description, price });

    await newInverter.save();
    res.status(201).json({message:"Inverter Product created successfully."});
  } catch (error) {
    console.error("Error Creating product.", error);
    res.status(500).json({message:"Server error while creating product."});
  }
};

export const updateInverter = async( req, res ) => {
  try {
    const { name, description, price } = req.body;
    const updateInverter = await Inverter.findByIdAndUpdate(
      req.params.id,
      { name, description, price },
      {
        new:true,
      }
    );
    if (!updateInverter) return res.status(404).json({message:"Inverter not found."})
      else return res.status(200).json({message:"Inverter Updated Successfully."});
  } catch (error) {
    console.error("Error updating inverter details", error);
    res.status(500).json({message:"Server error updating inverter."});
  }
};

export const deleteInverter = async( req, res ) => {
  try {
    const deleteInverter = await Inverter.findByIdAndDelete(req.params.id);
    if (!deleteInverter) return res.status(404).json({message:"Inverter not found that you are trying to delete."});
    else return res.status(200).json({message:"Inverter Deleted Successfully!"});
  } catch (error) {
    console.error("Error deleting the inverter.", error);
    res.status(500).json({message:"Server error deleting inverter!"});
  }
};