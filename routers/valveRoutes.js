import express from 'express';
import { getAllValves, createValve,} from '../controllers/valveController.js';
import { getActuatorData } from '../controllers/actuatorDataController.js';
import axios from 'axios'

const router = express.Router();
router.get('/getValve', getAllValves);
router.post('/create',createValve );
router.get('/actuators', getActuatorData);
router.post('/actuator-proxy', async (req, res) => {
  try {
    const response = await axios.post(
      process.env.ACTUATOR_PROXY_API,
      req.body
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
export default router;
