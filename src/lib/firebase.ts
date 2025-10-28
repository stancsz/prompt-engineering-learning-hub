import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/
const firebaseConfig = {

const firebaseConfig = {
  appId: import.meta.env.VITE_FIREBASE_APP_ID || ''

export const auth = getAuth(app)


  appId: import.meta.env.VITE_FIREBASE_APP_ID || ''
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)