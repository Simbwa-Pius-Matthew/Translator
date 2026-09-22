const dictionary = {
  "oli otya": "How are you?",
  "oli otya?": "How are you?",
  "mwasuze mutya": "How did you sleep?",
  "mwasuze mutya?": "How did you sleep?",
  "wasuze otya": "How did you sleep?",
  "wasuze otya?": "How did you sleep?",
  "gyebale ko": "Well done",
  "gyebale ko!": "Well done",
  "webale": "Thank you",
  "webale nnyo": "Thank you very much",
  "webale nnyo!": "Thank you very much",
  "nkwagala": "I love you",
  "nkwagala nnyo": "I love you very much",
  "nsanyuse okukulaba": "I am happy to see you",
  "tukusanyukidde": "We are happy to have you",
  "erinnya lyo ggwe ani": "What is your name?",
  "oyitibwa ani": "What is your name?",
  "erinnya lyange": "My name is",
  "nsaba oyambe": "Please help me",
  "mpola mpola": "Slowly, slowly",
  "kaakati": "Now",
  "enkya": "Tomorrow",
  "leero": "Today",
  "amazzi": "Water",
  "emmere": "Food",
  "mirembe": "Peace / Hello",
  "ssebo": "Sir",
  "nnyabo": "Madam",
  "yego": "Yes",
  "nedda": "No",
  "ssebo webale": "Thank you, sir",
  "nnyabo webale": "Thank you, madam",
  "oli bulungi": "Are you well?",
  "ndi bulungi": "I am well",
  "mwebale nnyo": "Thank you all very much",
  "mwasibula mutya": "How was your day?",
  "mwasibula mutya?": "How was your day?",
  "mukomyeewo": "Welcome back",
  "tukusanyukidde okukulaba": "We are happy to see you",
  "sula bulungi": "Sleep well",
  "weebale okumpulira": "Thank you for listening to me",
  "nsonyiwa": "Excuse me / Forgive me",
  "nsaba": "Please",
  "ka nsabe": "Let me ask",
  "tewali buzibu": "No problem",
  "kale": "Okay / All right",
  "mazima": "Really / Truly",
  "mpulira": "I understand / I hear you",
  "sitetegedde": "I do not understand",
  "oyogera lulimi ki": "What language do you speak?",
  "oyogera lungereza": "Do you speak English?",
  "njogera luganda katono": "I speak a little Luganda",
  "njagala okuyiga olulimi oluganda": "I want to learn Luganda",
  "ogenda wa": "Where are you going?",
  "ova wa": "Where are you from?",
  "ntudde wano": "I live here",
  "ndi mugenyi": "I am a visitor",
  "wali otya": "How are things?",
  "ebigambo": "Words",
  "olunaku olulungi": "Have a good day",
  "weekende ennungi": "Have a good weekend",
  "tulabe": "See you",
  "tulabagane": "See you later",
  "nkwagaliza olugendo olulungi": "I wish you a good journey",
  "mukama akuwe omukisa": "God bless you",
  "ssanyu": "Happiness",
  "osanyuse": "Be happy",
  "nina essanyu": "I am happy",
  "ndi munafu": "I am tired",
  "ndi mulwadde": "I am sick",
  "nina enjala": "I am hungry",
  "nina ennyonta": "I am thirsty",
  "njagala amazzi": "I want water",
  "njagala emmere": "I want food",
  "emmere eno nnungi": "This food is delicious",
  "omuwendo gwe guli gutya": "How much does it cost?",
  "kikendeezeeko": "Reduce the price",
  "njagala kino": "I want this",
  "sijagala kino": "I do not want this",
  "waliwo ekifo ekyokulya": "Is there a place to eat?",
  "wc eri ludda wa": "Where is the toilet?",
  "edduuka liri ludda wa": "Where is the shop?",
  "ddwaliro liri ludda wa": "Where is the hospital?",
  "nzijukira ekkubo": "I know the way",
  "sibuuze kkubo": "I am lost",
  "nyamba": "Help me",
  "yita poliisi": "Call the police",
  "waliwo obubenje": "There is an accident",
  "yimirira wano": "Stop here",
  "genda mpola": "Go slowly",
  "kuba ku kkono": "Turn left",
  "kuba ku ddyo": "Turn right",
  "genda butereevu": "Go straight",
  "kumpi": "Near",
  "wala": "Far",
  "ku kkono": "On the left",
  "ku ddyo": "On the right",
  "waggulu": "Up / Above",
  "wansi": "Down / Below",
  "omu maaso": "In front",
  "ennyuma": "Behind",
  "essaawa emeka": "What time is it?",
  "kati essaawa emeka": "What time is it now?",
  "ku makya": "In the morning",
  "akawungeezi": "In the evening",
  "obudde": "Time / Weather",
  "enkya ku makya": "Tomorrow morning",
  "jjo": "Yesterday",
  "sabbiiti eno": "This week",
  "omwaka omulungi": "Happy New Year",
  "amazaalibwa amalungi": "Happy birthday",
  "mwebale okujja": "Thank you for coming",
  "nsanyuse okukumanya": "I am happy to know you",
  "njakukuba essimu": "I will call you",
  "tukomyeewo": "We have returned",
  "ka tugende": "Let us go",
  "tukyalina obudde": "We still have time",
  "nze mpulira bulungi": "I feel well",
  "kino kye ki": "What is this?",
  "kino kya ani": "Whose is this?",
  "ogamba ki": "What do you say?",
  "ddamu": "Repeat",
  "yogera mpola": "Speak slowly",
  "wandiika": "Write it down",
  "nsonyiwa nnyo": "I am very sorry",
  "sikyagala": "I do not like it",
  "nkyagala": "I still like it",
  "kituufu": "That is correct",
  "si kituufu": "That is not correct",
  "mpa akaseera": "Give me a moment",
  "ndijja nate": "I will come again",
  "nkwagaliza akalungi": "I wish you well"
};

