import ActuatorData from "../modals/actuatorDataModel.js"

export const getActuatorData = async (req, res) => {
  try {
    const { sort, type, size } = req.query;

    const filter = {};
    if (type) filter.type = type;
    if (size) filter.size = size;

    let sortOptions = {};
    if (sort === "price_asc") sortOptions.price = 1;
    if (sort === "price_desc") sortOptions.price = -1;

    const actuators = await ActuatorData.find(filter).sort(sortOptions);

    res.status(200).json(actuators);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
