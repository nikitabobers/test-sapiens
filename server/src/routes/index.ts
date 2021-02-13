import express from 'express';
const router = express.Router();
import userRouter from './api/user';

router.use('/api/users', userRouter);

export default router;
