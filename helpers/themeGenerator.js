// helpers/themeGenerator.js
import openai from './openai.js';

export async function generateTheme(giftDescription) {
    try {
        const prompt = `
You are a creative writing expert. Given a description of a hidden gift, generate a vivid, imaginative, and engaging paragraph that sets the tone for a gift themed set of clues in the scavenger hunt. The phrasing should match the spirit of the gift and be usable in all the clues.

Gift Description: "${giftDescription}"

Output the paragraph in vivid detail, capturing the atmosphere, mood, and feeling associated with the gift. Be sure to use a lexicon that embodies the essence of the gift and the excitement of a scavenger hunt.`;

        const response = await openai.completions.create({
            model: 'gpt-3.5-turbo-instruct',
            prompt,
            max_tokens: 150,
            temperature: 0.8,
        });

        return response.choices[0].text.trim();
    } catch (error) {
        console.error('Error generating theme:', error);
        throw error;
    }
}