const phraseItems = [
  ["amazzi", "water"], ["emmere", "food"], ["ssente", "money"], ["obudde", "time"],
  ["obuyambi", "help"], ["eddagala", "medicine"], ["essimu", "a phone"], ["tikiti", "a ticket"],
  ["paasipooti", "a passport"], ["ekitabo", "a book"], ["olupapula", "paper"], ["ekalamu", "a pen"],
  ["ennyumba", "a house"], ["ekisumuluzo", "a key"], ["ensawo", "a bag"], ["engoye", "clothes"],
  ["engatto", "shoes"], ["ekitanda", "a bed"], ["entebe", "a chair"], ["emmeeza", "a table"],
  ["ekikopo", "a cup"], ["essowaani", "a plate"], ["akawunga", "porridge"], ["omuceere", "rice"],
  ["ennyama", "meat"], ["enkoko", "chicken"], ["amagi", "eggs"], ["ebibala", "fruit"],
  ["ebijanjaalo", "beans"], ["matooke", "matoke"], ["omukyala", "a woman"], ["omusajja", "a man"],
  ["omwana", "a child"], ["mukwano", "a friend"], ["omusawo", "a doctor"], ["omusomesa", "a teacher"],
  ["omupoliisi", "a police officer"], ["omuvuzi", "a driver"], ["omugenyi", "a visitor"], ["omukulembeze", "a leader"],
  ["ekibuga", "the city"], ["eddwaliro", "the hospital"], ["edduuka", "the shop"], ["ssomero", "the school"],
  ["hoteri", "the hotel"], ["banka", "the bank"], ["kkanisa", "the church"], ["omuzikiti", "the mosque"],
  ["Kampala", "Kampala"], ["Jinja", "Jinja"], ["Entebbe", "Entebbe"], ["Masaka", "Masaka"],
  ["Uganda", "Uganda"], ["olugendo", "the journey"], ["emmotoka", "the car"], ["pikipiki", "the motorcycle"]
];

const phraseTemplates = [
  ["njagala {lug}", "I want {en}"],
  ["njagala {lug} nnyo", "I really want {en}"],
  ["nina {lug}", "I have {en}"],
  ["sirina {lug}", "I do not have {en}"],
  ["nkwetaaga {lug}", "I need {en}"],
  ["sikwetaaga {lug}", "I do not need {en}"],
  ["mpa {lug}", "Give me {en}"],
  ["mpa {lug} katono", "Give me a little {en}"],
  ["oyagala {lug}?", "Do you want {en}?"],
  ["olina {lug}?", "Do you have {en}?"],
  ["osobola okumpa {lug}?", "Can you give me {en}?"],
  ["njagala okugula {lug}", "I want to buy {en}"],
  ["njagala okutunda {lug}", "I want to sell {en}"],
  ["njagala okulaba {lug}", "I want to see {en}"],
  ["njagala okumanya {lug}", "I want to know about {en}"],
  ["{lug} eri ludda wa?", "Where is {en}?"],
  ["{lug} eri kumpi?", "Is {en} near?"],
  ["{lug} eri wala?", "Is {en} far?"],
  ["genda ku {lug}", "Go to {en}"],
  ["ndi ku {lug}", "I am at {en}"]
];

