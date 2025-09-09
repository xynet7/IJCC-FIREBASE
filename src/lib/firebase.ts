import { initializeApp, getApps, getApp, FirebaseApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, Firestore } from "firebase/firestore";

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
let app: FirebaseApp;
if (getApps().length === 0) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApp();
}

const auth = getAuth(app);
const db: Firestore = getFirestore(app);

export { app, auth, db };
