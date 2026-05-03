const { GoogleGenAI } = require('@google/genai');
const ai = new GoogleGenAI({ apiKey: "bad_key" });
async function test() {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-1.5-flash',
      contents: "hello",
    });
    console.log(response.text);
  } catch (error) {
    console.log("Error type:", typeof error);
    console.log("Has message?", 'message' in error);
    console.log("Message:", error.message);
  }
}
test();
