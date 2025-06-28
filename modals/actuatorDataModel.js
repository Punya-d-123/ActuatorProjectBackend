import mongoose from "mongoose";

const actuatorDataSchema = new mongoose.Schema({
    name: {
    type: String,
    required: true,
  },
  modelNumber: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  torque: {
    type: Number,
    required: true,
  },
  rotation: {
    type: String,
    required: true,
  },
  size: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  
});


export default mongoose.model("ActuatorData", actuatorDataSchema);