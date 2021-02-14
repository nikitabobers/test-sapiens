import dotenv from 'dotenv';
dotenv.config();

import express, { Application } from 'express';
const cors = require('cors');

import connectDB from './config/db';
import router from './routes';

const app: Application = express();

const PORT = process.env.PORT || 5000;

connectDB();

app.use(express.json());
app.use(cors());

app.use(router);

app.listen(PORT, () => {
    console.log(`Server started at ${PORT}`);
});
