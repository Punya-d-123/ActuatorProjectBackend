
import express from "express";
import { createConfig, getAllConfigs, getConfigById, showCreateForm } from "../controllers/actuatorConfigController.js";


const router = express.Router();

router.get('/configs/new', showCreateForm);
router.post('/', createConfig);
router.get('/', getAllConfigs);
router.get('/configs/:id', getConfigById);

export default router;
