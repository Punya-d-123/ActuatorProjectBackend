import express from "express";
import { getMe, login, logout } from "../controllers/authController.js";
const router = express.Router();
router.post('/login', login)
router.post('/logout', logout)
router.get('/me', getMe)

export default router
