// routes/hunts.js
import express from 'express';
import ScavengerHunt from '../models/ScavengerHunt.js';
import crypto from 'crypto';

const router = express.Router();

function generateUniqueToken() {
    return crypto.randomBytes(32).toString('hex');
}

// Save a new hunt and return a unique token
router.post('/save', async (req, res) => {
    const { theme, steps, finalGiftLocation } = req.body;
    if (!theme || !steps) {
        return res.status(400).json({ error: 'Missing required fields' });
    }

    try {
        const token = generateUniqueToken();

        const hunt = new ScavengerHunt({
            token,
            theme,
            steps,
            finalGiftLocation
        });
        await hunt.save();

        res.status(201).json({ token });
    } catch (error) {
        console.error('Error saving hunt:', error);
        res.status(500).json({ error: 'Server error' });
    }
});

// Get a hunt by token
router.get('/:token', async (req, res) => {
    const { token } = req.params;

    try {
        const hunt = await ScavengerHunt.findOne({ token }, '-_id -__v', { lean: true });
        if (!hunt) {
            return res.status(404).json({ error: 'Hunt not found' });
        }

        res.json(hunt);
    } catch (error) {
        console.error('Error fetching hunt:', error);
        res.status(500).json({ error: 'Server error' });
    }
});

export default router;
