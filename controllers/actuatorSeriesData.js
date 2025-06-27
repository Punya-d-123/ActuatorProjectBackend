import actuatorSeriesModel from "../modals/actuatorSeriesModel.js";



export const getAllSeries = async (req, res) => {
    try{
        const series = await actuatorSeriesModel.find({});
        res.status(200).json({
            success: true,
            sount:series.length,
            data: series
        });
    }
    catch(error){
        res.status(500).json({
            success: false,
            message: "Failed to get all actuator series ",
            error: error.message
        });
    }
}

export const createSeries = async (req, res) => {
  try {
    const { name} = req.body;
    const series = await actuatorSeriesModel.create({
      name,
    });

    res.status(201).json({
      success: true,
      message: "Actuator series created successfully",
      data: series,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: "Failed to create actuator series",
      error: error.message,
    });
  }
};