for (const [lugandaTemplate, englishTemplate] of phraseTemplates) {
  for (const [lugandaTerm, englishTerm] of phraseItems) {
    const luganda = lugandaTemplate.replace("{lug}", lugandaTerm);
    const english = englishTemplate.replace("{en}", englishTerm);
    dictionary[luganda] = english;
  }
}

const pairedPhraseTemplates = [
  ["njagala {lugA} ne {lugB}", "I want {enA} and {enB}"],
  ["nina {lugA} ne {lugB}", "I have {enA} and {enB}"],
  ["nkwetaaga {lugA} ne {lugB}", "I need {enA} and {enB}"],
  ["njagala okugula {lugA} ne {lugB}", "I want to buy {enA} and {enB}"],
  ["{lugA} ne {lugB} biri ludda wa?", "Where are {enA} and {enB}?"],
  ["{lugA} ne {lugB} biri kumpi?", "Are {enA} and {enB} near?"],
  ["{lugA} ne {lugB} biri wala?", "Are {enA} and {enB} far?"],
  ["mpa {lugA} ne {lugB}", "Give me {enA} and {enB}"],
  ["ndaba {lugA} ne {lugB}", "I see {enA} and {enB}"],
  ["nalaba {lugA} ne {lugB}", "I saw {enA} and {enB}"],
  ["njagala okulaba {lugA} ne {lugB}", "I want to see {enA} and {enB}"],
  ["njagala okumanya ku {lugA} ne {lugB}", "I want to know about {enA} and {enB}"],
  ["njogera ku {lugA} ne {lugB}", "I am talking about {enA} and {enB}"],
  ["mpulira ku {lugA} ne {lugB}", "I hear about {enA} and {enB}"],
  ["yogera ku {lugA} ne {lugB}", "Talk about {enA} and {enB}"],
  ["wandiika ku {lugA} ne {lugB}", "Write about {enA} and {enB}"],
  ["soma ku {lugA} ne {lugB}", "Read about {enA} and {enB}"],
  ["njagala okwogera ku {lugA} ne {lugB}", "I want to talk about {enA} and {enB}"],
  ["njagala okuyiga ku {lugA} ne {lugB}", "I want to learn about {enA} and {enB}"],
  ["nsobola okulaba {lugA} ne {lugB}", "I can see {enA} and {enB}"],
  ["nsobola okugula {lugA} ne {lugB}", "I can buy {enA} and {enB}"],
  ["nsobola okutunda {lugA} ne {lugB}", "I can sell {enA} and {enB}"],
  ["nsobola okutwala {lugA} ne {lugB}", "I can take {enA} and {enB}"],
  ["nsobola okuleeta {lugA} ne {lugB}", "I can bring {enA} and {enB}"],
  ["njagala okutwala {lugA} ne {lugB}", "I want to take {enA} and {enB}"],
  ["njagala okuleeta {lugA} ne {lugB}", "I want to bring {enA} and {enB}"],
  ["tewali {lugA} ne {lugB}", "There is no {enA} or {enB}"],
  ["waliwo {lugA} ne {lugB}", "There is {enA} and {enB}"],
  ["{lugA} ne {lugB} birungi", "{enA} and {enB} are good"],
  ["{lugA} ne {lugB} bya mugaso", "{enA} and {enB} are useful"],
  ["{lugA} ne {lugB} byangu", "{enA} and {enB} are easy"],
  ["{lugA} ne {lugB} bikulu", "{enA} and {enB} are important"],
  ["{lugA} ne {lugB} byonna", "All of {enA} and {enB}"],
  ["kati nnina {lugA} ne {lugB}", "Now I have {enA} and {enB}"]
];

