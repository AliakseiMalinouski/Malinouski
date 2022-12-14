
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: process.env.REACT__APP__FIREBASE__API__KEY,
  authDomain: process.env.REACT__APP__FIREBASE__AUTH__DOMAIN,
  projectId: process.env.REACT__APP__FIREBASE__PROJECT__ID,
  storageBucket: process.env.REACT__APP__FIREBASE__STORAGE__BUCKET,
  messagingSenderId: process.env.REACT__APP__FIREBASE__MESSAGING__SENDER__ID,
  appId: process.env.REACT__APP__FIREBASE__APP__ID,
  measurementId: process.env.REACT__APP__FIREBASE__M__ID
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const analytics = getAnalytics(app);