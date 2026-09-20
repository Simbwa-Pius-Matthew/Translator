# LUGAFLOW

A small English and Luganda translator with a local phrasebook fallback and an optional Google Cloud Translation backend.

The suggested public service name is `lugaflow`. Render can deploy this app using the included `render.yaml`, which provides a URL such as `https://lugaflow.onrender.com`.

## Run locally

1. Install Node.js 18 or newer.
2. Enable the **Cloud Translation API** in a Google Cloud project and create an API key.
3. Set the key in PowerShell:

```powershell
$env:GOOGLE_TRANSLATE_API_KEY = "your_google_cloud_translation_api_key"
```

4. Start the app:

```powershell
npm start
```

5. Open `http://localhost:3000`.

The API key stays on the server. If it is not configured or Google is unavailable, the app uses its built-in phrasebook.

## Publish on Render

1. Put this folder in a GitHub repository.
2. In Render, choose **New +** and **Blueprint** and select the repository.
3. Set `GOOGLE_TRANSLATE_API_KEY` in the service environment settings.
4. Deploy the service. Render will provide the initial `lugaflow.onrender.com` address.
5. Add a custom domain in Render if you own one, then point its DNS records to Render.

## Publish to Firebase at lugaflow.web.app

The exact `lugaflow.web.app` address requires a Firebase project whose project ID is `lugaflow`.

1. Install the Firebase CLI: `npm install -g firebase-tools`
2. Sign in: `firebase login`
3. From this folder, connect the project: `firebase use --add` and select the `lugaflow` project.
4. Deploy the static app: `firebase deploy --only hosting`

Firebase will then publish the app at `https://lugaflow.web.app` and its equivalent `https://lugaflow.firebaseapp.com` address.
