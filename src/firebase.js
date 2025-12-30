// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBdvB1mhaQyxN4p8fPGM2kBncm6g7Bgr08",
  authDomain: "cilicon-d5b3f.firebaseapp.com",
  projectId: "cilicon-d5b3f",
  storageBucket: "cilicon-d5b3f.appspot.com",
  messagingSenderId: "1033780704978",
  appId: "1:1033780704978:web:1c0adbfb81aef99aec9f0b",
};

const app = initializeApp(firebaseConfig);

// ✅ Firebase services export
export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;
