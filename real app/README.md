# LUGAFLOW

A small English and Luganda translator with a local phrasebook fallback and an optional Google Cloud Translation backend.

The suggested public service name is `lugaflow`. Render can deploy this app using the included `render.yaml`, which provides a URL such as `https://lugaflow.onrender.com`.

## Run locally

1. Install Node.js 18 or newer.
2. Enable the **Cloud Translation API** in a Google Cloud project.
3. Install dependencies:

```powershell
npm install
```

4. For the authenticated Cloud Translation client, sign in with Google Cloud and set the project:

```powershell
gcloud auth application-default login
$env:GOOGLE_CLOUD_PROJECT = "your_google_cloud_project_id"
```

An API key is still supported as a fallback:

```powershell
$env:GOOGLE_TRANSLATE_API_KEY = "your_google_cloud_translation_api_key"
```

5. Start the app:

```powershell
npm start
```

6. Open `http://localhost:3000`.

The API key stays on the server. If it is not configured or Google is unavailable, the app uses its built-in phrasebook.

## Publish on Render

1. Put this folder in a GitHub repository.
2. In Render, choose **New +** and **Blueprint** and select the repository.
3. Set `GOOGLE_CLOUD_PROJECT` and `GOOGLE_SERVICE_ACCOUNT_JSON` to a service-account JSON object with the **Cloud Translation API User** role. `GOOGLE_TRANSLATE_API_KEY` can be used instead when service-account authentication is unavailable.
4. Deploy the service. Render will provide the initial `lugaflow.onrender.com` address.
5. Add a custom domain in Render if you own one, then point its DNS records to Render.

## Publish to Firebase at lugaflow.web.app

The exact `lugaflow.web.app` address requires a Firebase project whose project ID is `lugaflow`.

1. Install the Firebase CLI: `npm install -g firebase-tools`
2. Sign in: `firebase login`
3. From this folder, connect the project: `firebase use --add` and select the `lugaflow` project.
4. In Google Cloud, enable **Cloud Translation API**, **Cloud Functions**, and **Cloud Firestore** for the same project. The Firebase Functions runtime service account needs the **Cloud Translation API User** role.
5. In Firebase Console, enable **Authentication > Sign-in method > Google**, register a Web app, and copy its public config into `firebase-config.js`.
6. In RevenueCat, create a Web Billing configuration and an entitlement named `pro`. Copy the public Web SDK key into `firebase-config.js` and put the secret API key in `functions/.env` using [functions/.env.example](functions/.env.example).
7. Set RevenueCat's webhook URL to `https://lugaflow.web.app/revenueCatWebhook` and use the same `REVENUECAT_WEBHOOK_SECRET` value in Functions.
8. Install the backend dependencies and deploy Hosting, Functions, and Firestore rules:

```powershell
cd functions
npm install
cd ..
firebase deploy --only hosting,functions,firestore
```

The browser calls `/api/translate` and `/api/billing`, which Firebase Hosting rewrites to the `api` function. The billing endpoint is the server-side source of truth for trial status, daily usage, and RevenueCat entitlements. Translation credentials and the RevenueCat secret stay in the Google Cloud runtime and never ship to the browser. Firebase Auth identifies users, Firestore enforces the seven-day trial and 50-per-day allowance, and RevenueCat entitlements unlock paid access. The paywall is presented by the RevenueCat Web SDK after the backend approves the account state.

Firebase will then publish the app at `https://lugaflow.web.app` and its equivalent `https://lugaflow.firebaseapp.com` address.
