import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

  authDomain: "prompt-en
  storageBucket: "prompt-engineering-l.firebasestora
  appId: "1:1023125908531:web:876c1bb04d7962ce120746"
  projectId: "prompt-engineering-l",
  storageBucket: "prompt-engineering-l.firebasestorage.app",
  messagingSenderId: "1023125908531",
  appId: "1:1023125908531:web:876c1bb04d7962ce120746",
  measurementId: "G-N04WCLPJGE"
};

export const app = initializeApp(firebaseConfig);
export const analytics = typeof window !== 'undefined' ? getAnalytics(app) : null;
