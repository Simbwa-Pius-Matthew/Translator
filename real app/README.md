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

## Publish on Vercel

1. Import this folder into a Vercel project, or install the Vercel CLI with `npm install -g vercel`.
2. Set `GOOGLE_CLOUD_PROJECT` and `GOOGLE_SERVICE_ACCOUNT_JSON` in the Vercel project environment variables. The service account needs the **Cloud Translation API User** role.
3. `GOOGLE_TRANSLATE_API_KEY` can be used instead when service-account authentication is unavailable.
4. Deploy from this folder with `vercel --prod`.

Vercel serves the static pages and exposes the native serverless routes in `api/translate.js` and `api/speak.js`. Google credentials stay in Vercel environment variables and never ship to the browser. The login screen remains as a provider-neutral placeholder until an authentication provider is selected.
