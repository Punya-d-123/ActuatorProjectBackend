import ValveActuatorConfig from "../modals/actuatorConfigModel.js";


// Show form to create config
export const showCreateForm = (req, res) => {
  res.render('createConfig');
};

// Create Config (Handle POST)
export const createConfig = async (req, res) => {
  try {
    const config = new ValveActuatorConfig(req.body);
    await config.save();
    res.status(201).json({ message: "Config created", config });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get All Configs (List)
export const getAllConfigs = async (req, res) => {
  try {
    const configs = await ValveActuatorConfig.find();
    res.status(200).json(configs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get Config by ID (Detail View)
export const getConfigById = async (req, res) => {
  try {
    const config = await ValveActuatorConfig.findById(req.params.id);
    if (!config) {
      return res.status(404).json({ message: 'Config not found' });
    }
    res.status(200).json(config);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};