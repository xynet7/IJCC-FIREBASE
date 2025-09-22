
import { initializeApp, getApps, getApp, FirebaseApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, Firestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "ijcc-backend.firebaseapp.com",
  projectId: "ijcc-backend",
  storageBucket: "ijcc-backend.firebasestorage.app",
  messagingSenderId: "858232635591",
  appId: "1:858232635591:web:d8752c07457afadaff7ee2",
  measurementId: "G-KRL866ZFY6"
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
