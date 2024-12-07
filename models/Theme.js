// models/Theme.js
import mongoose from 'mongoose';

const ThemeSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    clueTemplates: { type: [String], required: true },
});

export default mongoose.model('Theme', ThemeSchema);
