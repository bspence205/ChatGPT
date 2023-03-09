import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAmA7SHGj33jEEc3o0BMWXxYPXPzQKo2dE",
  authDomain: "chatgpt-messenger-d665d.firebaseapp.com",
  projectId: "chatgpt-messenger-d665d",
  storageBucket: "chatgpt-messenger-d665d.appspot.com",
  messagingSenderId: "792713352261",
  appId: "1:792713352261:web:cb06a5306744db78a5bf2c",
  measurementId: "G-YHQ13R4S25"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
