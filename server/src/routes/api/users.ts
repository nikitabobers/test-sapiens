import express, { Request, Response } from 'express';
import { check, validationResult } from 'express-validator';
const router = express.Router();

import User from '../../models/userModel';

// Get list of users
router.get('/', async (req: Request, res: Response) => {
    try {
        const users = await User.find().sort({
            _id: -1,
        });

        res.status(200).json(users);
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
});

// Add new user
router.post(
    '/',
    [
        check('name')
            .notEmpty()
            .withMessage('Name is required')
            .isString()
            .withMessage('Name must be a string')
            .isLength({ min: 2 })
            .withMessage('Name must be at least 2 characters'),
        check('surname')
            .notEmpty()
            .withMessage('Surname is required')
            .isString()
            .withMessage('Surname must be a string')
            .isLength({ min: 2 })
            .withMessage('Surname must be at least 2 characters'),
        check('email').isEmail().withMessage('Email is not valid'),
    ],
    async (req: Request, res: Response) => {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        try {
            const newUser = new User({
                name: req.body.name,
                surname: req.body.surname,
                email: req.body.email,
            });

            await newUser.save();

            res.status(201).json({ msg: 'User created' });
        } catch (error) {
            console.error(error.message);
            res.status(500).send('Server Error');
        }
    }
);

// Delete user
router.delete('/:id', async (req: Request, res: Response) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) res.status(404).send('User not found');

        await user.remove();

        res.status(202).json({ msg: 'User deleted' });
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server error');
    }
});

export default router;
