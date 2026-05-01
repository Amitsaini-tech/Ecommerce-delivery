// Firebase Client SDK — Elivery Project
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: "AIzaSyDaP3NPD6RRbLk1R9Po7l2gPZZEzLCwKCs",
  authDomain: "elivery-914c8.firebaseapp.com",
  projectId: "elivery-914c8",
  storageBucket: "elivery-914c8.firebasestorage.app",
  messagingSenderId: "1011431971857",
  appId: "1:1011431971857:web:07bdc131152feb7c3a65b0",
  measurementId: "G-WSSEFGSSXT"
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Services
export const auth      = getAuth(app);
export const db        = getFirestore(app);
export const analytics = getAnalytics(app);

export default app;
