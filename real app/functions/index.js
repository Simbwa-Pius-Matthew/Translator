const { TranslationServiceClient } = require("@google-cloud/translate");
const { initializeApp } = require("firebase-admin/app");
const { getAuth } = require("firebase-admin/auth");
const { getFirestore, FieldValue } = require("firebase-admin/firestore");
const { onRequest } = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");

initializeApp();

const db = getFirestore();
const auth = getAuth();
const translationClient = new TranslationServiceClient();
const projectId = process.env.GCLOUD_PROJECT;
const revenueCatSecret = process.env.REVENUECAT_SECRET_API_KEY;
const revenueCatEntitlement = process.env.REVENUECAT_ENTITLEMENT_ID || "pro";
const revenueCatWebhookSecret = process.env.REVENUECAT_WEBHOOK_SECRET;
const trialDays = 7;
const dailyFreeLimit = 50;

function sendJson(response, status, payload) {
  response.status(status).json(payload);
}

async function hasActiveSubscription(userId) {
  if (!revenueCatSecret) return false;
  const revenueCatResponse = await fetch(`https://api.revenuecat.com/v1/subscribers/${encodeURIComponent(userId)}`, {
    headers: { Authorization: `Bearer ${revenueCatSecret}` }
  });
  if (!revenueCatResponse.ok) throw new Error("RevenueCat customer lookup failed");
  const data = await revenueCatResponse.json();
  const entitlement = data.subscriber?.entitlements?.[revenueCatEntitlement];
  return Boolean(entitlement && (!entitlement.expires_date || new Date(entitlement.expires_date) > new Date()));
}

async function verifyUser(request, response) {
  const authorization = request.headers.authorization || "";
  if (!authorization.startsWith("Bearer ")) {
    sendJson(response, 401, { error: "Sign in to manage your plan" });
    return null;
  }
  try {
    const token = await auth.verifyIdToken(authorization.slice(7));
    return token.uid;
  } catch {
    sendJson(response, 401, { error: "Invalid authentication token" });
    return null;
  }
}

async function billing(request, response) {
  if (request.method !== "GET") {
    sendJson(response, 405, { error: "Method not allowed" });
    return;
  }
  const userId = await verifyUser(request, response);
  if (!userId) return;

  try {
    const userSnapshot = await db.collection("users").doc(userId).get();
    const userData = userSnapshot.exists ? userSnapshot.data() : {};
    const trialStartedAt = userData.trialStartedAt?.toMillis?.() || Date.now();
    const trialEndsAt = trialStartedAt + trialDays * 24 * 60 * 60 * 1000;
    const dateKey = new Date().toISOString().slice(0, 10);
    const usageSnapshot = await db.collection("translationUsage").doc(`${userId}_${dateKey}`).get();
    const usedToday = usageSnapshot.exists ? usageSnapshot.data().count || 0 : 0;
    const subscriptionActive = await hasActiveSubscription(userId);
    sendJson(response, 200, {
      subscriptionActive,
      trialActive: Date.now() < trialEndsAt,
      trialEndsAt,
      usedToday,
      dailyFreeLimit
    });
  } catch (error) {
    logger.error("Billing status lookup failed", error);
    sendJson(response, 502, { error: "Billing status unavailable" });
  }
}

