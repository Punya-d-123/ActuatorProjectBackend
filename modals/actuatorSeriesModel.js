import mongoose from "mongoose";

const serieSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        trim:true,
    },
});


export default mongoose.model("Series", serieSchema);