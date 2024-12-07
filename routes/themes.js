// routes/themes.js
import express from 'express';
import Theme from '../models/Theme.js';

const router = express.Router();
// Get all themes
router.get('/', async (req, res) => {
    try {
        const themes = await Theme.find( {}, { name: 1, _id: 0 }, { clueTemplates: 1, _id: 0 });
        res.json(themes);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
});

// Add a new theme
router.post('/', async (req, res) => {
    const { name, clueTemplates } = req.body;

    try {
        const existingTheme = await Theme.findOne({ name }, { name: 1, _id: 0 }, { clueTemplates: 1, _id: 0 });

        if (existingTheme) {
            return res.status(400).json({ error: 'Theme already exists' });
        }

        const theme = new Theme({ name, clueTemplates });
        await theme.save();

        res.status(201).json(theme);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
});

export default router;
