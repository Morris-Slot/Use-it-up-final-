// api/generate-recipes.js
// Vercel serverless function — draait op de server, nooit in de browser.
// Verwacht: POST { ingredients: string[] }
// Geeft terug: { recipes: [{ title, time, difficulty, servings, image, ingredients, steps, tips }] }

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: "GEMINI_API_KEY is not set on the server." });
  }

  const { ingredients } = req.body || {};
  if (!Array.isArray(ingredients) || ingredients.length === 0) {
    return res.status(400).json({ error: "Missing or empty ingredients array." });
  }

  try {
    const model = "gemini-flash-latest";

    const prompt =
      `Create exactly 3 different recipes using ONLY these ingredients: ${ingredients.join(", ")}. ` +
      "You may also assume basic pantry staples are available: olive oil, salt, pepper, water. " +
      "Do NOT invent ingredients that weren't listed. " +
      "Respond with ONLY a JSON array, no other text, no markdown fences. Each object must have exactly these fields: " +
      '{"title": string, "time": string (e.g. "20 min"), "difficulty": "Easy"|"Medium"|"Hard", ' +
      '"servings": number, "ingredients": string[] (only from the given list), ' +
      '"steps": string[] (4-6 clear, specific, step-by-step instructions, mentioning exact ingredient names), ' +
      '"tips": string[] (1-2 short cooking tips)}.';

    const geminiRes = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
        }),
      }
    );

    if (!geminiRes.ok) {
      const errText = await geminiRes.text();
      return res.status(502).json({ error: "Gemini request failed", detail: errText });
    }

    const data = await geminiRes.json();
    const text = data?.candidates?.[0]?.content?.parts?.[0]?.text ?? "[]";
    const cleaned = text.replace(/```json|```/g, "").trim();

    let recipes;
    try {
      recipes = JSON.parse(cleaned);
    } catch {
      recipes = [];
    }

    // Voeg een id en placeholder-afbeelding toe (de frontend kan dit overschrijven).
    const withIds = recipes.map((r, i) => ({
      id: `gen-${Date.now()}-${i}`,
      image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=900&q=80&auto=format&fit=crop",
      ...r,
    }));

    return res.status(200).json({ recipes: withIds });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Failed to generate recipes." });
  }
}
