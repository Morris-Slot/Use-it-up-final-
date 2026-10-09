// api/analyze-image.js
// Vercel serverless function — draait op de server, nooit in de browser.
// Verwacht: POST { imageBase64: string, mimeType: string }
// Geeft terug: { ingredients: [{ name: string, confidence: "high"|"medium"|"low" }] }

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: "GEMINI_API_KEY is not set on the server." });
  }

  const { imageBase64, mimeType } = req.body || {};
  if (!imageBase64 || !mimeType) {
    return res.status(400).json({ error: "Missing imageBase64 or mimeType." });
  }

  try {
    // Let op: modelnamen bij Google veranderen weleens. Check de actuele naam
    // op https://ai.google.dev/gemini-api/docs/models als dit een 404 geeft.
    const model = "gemini-flash-latest";

    const geminiRes = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text:
                    "Look at this photo of food or ingredients. Identify every distinct food ingredient you can see. " +
                    "Respond with ONLY a JSON array, no other text, no markdown fences. Format: " +
                    '[{"name": "Tomato", "confidence": "high"}, {"name": "Onion", "confidence": "medium"}]. ' +
                    "Use common English ingredient names (e.g. 'Bell pepper', not 'red capsicum'). " +
                    "If you can't identify anything, return [].",
                },
                { inline_data: { mime_type: mimeType, data: imageBase64 } },
              ],
            },
          ],
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

    let ingredients;
    try {
      ingredients = JSON.parse(cleaned);
    } catch {
      ingredients = [];
    }

    return res.status(200).json({ ingredients });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Failed to analyze image." });
  }
}