for (const [lugandaTemplate, englishTemplate] of pairedPhraseTemplates) {
  for (const [lugandaTermA, englishTermA] of phraseItems) {
    for (const [lugandaTermB, englishTermB] of phraseItems) {
      if (lugandaTermA === lugandaTermB) continue;
      dictionary[lugandaTemplate
        .replace("{lugA}", lugandaTermA)
        .replace("{lugB}", lugandaTermB)] = englishTemplate
        .replace("{enA}", englishTermA)
        .replace("{enB}", englishTermB);
    }
  }
}

const wordDictionary = {
  oli: "you are", otya: "how", mwasuze: "did you sleep", wasuze: "did you sleep",
  mutya: "how", gyebale: "well done", ko: "you", webale: "thank you", nnyo: "very much",
  nkwagala: "I love you", nsanyuse: "I am happy", okukulaba: "to see you", tukusanyukidde: "we are happy",
  erinnya: "name", lyo: "your", ggwe: "you", ani: "who", oyitibwa: "you are called", nsaba: "please",
  oyambe: "help me", mpola: "slowly", kaakati: "now", enkya: "tomorrow", leero: "today", amazzi: "water",
  emmere: "food", mirembe: "peace", ssebo: "sir", nnyabo: "madam", yego: "yes", nedda: "no"
};

let englishDictionary = Object.fromEntries(
  Object.entries(dictionary).map(([luganda, english]) => [normalizeKey(english), luganda])
);

const englishWordDictionary = {
  "you are": "oli", how: "otya", "did you sleep": "wasuze otya", "well done": "gyebale ko",
  "thank you": "webale", "very much": "nnyo", "i love you": "nkwagala", "i am happy": "nsanyuse",
  "to see you": "okukulaba", "we are happy": "tukusanyukidde", name: "erinnya", your: "lyo",
  you: "ggwe", who: "ani", "you are called": "oyitibwa", please: "nsaba", "help me": "oyambe",
  slowly: "mpola", now: "kaakati", tomorrow: "enkya", today: "leero", water: "amazzi", food: "emmere",
  peace: "mirembe", hello: "mirembe", sir: "ssebo", madam: "nnyabo", yes: "yego", no: "nedda"
};

const sourceText = document.querySelector("#sourceText");
const result = document.querySelector("#result");
const characterCount = document.querySelector("#characterCount");
const matchStatus = document.querySelector("#matchStatus");
const clearButton = document.querySelector("#clearButton");
const copyButton = document.querySelector("#copyButton");
const speakButton = document.querySelector("#speakButton");
const swapButton = document.querySelector("#swapButton");
const translateButton = document.querySelector("#translateButton");
const authStatus = document.querySelector("#authStatus");
const authButton = document.querySelector("#authButton");
const paywall = document.querySelector("#paywall");
const paywallMessage = document.querySelector("#paywallMessage");
const upgradeButton = document.querySelector("#upgradeButton");
let currentUser = null;
let purchases = null;

function configureRevenueCat(user) {
  const sdk = window.Purchases;
  const publicKey = window.LUGAFLOW_REVENUECAT_PUBLIC_KEY;
  if (!user || !publicKey || publicKey.startsWith("YOUR_") || !sdk?.Purchases) return;
  try {
    purchases = sdk.Purchases.configure({ apiKey: publicKey, appUserId: user.uid });
  } catch {
    purchases = null;
  }
}

function updateAuthUI(user) {
  currentUser = user;
  authStatus.textContent = user ? user.email || "Signed in" : "Free trial";
  authButton.textContent = user ? "Sign out" : "Sign in";
  configureRevenueCat(user);
}

function initializeAuth() {
  const config = window.LUGAFLOW_FIREBASE_CONFIG;
  if (!window.firebase || !config || config.apiKey.startsWith("YOUR_")) {
    authStatus.textContent = "Add Firebase config";
    authButton.disabled = true;
    return;
  }
  firebase.initializeApp(config);
  firebase.auth().onAuthStateChanged(updateAuthUI);
  authButton.addEventListener("click", async () => {
    try {
      if (firebase.auth().currentUser) {
        await firebase.auth().signOut();
        return;
      }
      await firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider());
    } catch {
      authStatus.textContent = "Sign-in unavailable";
    }
  });
}

