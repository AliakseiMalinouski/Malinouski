import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAPBIU0XaBDmyRGcQP75Vc4Eh0CbFaZ_Ng",
  authDomain: "spending-ww-money.firebaseapp.com",
  projectId: "spending-ww-money",
  storageBucket: "spending-ww-money.appspot.com",
  messagingSenderId: "880296045979",
  appId: "1:880296045979:web:4f5d45332ef71ae2e2c53e",
  measurementId: "G-397DE1YW0Q"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const analytics = getAnalytics(app);