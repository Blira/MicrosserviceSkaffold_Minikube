import express from 'express';
import { body, validationResult } from 'express-validator';

const router = express.Router();
router.post('/api/users/signup', [
    body('email')
        .isEmail()
        .withMessage('Email must be valid'),
    body('password')
        .trim()
        .isLength({ min: 4, max: 20 })
        .isString()
        .withMessage('Password must be between 4 and 20 characteres')
], (req: express.Request, res: express.Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).send(errors.array())
    }
    return res.status(201).send('OK')

});

export { router as signupRouter }