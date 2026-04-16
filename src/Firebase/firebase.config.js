// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBDZPDpouV_BCwA04pPRR6NF5lkFLxOvLM",
  authDomain: "exportimportbd-cfe6e.firebaseapp.com",
  projectId: "exportimportbd-cfe6e",
  storageBucket: "exportimportbd-cfe6e.firebasestorage.app",
  messagingSenderId: "537447960749",
  appId: "1:537447960749:web:cb3b3f21c4d456bc58f624",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export   const auth = getAuth(app);
