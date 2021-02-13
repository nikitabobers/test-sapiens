import express, { Request, Response } from 'express';
const router = express.Router();

// Get list of users
router.get('/', (req: Request, res: Response) => {
    res.send('get');
});

// Add new user
router.post('/', (req: Request, res: Response) => {
    res.send('post');
});

export default router;
