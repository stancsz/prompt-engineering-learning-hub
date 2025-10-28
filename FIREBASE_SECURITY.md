# Firebase Security & Protection (Prompt Engineering Academy)

This document explains how your Firebase backend is protected, how to test it locally, and recommended next steps to reduce abuse and cost. It documents the protection implemented in this repository.

## Summary — what was added
- Firestore security rules (firebase.rules) were added and deployed. They:
  - Require Firebase Authentication for reads/writes.
  - Restrict users to only read/write their own documents under `/users/{uid}/...`.
  - Limit client-writable fields to an exact approved set for progress tracking.
  - Validate types and reasonable ranges for those fields.
  - Disallow client deletes and block writes to other top-level paths.
- Local emulator wiring was added (src/lib/firebase.ts) so you can test rules and Auth locally.
- Optional Cloud Function scaffolding was included (functions/) for stronger server-side validation / rate limiting — functions are optional; rules alone enforce user isolation.

## Why this protects you
- Firebase client config (apiKey, etc.) is intentionally public; rules prevent clients from reading or writing other users' data even if credentials are known.
- The rules enforce ownership using request.auth.uid. Any unauthenticated or cross-user attempts are rejected by Firestore.
- Field-level constraints reduce the risk of abusive payloads (e.g., sending huge arrays or injecting unexpected fields).
- Denying deletes and blocking unapproved top-level paths reduces accidental or malicious damage.

## Key rule behaviors (from firebase.rules)
- Allowed path: `match /users/{userId}/{doc=**}`:
  - allow read: only if `request.auth.uid == userId`
  - allow create/update: only if `request.auth.uid == userId` AND
    - request data keys are exactly in `['lastCompletedLesson','progressPercent','updatedAt']`
    - `lastCompletedLesson` and `progressPercent` must be ints
    - `progressPercent` ∈ [0, 100]
    - `updatedAt` must be a timestamp and not far in the future (within 1 hour)
  - allow delete: false
- `match /appConfig/{docId}`: read allowed, write denied
- All other paths: read/write denied by default

## Testing locally (recommended)
1. Set env for emulator in `.env`:
   - VITE_FIREBASE_EMULATOR=true
   - VITE_APP_CHECK_DEBUG=true (optional for App Check debug)
2. Start Firebase emulators:
   - firebase emulators:start --only auth,firestore,ui
3. Run the app (dev server). src/lib/firebase.ts auto-connects to the emulator when on localhost or when VITE_FIREBASE_EMULATOR=true.
4. Use the emulator UI (default port 4000) to inspect Auth users and Firestore documents and exercise rules.

Use the Firestore emulator to test both allowed and disallowed operations (different uids, missing fields, bad types, delete attempts).

## Deploying rules
- Ensure you are logged in:
  - npm i -g firebase-tools
  - firebase login
  - firebase use --add (or set project in .firebaserc)
- Deploy rules:
  - firebase deploy --only firestore:rules --project YOUR_PROJECT_ID

The rules compile step will report errors if something doesn't match the rules language.

## App Check (strongly recommended)
- App Check reduces abuse by ensuring only your registered app can call Firebase services.
- Steps:
  1. Register your web app for App Check in the Firebase Console and get a reCAPTCHA v3 site key.
  2. Set VITE_RECAPTCHA_SITE_KEY in production environment.
  3. For local dev, set VITE_APP_CHECK_DEBUG=true and follow Firebase docs to enable debug tokens.
- The repo includes optional App Check wiring in src/lib/firebase.ts.

## Operational recommendations (cost & abuse prevention)
- Set billing budgets & alerts in Google Cloud Billing (recommended thresholds).
- Consider rate-limiting patterns in rules (timestamp checks) or move heavier validation to Cloud Functions for more complex logic.
- Monitor Firestore usage in the Console and create alerts for spikes.

## If you want stronger server-side control
- Cloud Functions provide:
  - Centralized validation, complex business rules, and reliable rate limiting.
  - Writes performed by Admin SDK (trusted), while clients call the function using a verified ID token (+ App Check).
- This repo contains a sample `functions/updateProgress` (optional). Use it if you want:
  - server-side rate limits,
  - stricter validation,
  - or to hide logic from the client completely.

## Example client write (conforms to rules)
Clients that update user progress directly must:
- Be authenticated (firebase auth).
- Write only the approved fields, and use server timestamp for updatedAt when possible.

Example (Firestore web SDK):
```ts
import { doc, setDoc, serverTimestamp } from "firebase/firestore"
import { db, auth } from "@/lib/firebase"

const uid = auth.currentUser?.uid
if (!uid) throw new Error('Not authenticated')
const ref = doc(db, `users/${uid}/progress/doc`)
await setDoc(ref, {
  lastCompletedLesson: 3,
  progressPercent: 25,
  updatedAt: serverTimestamp()
}, { merge: true })
```

If you prefer not to allow direct client writes at all, call a server endpoint (Cloud Function) instead — the function approach was included but is optional.

---

If you’d like, I can:
- Add this doc into the README and link to the deployed rules,
- Remove the Cloud Functions scaffolding if you don’t want it in the repo,
- Or deploy App Check configuration and add guidance to your CI/CD env for VITE_RECAPTCHA_SITE_KEY.
