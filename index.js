// index.js
import express from 'express';
import mongoose from 'mongoose';
import cors from'cors';
import dotenv from 'dotenv';
import helmet from'helmet';

dotenv.config();

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());

// Routes
import cluesRouter from './routes/clues.js';
import huntsRouter from './routes/hunts.js';
import themesRouter from './routes/themes.js';
import themeRouter from './routes/theme.js';

app.use('/api/clues', cluesRouter);
app.use('/api/hunts', huntsRouter);
app.use('/api/themes', themesRouter);
app.use('/api/theme', themeRouter);

app.get('/', (req, res) => {
    res.send('Welcome to the Scavenger Hunt Generator Backend!');
});

// Connect to MongoDB and start the server
const PORT = process.env.PORT || 5000;
mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server running at http://localhost:${PORT}`);
        });
    })
    .catch((err) => console.error('MongoDB connection error:', err));
