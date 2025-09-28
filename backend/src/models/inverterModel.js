import mongoose from "mongoose";

const inverterScheme = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },

        description: {
            type: String,
            required: true,
        },

        price: {
            type: Number,
            required:true,
        },
    },

    { timestamps: true }
);

const Inverter = mongoose.model("Inverter", inverterScheme)

export default Inverter