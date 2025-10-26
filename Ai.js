const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${API_KEY}`;

const SYSTEM_PROMPT = `
You are an assistant that receives a list of ingredients 
that a user has and suggests a recipe they could make with some or all of these ingredients.
You don't need to use every ingredient they mention to your recipe. 
The recipe can include additional ingredients they didn't mention,
but try not to include too many extra ingredients. 
Format your response in markdown to make it easier to render to a web page`


export async function getRecipeFromGemini(ingredientsArr) {
    if (!API_KEY) {
        console.error("FATAL ERROR: VITE_GEMINI_API_KEY is not set.");
        return "Chef Claude cannot reach the kitchen without a key. Please set VITE_GEMINI_API_KEY in your .env file.";
    }

    const ingredientsString = ingredientsArr.join(", ");
    const userQuery = `I have the following ingredients: ${ingredientsString}. Please give me a delicious, easy recipe I can make.`;

    const payload = {
        contents: [
            { role: "user", parts: [{ text: userQuery }] }
        ],
        systemInstruction: {
            parts: [{ text: SYSTEM_PROMPT }]
        },
    };

    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });

        if (!response.ok) {
            throw new Error(`API call failed with status: ${response.status}`);
        }

        const result = await response.json();
        
        const recipeText = result.candidates?.[0]?.content?.parts?.[0]?.text;

        if (recipeText) {
            return recipeText;
        } else {
            console.error("Gemini API returned an empty response:", result);
            return "Chef Claude is stumped! The AI failed to generate a recipe. Try different ingredients.";
        }
    } catch (err) {
        console.error("Error during Gemini API call:", err);
        return `Chef Claude cannot fulfill the order due to an error: ${err.message}`;
    }
}