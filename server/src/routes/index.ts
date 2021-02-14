import express from 'express';
const router = express.Router();
import userRouter from './api/users';

router.use('/api/users', userRouter);

export default router;
