// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB0J7eYZFsrLhadZATfQxknGTYFtH3pCLQ",
  authDomain: "chat-app-a5e64.firebaseapp.com",
  projectId: "chat-app-a5e64",
  storageBucket: "chat-app-a5e64.appspot.com",
  messagingSenderId: "616421817120",
  appId: "1:616421817120:web:52f8cd4e1f2c595e403545"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();

export { auth, db } ;