async function getAuthHeaders() {
  if (!currentUser) return { "Content-Type": "application/json" };
  return {
    "Content-Type": "application/json",
    Authorization: `Bearer ${await currentUser.getIdToken()}`
  };
}

async function showPaywall(message) {
  paywall.hidden = false;
  paywallMessage.textContent = message;
  if (!currentUser) {
    paywallMessage.textContent = "Sign in first to view plans and keep your account connected.";
    return;
  }
  try {
    const billingResponse = await fetch("/api/billing", { headers: await getAuthHeaders() });
    if (!billingResponse.ok) throw new Error("Billing status unavailable");
    const billing = await billingResponse.json();
    if (billing.subscriptionActive) {
      paywallMessage.textContent = "Your plan is active. You have unlimited translations.";
      return;
    }
    if (billing.trialActive) {
      paywallMessage.textContent = `${billing.usedToday} of ${billing.dailyFreeLimit} free translations used today.`;
    }
  } catch {
    paywallMessage.textContent = "Plans are temporarily unavailable. Please try again soon.";
    return;
  }
  if (purchases) {
    try {
      const offerings = await purchases.getOfferings();
      if (offerings.current) {
        await purchases.presentPaywall({ htmlTarget: document.querySelector("#paywallContainer"), offering: offerings.current });
      }
    } catch {
      paywallMessage.textContent = "Plans are temporarily unavailable. Please try again soon.";
    }
  }
}

function normalize(text) {
  return text.toLowerCase().trim().replace(/[!?.,;:]+$/g, "").replace(/\s+/g, " ");
}

function normalizeKey(text) {
  return normalize(text).replace(/[!?.,;:]+$/g, "");
}

async function loadPhrasebook() {
  try {
    const response = await fetch("luganda-dictionary.json");
    if (!response.ok) throw new Error("Phrasebook unavailable");
    Object.assign(dictionary, await response.json());
    englishDictionary = Object.fromEntries(
      Object.entries(dictionary).map(([luganda, english]) => [normalizeKey(english), luganda])
    );
  } catch {
    // The embedded phrasebook remains available when the resource cannot load.
  }
}

let sourceLanguage = "Luganda";
let translationRequestId = 0;
let currentTranslation = "";

function translate(text) {
  const normalized = normalize(text);
  if (!normalized) return null;
  const activeDictionary = sourceLanguage === "Luganda" ? dictionary : englishDictionary;
  const activeWordDictionary = sourceLanguage === "Luganda" ? wordDictionary : englishWordDictionary;
  if (activeDictionary[normalized]) return { text: activeDictionary[normalized], exact: true };

  const words = normalized.split(" ").map((word) => activeWordDictionary[word.replace(/[!?.,;:]/g, "")]);
  if (words.every(Boolean)) return { text: words.join(" "), exact: false };
  return { text: "I’m still learning this phrase.", exact: false, unknown: true };
}

function renderLocalTranslation(value) {
  const translation = translate(value);
  result.classList.toggle("translated", Boolean(translation && !translation.unknown));
  if (!translation) {
    result.innerHTML = "Your translation<br /><span>will appear here.</span>";
    matchStatus.textContent = "Ready when you are";
    currentTranslation = "";
    updateSpeakButton();
    return translation;
  }
  result.textContent = translation.text;
  currentTranslation = translation.unknown ? "" : translation.text;
  updateSpeakButton();
  matchStatus.textContent = translation.unknown ? "Connecting to Google Translate..." : translation.exact ? "Phrase match" : "Word by word";
  return translation;
}

async function renderTranslation() {
  const value = sourceText.value;
  characterCount.textContent = `${value.length} / 240`;
  const localTranslation = renderLocalTranslation(value);
  if (!value.trim()) return;

  const requestId = ++translationRequestId;
  try {
    const response = await fetch("/api/translate", {
      method: "POST",
      headers: await getAuthHeaders(),
      body: JSON.stringify({ text: value, sourceLanguage })
    });
    if (response.status === 401) {
      throw new Error("SIGN_IN_REQUIRED");
    }
    if (response.status === 402 || response.status === 429) {
      const limit = await response.json();
      await showPaywall(limit.error || "Your free translation allowance has ended.");
      throw new Error("PAYWALL");
    }
    if (!response.ok) throw new Error("Translation service unavailable");
    const data = await response.json();
    if (requestId !== translationRequestId) return;
    result.textContent = data.translation;
    result.classList.add("translated");
    currentTranslation = data.translation;
    updateSpeakButton();
    matchStatus.textContent = "Google Translate";
  } catch (error) {
    if (requestId !== translationRequestId) return;
    if (error.message === "SIGN_IN_REQUIRED") {
      matchStatus.textContent = "Sign in for Google translation";
    } else if (error.message === "PAYWALL") {
      matchStatus.textContent = "Upgrade to continue";
    } else {
      matchStatus.textContent = localTranslation && !localTranslation.unknown ? "Local phrasebook" : "Translation service unavailable";
    }
  }
}

