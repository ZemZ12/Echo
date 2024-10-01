// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth ,createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBojAT_NxEtWw4TlGBeHMwz0yYyHkE_hu8",
  authDomain: "echo-5dffd.firebaseapp.com",
  projectId: "echo-5dffd",
  storageBucket: "echo-5dffd.appspot.com",
  messagingSenderId: "952373774717",
  appId: "1:952373774717:web:ec2d3fa2040587b8106414",
  measurementId: "G-BTK3XPC176"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export {app};

// Initialize Auth
const auth = getAuth(app);
export {auth};

// Initialize Firestore
const db = getFirestore(app);
export {db};