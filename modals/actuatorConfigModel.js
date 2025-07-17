import mongoose from "mongoose";

const valveActuatorConfigSchema = new mongoose.Schema({
  // Left Side
  userId: String,
  series: String,
  actuatorSize: String,
  mop: Number,
  springSize: String,
  baseCode: String,
  action: String,
  mountingYoke: String,
  ports: String,
  boreSize: {
    type: String,
    default: "3",
  },
  cylinderSize: {
    type: [String],
    default: ["14"],
  },
  standardOptions: {
    type: [String],
    default: [
      "None",
      "Jackscrew Gear Drive",
      "Hydraulic Override",
      "Extended Stopper 45°",
      "Extended Stopper 90°",
      "Hydraulic Damper",
      "PST & Locking Device",
    ],
  },
  designCode: {
    type: [String],
    default: ["Standard Pneumatic"],
  },
  material: {
    type: [String],
    default: ["Standard", "STD with SS Bolting"],
  },
  tempTrim: {
    type: [String],
    default: [
      "Standard (-29 degC to 93 degC)",
      "Low Temp (Down to -46 degC)",
      "High Temp (Up to 149 degC)",
    ],
  },
  coatings: {
    type: [String],
    default: ["Standard", "Special", "Primer Only"],
  },
  orientation: String,
  kitSealRepair: String,
  partNumber: String,

  // Right Side
  valveInfo: {
    brand: String,
    valveType: String,
    valveSize: String,
    seriesModel: String,
    additionalInfo: String,
    differentialPressure: String,
    mastValue: String,
    stemMaterial: String,
    requiredSafetyFactor: Number,
    stemDiameter: {
      inch: Boolean,
      metric: Boolean,
      value: Number,
    },
    mountingKit: String,
    mountingFlange: String,
    vmc: String,
  },
  supplyPressure: Number,
  valveTorques: {
    breakToOpen: Number,
    runToOpen: Number,
    endToOpen: Number,
    breakToClose: Number,
    runToClose: Number,
    endToClose: Number,
  },
  actuatorTorques: {
    pneumaticStart: Number,
    pneumaticMin: Number,
    pneumaticEnd: Number,
    springStart: Number,
    springMin: Number,
    springEnd: Number,
  },
  actualSF: {
    pneumaticStart: Number,
    pneumaticMin: Number,
    pneumaticEnd: Number,
    springStart: Number,
    springMin: Number,
    springEnd: Number,
  },
});

const ValveActuatorConfig = mongoose.model(
  "ValveActuatorConfig",
  valveActuatorConfigSchema
);

export default ValveActuatorConfig;