function updateSpeakButton() {
  speakButton.disabled = !currentTranslation || !("speechSynthesis" in window);
}

function stopSpeaking() {
  if (!("speechSynthesis" in window)) return;
  window.speechSynthesis.cancel();
  speakButton.classList.remove("speaking");
  speakButton.innerHTML = 'Speak <span aria-hidden="true">◖</span>';
}

function findSpeechVoice(language) {
  const voices = window.speechSynthesis.getVoices();
  const normalizedLanguage = language.toLowerCase();
  return voices.find((voice) => voice.lang.toLowerCase() === normalizedLanguage)
    || voices.find((voice) => voice.lang.toLowerCase().startsWith(normalizedLanguage.split("-")[0]));
}

function speakTranslation() {
  if (!currentTranslation || !("speechSynthesis" in window)) return;
  if (speakButton.classList.contains("speaking")) {
    stopSpeaking();
    return;
  }

  const utterance = new SpeechSynthesisUtterance(currentTranslation);
  const targetLanguage = sourceLanguage === "Luganda" ? "en-US" : "lg-UG";
  const voice = findSpeechVoice(targetLanguage);
  utterance.lang = targetLanguage;
  if (voice) utterance.voice = voice;
  utterance.rate = 0.82;
  utterance.pitch = 1;
  utterance.volume = 1;
  utterance.onend = stopSpeaking;
  utterance.onerror = stopSpeaking;
  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(utterance);
  speakButton.classList.add("speaking");
  speakButton.innerHTML = 'Stop <span aria-hidden="true">■</span>';
}

function updateLanguageLabels() {
  const languages = document.querySelectorAll(".language");
  const targetLanguage = sourceLanguage === "Luganda" ? "English" : "Luganda";
  languages[0].textContent = sourceLanguage;
  languages[1].textContent = targetLanguage;
  languages[0].classList.add("active");
  languages[1].classList.remove("active");
  document.querySelector(".eyebrow").innerHTML = `${sourceLanguage} <span>→</span> ${targetLanguage}`;
  document.querySelector(".output-label span").textContent = `${targetLanguage} meaning`;
  sourceText.placeholder = sourceLanguage === "Luganda" ? "Wandika mu Luganda..." : "Write in English...";
  document.title = "LUGAFLOW / Luganda to English";
}

sourceText.addEventListener("input", () => {
  characterCount.textContent = `${sourceText.value.length} / 240`;
});
translateButton.addEventListener("click", renderTranslation);
clearButton.addEventListener("click", () => {
  stopSpeaking();
  sourceText.value = "";
  sourceText.focus();
  renderTranslation();
});

speakButton.addEventListener("click", speakTranslation);

document.querySelectorAll(".example-chip").forEach((chip) => {
  chip.addEventListener("click", () => {
    sourceText.value = chip.dataset.phrase;
    renderTranslation();
    sourceText.focus();
  });
});

copyButton.addEventListener("click", async () => {
  if (!currentTranslation) return;
  await navigator.clipboard.writeText(currentTranslation);
  const original = copyButton.innerHTML;
  copyButton.textContent = "Copied";
  setTimeout(() => { copyButton.innerHTML = original; }, 1400);
});

swapButton.addEventListener("click", () => {
  stopSpeaking();
  sourceLanguage = sourceLanguage === "Luganda" ? "English" : "Luganda";
  updateLanguageLabels();
  renderTranslation();
});

updateLanguageLabels();
updateSpeakButton();
upgradeButton.addEventListener("click", () => showPaywall("Choose a plan to keep translating without the free limit."));
initializeAuth();
loadPhrasebook();
