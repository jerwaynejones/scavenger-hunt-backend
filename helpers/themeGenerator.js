// helpers/themeGenerator.js
import openai from './openai.js';

export async function generateTheme(giftDescription) {
    try {
        const prompt = `
You are a creative writing expert. Given a description of a gift, generate a vivid, imaginative, and engaging theme that sets the tone for a scavenger hunt. The theme should match the spirit of the gift and be usable in all the clues.

Gift Description: "${giftDescription}"

Output a theme in vivid detail, capturing the atmosphere, mood, and feeling associated with the gift. Do not include a list or bullet points. Just provide a narrative.`;

        const response = await openai.completions.create({
            model: 'gpt-3.5-turbo-instruct',
            prompt,
            max_tokens: 150,
            temperature: 0.7,
        });

        return response.choices[0].text.trim();
    } catch (error) {
        console.error('Error generating theme:', error);
        throw error;
    }
}
