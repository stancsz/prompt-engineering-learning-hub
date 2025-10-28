import { initializeApp } from 'firebase/app'
import { getAuth, connectAuthEmulator } from 'firebase/auth'
import { getFirestore, connectFirestoreEmulator } from 'firebase/firestore'
import { initializeAppCheck, ReCaptchaV3Provider } from 'firebase/app-check'

const firebaseConfig = {
  apiKey: "AIzaSyDfViiG8mhz-uGDIIEeMaiXB8_ww0mMWx4",
  authDomain: "prompt-engineering-l.firebaseapp.com",
  projectId: "prompt-engineering-l",
  storageBucket: "prompt-engineering-l.firebasestorage.app",
  messagingSenderId: "1023125908531",
  appId: "1:1023125908531:web:876c1bb04d7962ce120746",
  measurementId: "G-N04WCLPJGE"
}

const app = initializeApp(firebaseConfig)

// Authentication and Firestore exports used by the app
export const auth = getAuth(app)
export const db = getFirestore(app)

/*
  Emulator wiring:
  - For local development set VITE_FIREBASE_EMULATOR=true in your .env
  - Auth emulator default port: 9099
  - Firestore emulator default port: 8080
*/
const useEmulator =
  import.meta.env.VITE_FIREBASE_EMULATOR === 'true' ||
  typeof window !== 'undefined' && window.location.hostname === 'localhost'

if (useEmulator) {
  try {
    connectAuthEmulator(auth, 'http://localhost:9099', { disableWarnings: true })
    connectFirestoreEmulator(db, 'localhost', 8080)
    // eslint-disable-next-line no-console
    console.info('Connected Firebase Auth + Firestore to emulators.')
  } catch (e) {
    // eslint-disable-next-line no-console
    console.warn('Failed to connect to Firebase emulators:', e)
  }
}

/*
  App Check (recommended)
  - To protect your Firebase backend, enable App Check in the Firebase console and set
    VITE_RECAPTCHA_SITE_KEY to your reCAPTCHA v3 site key. During local dev you can
    use the debug provider (set VITE_APP_CHECK_DEBUG=true).
  - No secret keys are stored in the repo.
*/
const siteKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY
const appCheckDebug = import.meta.env.VITE_APP_CHECK_DEBUG === 'true'

if (siteKey) {
  initializeAppCheck(app, {
    provider: new ReCaptchaV3Provider(siteKey),
    isTokenAutoRefreshEnabled: true
  })
} else if (appCheckDebug) {
  // Enable debug mode for local testing. Follow Firebase docs to set FIREBASE_APPCHECK_DEBUG_TOKEN in the browser.
  // eslint-disable-next-line no-console
  console.info('App Check debug mode enabled (VITE_APP_CHECK_DEBUG=true).')
}