async function reserveTranslation(userId) {
  const userRef = db.collection("users").doc(userId);
  const dateKey = new Date().toISOString().slice(0, 10);
  const usageRef = db.collection("translationUsage").doc(`${userId}_${dateKey}`);
  const now = Date.now();
  return db.runTransaction(async (transaction) => {
    const userSnapshot = await transaction.get(userRef);
    const userData = userSnapshot.exists ? userSnapshot.data() : {};
    const trialStartedAt = userData.trialStartedAt?.toMillis?.() || now;
    const trialActive = now - trialStartedAt < trialDays * 24 * 60 * 60 * 1000;
    const subscriptionActive = await hasActiveSubscription(userId);
    if (!trialActive && !subscriptionActive) {
      const error = new Error("Free trial ended");
      error.code = "TRIAL_EXPIRED";
      throw error;
    }
    if (trialActive && !subscriptionActive) {
      const usageSnapshot = await transaction.get(usageRef);
      if (!userSnapshot.exists) transaction.set(userRef, { trialStartedAt: FieldValue.serverTimestamp() });
      const count = usageSnapshot.exists ? usageSnapshot.data().count || 0 : 0;
      if (count >= dailyFreeLimit) {
        const error = new Error("Daily translation limit reached");
        error.code = "DAILY_LIMIT";
        throw error;
      }
      transaction.set(usageRef, { count: count + 1, userId, dateKey, updatedAt: FieldValue.serverTimestamp() });
    } else if (!userSnapshot.exists) {
      transaction.set(userRef, { trialStartedAt: FieldValue.serverTimestamp() });
    }
    return { trialActive, subscriptionActive };
  });
}

async function translate(request, response) {
  if (request.method !== "POST") {
    sendJson(response, 405, { error: "Method not allowed" });
    return;
  }

  const text = typeof request.body?.text === "string" ? request.body.text.trim() : "";
  const source = request.body?.sourceLanguage === "English" ? "en" : "lg";
  const target = source === "en" ? "lg" : "en";

  if (!text) {
    sendJson(response, 400, { error: "Text is required" });
    return;
  }
  if (text.length > 240) {
    sendJson(response, 413, { error: "Text is too long" });
    return;
  }

  const userId = await verifyUser(request, response);
  if (!userId) return;

  try {
    const access = await reserveTranslation(userId);
    const [translationResponse] = await translationClient.translateText({
      parent: `projects/${projectId}/locations/global`,
      contents: [text],
      mimeType: "text/plain",
      sourceLanguageCode: source,
      targetLanguageCode: target
    });
    const translation = translationResponse.translations?.[0]?.translatedText;
    if (!translation) throw new Error("Google Cloud returned no translation");

    try {
      await db.collection("translationRequests").add({ userId, source, target, characterCount: text.length, createdAt: FieldValue.serverTimestamp() });
    } catch (error) {
      logger.error("Usage recording failed", error);
    }

    sendJson(response, 200, { translation, ...access });
  } catch (error) {
    if (error.code === "DAILY_LIMIT") {
      sendJson(response, 429, { error: "Your 50 free translations for today are used up.", code: error.code });
      return;
    }
    if (error.code === "TRIAL_EXPIRED") {
      sendJson(response, 402, { error: "Your free week has ended. Choose a plan to continue.", code: error.code });
      return;
    }
    logger.error("Translation failed", error);
    sendJson(response, 502, { error: "Translation service unavailable" });
  }
}

async function api(request, response) {
  if (request.path.endsWith("/billing")) return billing(request, response);
  return translate(request, response);
}

exports.api = onRequest({ region: "us-central1", cors: true }, api);

exports.revenueCatWebhook = onRequest({ region: "us-central1" }, async (request, response) => {
  if (request.method !== "POST") {
    sendJson(response, 405, { error: "Method not allowed" });
    return;
  }
  if (!revenueCatWebhookSecret || request.headers.authorization !== `Bearer ${revenueCatWebhookSecret}`) {
    sendJson(response, 401, { error: "Unauthorized webhook" });
    return;
  }

  const event = request.body?.event;
  const userId = event?.app_user_id;
  if (!userId || !event?.type) {
    sendJson(response, 400, { error: "Invalid RevenueCat event" });
    return;
  }

  const activeEvents = new Set(["INITIAL_PURCHASE", "RENEWAL", "UNCANCELLATION", "NON_RENEWING_PURCHASE"]);
  const inactiveEvents = new Set(["EXPIRATION"]);
  if (activeEvents.has(event.type) || inactiveEvents.has(event.type)) {
    await db.collection("users").doc(userId).set({
      revenueCatActive: activeEvents.has(event.type),
      revenueCatEvent: event.type,
      revenueCatUpdatedAt: FieldValue.serverTimestamp()
    }, { merge: true });
  }
  sendJson(response, 200, { received: true });
});
