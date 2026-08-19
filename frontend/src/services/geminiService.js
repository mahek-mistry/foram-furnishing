import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_GEMINI_API_KEY });

export const geminiChat = ai.chats.create({
  model: "gemini-3-flash-preview",
  config: {
    systemInstruction: `You are Studio Assistant, a helper for an interior design website.
    Help users with room styling ideas, color palettes, furniture pairings, materials, lighting, layout advice, and mood directions.
    Keep replies very short, maximum 2-3 sentences. Be direct and practical.
    Never use markdown formatting like **, *, #, or bullet points. Write in plain sentences only.`,
  },
});

function stripMarkdown(text) {
  return text
    .replace(/\*\*(.*?)\*\*/g, '$1')  // remove **bold**
    .replace(/\*(.*?)\*/g, '$1')       // remove *italic*
    .replace(/^#+\s/gm, '')            // remove # headings
    .replace(/^\*\s/gm, '')            // remove * bullet points
    .replace(/^-\s/gm, '')             // remove - bullet points
    .trim();
}

export async function getGeminiResponse(message) {
  try {
    const response = await geminiChat.sendMessage({ message });
    const rawText = response.text || "I'm sorry, I couldn't process that request.";
    return stripMarkdown(rawText);
  } catch (error) {
    console.error("Gemini Chat Error:", error);
    return "I'm experiencing some technical difficulties. Please try again later.";
  }
}