// models/ScavengerHunt.js
import mongoose from 'mongoose';

const StepSchema = new mongoose.Schema({
    location: { type: String, required: false },
    clue: { type: String, required: true },
});

const ScavengerHuntSchema = new mongoose.Schema({
    token: { type: String, required: true, unique: true }, // The unique token for the URL
    theme: { type: String, required: true },
    steps: [StepSchema],
    finalGiftLocation: { type: String },
    createdAt: { type: Date, default: Date.now },
});

export default mongoose.model('ScavengerHunt', ScavengerHuntSchema);
