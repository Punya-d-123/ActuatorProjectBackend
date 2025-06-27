import mongoose from "mongoose";
import bcrypt from "bcrypt";
const valveSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        trim:true,
    },
});


export default mongoose.model("Valve", valveSchema);