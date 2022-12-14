
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBNMBf8lJKiX0GJic0O4W68ROI-lxsKwZ4",
  authDomain: "taprola-56d9f.firebaseapp.com",
  projectId: "taprola-56d9f",
  storageBucket: "taprola-56d9f.appspot.com",
  messagingSenderId: "1099304937656",
  appId: "1:1099304937656:web:7d5d838f9fb36ad131ac4d",
  measurementId: "G-TSYCLNM35F"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const analytics = getAnalytics(app);