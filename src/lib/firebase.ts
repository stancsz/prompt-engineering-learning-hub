import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB7qZ6x_9Z8Z6Z8Z6Z8Z6Z8Z6Z8Z6Z8Z6Z",
  authDomain: "prompt-eng.firebaseapp.com",
  projectId: "prompt-eng",
  storageBucket: "prompt-eng.appspot.com",
  messagingSenderId: "1023125908531",
  appId: "1:1023125908531:web:abcdef1234567890",
  measurementId: "G-N04WCLPJGE"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);