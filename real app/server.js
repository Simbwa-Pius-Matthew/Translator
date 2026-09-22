const http = require("node:http");
const fs = require("node:fs");
const path = require("node:path");
const { TranslationServiceClient } = require("@google-cloud/translate");

const port = Number(process.env.PORT) || 3000;
const host = process.env.HOST || "0.0.0.0";
const apiKey = process.env.GOOGLE_TRANSLATE_API_KEY;
const projectId = process.env.GOOGLE_CLOUD_PROJECT || process.env.GCLOUD_PROJECT;
const serviceAccountJson = process.env.GOOGLE_SERVICE_ACCOUNT_JSON;
const translationClient = projectId
  ? new TranslationServiceClient(serviceAccountJson ? { credentials: JSON.parse(serviceAccountJson) } : {})
  : null;
const root = __dirname;

const contentTypes = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".webmanifest": "application/manifest+json; charset=utf-8"
};

function sendJson(response, status, payload) {
  response.writeHead(status, { "Content-Type": "application/json; charset=utf-8" });
  response.end(JSON.stringify(payload));
}

function readBody(request) {
  return new Promise((resolve, reject) => {
    let body = "";
    request.on("data", (chunk) => {
      body += chunk;
      if (body.length > 10000) reject(new Error("Request is too large"));
    });
    request.on("end", () => resolve(body));
    request.on("error", reject);
  });
}

async function translate(request, response) {
  if (!translationClient && !apiKey) {
    sendJson(response, 503, { error: "Google Cloud Translation is not configured" });
    return;
  }

  try {
    const body = JSON.parse(await readBody(request));
    const text = typeof body.text === "string" ? body.text.trim() : "";
    const source = body.sourceLanguage === "English" ? "en" : "lg";
    const target = source === "en" ? "lg" : "en";
    if (!text) {
      sendJson(response, 400, { error: "Text is required" });
      return;
    }

    if (translationClient) {
      const [googleData] = await translationClient.translateText({
        parent: `projects/${projectId}/locations/global`,
        contents: [text],
        mimeType: "text/plain",
        sourceLanguageCode: source,
        targetLanguageCode: target
      });
      const translation = googleData.translations?.[0]?.translatedText;
      if (!translation) throw new Error("Google Cloud returned no translation");
      sendJson(response, 200, { translation });
      return;
    }

    const googleResponse = await fetch(
      `https://translation.googleapis.com/language/translate/v2?key=${encodeURIComponent(apiKey)}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ q: text, source, target, format: "text" })
      }
    );
    const googleData = await googleResponse.json();
    if (!googleResponse.ok) {
      sendJson(response, googleResponse.status, { error: "Google Translate request failed" });
      return;
    }
    sendJson(response, 200, { translation: googleData.data.translations[0].translatedText });
  } catch {
    sendJson(response, 502, { error: "Google Cloud Translation request failed" });
  }
}

async function speak(request, response) {
  if (!apiKey) {
    sendJson(response, 503, { error: "GOOGLE_TRANSLATE_API_KEY is not configured" });
    return;
  }

  try {
    const body = JSON.parse(await readBody(request));
    const text = typeof body.text === "string" ? body.text.trim() : "";
    const languageCode = body.language === "Luganda" ? "lg-UG" : "en-US";
    if (!text) {
      sendJson(response, 400, { error: "Text is required" });
      return;
    }
    if (text.length > 1000) {
      sendJson(response, 413, { error: "Text is too long" });
      return;
    }

    const googleResponse = await fetch(
      `https://texttospeech.googleapis.com/v1/text:synthesize?key=${encodeURIComponent(apiKey)}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          input: { text },
          voice: { languageCode, ssmlGender: "NEUTRAL" },
          audioConfig: { audioEncoding: "MP3" }
        })
      }
    );
    const googleData = await googleResponse.json();
    if (!googleResponse.ok || typeof googleData.audioContent !== "string") {
      sendJson(response, googleResponse.ok ? 502 : googleResponse.status, { error: "Text-to-speech request failed" });
      return;
    }

    const audio = Buffer.from(googleData.audioContent, "base64");
    response.writeHead(200, {
      "Content-Type": "audio/mpeg",
      "Content-Length": audio.length,
      "Cache-Control": "no-store"
    });
    response.end(audio);
  } catch {
    sendJson(response, 400, { error: "Invalid audio request" });
  }
}

function serveFile(request, response) {
  const requestedPath = request.url === "/" ? "/index.html" : request.url;
  const filePath = path.normalize(path.join(root, requestedPath));
  if (!filePath.startsWith(root) || !fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
    response.writeHead(404);
    response.end("Not found");
    return;
  }
  response.writeHead(200, { "Content-Type": contentTypes[path.extname(filePath)] || "application/octet-stream" });
  fs.createReadStream(filePath).pipe(response);
}

http.createServer((request, response) => {
  if (request.method === "GET" && request.url === "/health") {
    sendJson(response, 200, { status: "ok", app: "LUGAFLOW" });
  } else if (request.method === "POST" && request.url === "/api/translate") {
    translate(request, response);
  } else if (request.method === "POST" && request.url === "/api/speak") {
    speak(request, response);
  } else if (request.method === "GET") {
    serveFile(request, response);
  } else {
    response.writeHead(405);
    response.end("Method not allowed");
  }
}).listen(port, host, () => {
  console.log(`LUGAFLOW is running on port ${port}`);
});