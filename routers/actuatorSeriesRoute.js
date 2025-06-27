import express from 'express';
import { getAllSeries, createSeries } from '../controllers/actuatorSeriesData.js';
const router = express.Router();
router.get('/', getAllSeries);
router.post('/create',createSeries );
export default router;