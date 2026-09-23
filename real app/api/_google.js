const { TranslationServiceClient } = require("@google-cloud/translate");

const apiKey = process.env.GOOGLE_TRANSLATE_API_KEY;
const projectId = process.env.GOOGLE_CLOUD_PROJECT || process.env.GCLOUD_PROJECT;
const serviceAccountJson = process.env.GOOGLE_SERVICE_ACCOUNT_JSON;
const translationClient = projectId
  ? new TranslationServiceClient(serviceAccountJson ? { credentials: JSON.parse(serviceAccountJson) } : {})
  : null;

function json(response, status, payload) {
  response.status(status).json(payload);
}

async function translate(request, response) {
  if (request.method !== "POST") return json(response, 405, { error: "Method not allowed" });
  if (!translationClient && !apiKey) return json(response, 503, { error: "Google Cloud Translation is not configured" });

  const text = typeof request.body?.text === "string" ? request.body.text.trim() : "";
  const source = request.body?.sourceLanguage === "English" ? "en" : "lg";
  const target = source === "en" ? "lg" : "en";
  if (!text) return json(response, 400, { error: "Text is required" });
  if (text.length > 240) return json(response, 413, { error: "Text is too long" });

  try {
    if (translationClient) {
      const [data] = await translationClient.translateText({
        parent: `projects/${projectId}/locations/global`,
        contents: [text],
        mimeType: "text/plain",
        sourceLanguageCode: source,
        targetLanguageCode: target
      });
      const translation = data.translations?.[0]?.translatedText;
      if (!translation) throw new Error("Google Cloud returned no translation");
      return json(response, 200, { translation });
    }

    const googleResponse = await fetch(`https://translation.googleapis.com/language/translate/v2?key=${encodeURIComponent(apiKey)}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ q: text, source, target, format: "text" })
    });
    const data = await googleResponse.json();
    if (!googleResponse.ok) return json(response, googleResponse.status, { error: "Google Translate request failed" });
    return json(response, 200, { translation: data.data.translations[0].translatedText });
  } catch {
    return json(response, 502, { error: "Google Cloud Translation request failed" });
  }
}

async function speak(request, response) {
  if (request.method !== "POST") return json(response, 405, { error: "Method not allowed" });
  if (!apiKey) return json(response, 503, { error: "GOOGLE_TRANSLATE_API_KEY is not configured" });

  const text = typeof request.body?.text === "string" ? request.body.text.trim() : "";
  const languageCode = request.body?.language === "Luganda" ? "lg-UG" : "en-US";
  if (!text) return json(response, 400, { error: "Text is required" });
  if (text.length > 1000) return json(response, 413, { error: "Text is too long" });

  try {
    const googleResponse = await fetch("https://texttospeech.googleapis.com/v1/text:synthesize?key=" + encodeURIComponent(apiKey), {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ input: { text }, voice: { languageCode, ssmlGender: "NEUTRAL" }, audioConfig: { audioEncoding: "MP3" } })
    });
    const data = await googleResponse.json();
    if (!googleResponse.ok || typeof data.audioContent !== "string") return json(response, googleResponse.ok ? 502 : googleResponse.status, { error: "Text-to-speech request failed" });
    const audio = Buffer.from(data.audioContent, "base64");
    response.status(200).setHeader("Content-Type", "audio/mpeg").setHeader("Content-Length", audio.length).send(audio);
  } catch {
    return json(response, 400, { error: "Invalid audio request" });
  }
}

module.exports = { translate, speak };
