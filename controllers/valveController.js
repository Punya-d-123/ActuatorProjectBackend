import valveModel from '../modals/valveModel.js';
import valve from '../modals/valveModel.js';
export const getAllValves = async (req, res) => {
    try{
        const valve = await valveModel.find({});
        res.status(200).json({
            success: true,
            sount:valve.length,
            data: valve
        });
    }
    catch(error){
        res.status(500).json({
            success: false,
            message: "Failed to get all valves",
            error: error.message
        });
    }
}

export const createValve = async (req, res) => {
  try {
    const { name} = req.body;
    const valve = await valveModel.create({
      name,
    });

    res.status(201).json({
      success: true,
      message: "valve created successfully",
      data: valve,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: "Failed to create valve",
      error: error.message,
    });
  }
};
