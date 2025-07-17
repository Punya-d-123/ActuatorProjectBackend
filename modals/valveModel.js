import mongoose from "mongoose";
import bcrypt from "bcrypt";
const valveSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
       
    },
},{
  collection: 'valve_type'  
});


export default mongoose.model("Valve", valveSchema);