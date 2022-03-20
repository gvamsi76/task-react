
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDFhRWqXEwc84rFfaUAg24dqfQYBip2Or8",
  authDomain: "house-marketplace-app-a87e9.firebaseapp.com",
  projectId: "house-marketplace-app-a87e9",
  storageBucket: "house-marketplace-app-a87e9.appspot.com",
  messagingSenderId: "349043137668",
  appId: "1:349043137668:web:fc2fa520fde99a67aaf6d1",
  measurementId: "G-4XZEJ75HTF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db =getFirestore()