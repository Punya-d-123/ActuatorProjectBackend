import express from 'express';
import { createUser, getAllUsers, updateUser } from '../controllers/userController.js';

const router = express.Router();
router.get('/', getAllUsers);
router.post('/create',createUser );
router.put('/update/:id', updateUser); 
export default router;
