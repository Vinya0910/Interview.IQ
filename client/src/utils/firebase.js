
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
   authDomain: "interviewiq-3bc00.firebaseapp.com",
  projectId: "interviewiq-3bc00",
  storageBucket: "interviewiq-3bc00.firebasestorage.app",
  messagingSenderId: "168039035479",
  appId: "1:168039035479:web:42c4e50c71aad0c0bb6912",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth , provider}