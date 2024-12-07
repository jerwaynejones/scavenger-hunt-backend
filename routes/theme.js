// routes/theme.js
import express from 'express';
import Joi from 'joi';
import { generateTheme } from '../helpers/themeGenerator.js';

const router = express.Router();

const themeSchema = Joi.object({
    giftDescription: Joi.string().required(),
});

router.post('/generate', async (req, res) => {
    const { error } = themeSchema.validate(req.body);
    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }

    const { giftDescription } = req.body;

    try {
        const theme = await generateTheme(giftDescription);
        res.json({ theme });
    } catch (err) {
        console.error('Error generating theme:', err);
        res.status(500).json({ error: 'Server error' });
    }
});

export default router;
