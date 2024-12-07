// routes/clues.js
import express from 'express';
import Joi from 'joi';
import { generateClue } from '../helpers/clueGenerator.js';

const router = express.Router();

const clueSchema = Joi.object({
    theme: Joi.string().required(),
    giftDescription: Joi.string().required(),
    previousLocation: Joi.string().allow(''),
    nextLocation: Joi.string().required(),
    difficultyLevel: Joi.string().valid('Easy', 'Medium', 'Hard').required(),
});

router.post('/generate', async (req, res) => {
    const { error } = clueSchema.validate(req.body);
    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }

    const { theme, giftDescription, previousLocation, nextLocation, difficultyLevel } = req.body;

    try {
        const clue = await generateClue(theme, giftDescription, previousLocation, nextLocation, difficultyLevel);
        res.json({ clue });
    } catch (err) {
        console.error('Error generating clue:', err);
        res.status(500).json({ error: 'Server error' });
    }
});

export default router;
