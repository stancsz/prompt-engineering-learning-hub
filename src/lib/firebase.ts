import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDfViiG8mhz-uGDIIEeMaiXB8_ww0mMWx4",
  authDomain: "prompt-engineering-l.firebaseapp.com",
  projectId: "prompt-engineering-l",
  storageBucket: "prompt-engineering-l.firebasestorage.app",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abcdef123456"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
