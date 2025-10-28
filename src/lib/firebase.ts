import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDfViiG8mhz-uGDIIEeMaiXB8_ww0mMWx4",
  authDomain: "prompt-engineering-l.firebaseapp.com",
  projectId: "prompt-engineering-l",
  storageBucket: "prompt-engineering-l.firebasestorage.app",


};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
