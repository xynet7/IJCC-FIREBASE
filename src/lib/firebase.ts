
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  "projectId": "indo-japan-chamber-hub",
  "appId": "1:771398335372:web:b649d5fb28acba28fcb4a9",
  "storageBucket": "indo-japan-chamber-hub.firebasestorage.app",
  "apiKey": "AIzaSyBal5EXOrligIPVBLmSsbqUlGeZB68uzQU",
  "authDomain": "indo-japan-chamber-hub.firebaseapp.com",
  "measurementId": "",
  "messagingSenderId": "771398335372"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);

export { app, auth };
