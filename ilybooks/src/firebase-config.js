// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyABbQkZo4xUjCCMaB42y0n9H37vbcRxJPA",
  authDomain: "illybooks.firebaseapp.com",
  projectId: "illybooks",
  storageBucket: "illybooks.appspot.com",
  messagingSenderId: "293289840216",
  appId: "1:293289840216:web:ae3a3f7f0a2f219aa9842d",
  measurementId: "G-B09MQJ998W"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);