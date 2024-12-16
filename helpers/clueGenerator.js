// helpers/clueGenerator.js
import openai from './openai.js';

export async function generateClue(theme, giftDescription, previousLocation, nextLocation, difficultyLevel) {
    try {
        const prompt = createPrompt(theme, giftDescription, previousLocation, nextLocation, difficultyLevel);

        const response = await openai.completions.create({
            model: 'gpt-3.5-turbo-instruct',
            prompt,
            max_tokens: 60,
            temperature: 0.7,
        });

        return response.choices[0].text.trim();
    } catch (error) {
        console.error('Error generating clue:', error);
        throw error;
    }
}

function createPrompt(theme, giftDescription, previousLocation, nextLocation, difficultyLevel) {
    const difficultyInstructions = {
        Easy: 'The clue should be straightforward and easy to understand. These clues are intended for children or beginners. You can be direct about the room but only hint about the hiding spot',
        Medium: 'The clue should be moderately challenging with some clever hints. These clues are suitable for most participants. You should only hint about the room and the hiding spot',
        Hard: 'The clue should be super challenging, using indirect riddles or wordplay. Never be be very obvious. These clues are intended for experienced scavenger hunters or puzzle enthusiasts. Only vague hints about the hiding spot, and only very vague hints about the room',
    };

    const isFinalClue = !previousLocation || previousLocation.trim() === '';
    const clueContext = isFinalClue
        ? `This is the final clue of the scavenger hunt, leading directly to the gift described as "${giftDescription}".`
        : `This is a clue for a scavenger hunt that will lead to the next clue location: "${nextLocation}".`;

    const previousLocationText = !isFinalClue
        ? `The previous clue was hidden at: "${previousLocation}".`
        : '';

    return `You are an expert at creating riddles.
Create a ${difficultyLevel.toLowerCase()} difficulty, fun, engaging, gift-themed riddle/clue to: "${nextLocation}".
${difficultyInstructions[difficultyLevel]}
${theme}
${clueContext}
${previousLocationText}
The clue should be written in one or two sentences, never mention the next location directly, and maintain the excitement of the hunt. It should feel like part of a scavenger hunt, not a treasure map.`;
}
