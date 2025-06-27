import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import connectDB from './config/db.js';
import userRoute from './routers/userRoutes.js';
import authRoutes from "./routers/authRoutes.js";
import valveRoutes from './routers/valveRoutes.js';
import actuatorSeriesRoute from './routers/actuatorSeriesRoute.js'

import cors from "cors"


connectDB();
const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/users', userRoute);
app.use('/api/auth' , authRoutes);
app.use('/api/valve' , valveRoutes);
app.use('/api/series' , actuatorSeriesRoute);
const PORT=5000;
app.listen(PORT, () => console.log(` Server started on ${PORT}`))
app.post('/api/login', (req, res) => {
  const { email, password } = req.body;
 
  res.json({ token: 'your-jwt-token' });
});
