// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBylpkbmSFFSD2lrKF4dp4RIUOSYi6SQn0",
  authDomain: "netflixgpt-7e017.firebaseapp.com",
  projectId: "netflixgpt-7e017",
  storageBucket: "netflixgpt-7e017.appspot.com",
  messagingSenderId: "980282258521",
  appId: "1:980282258521:web:776b350f52e2b271eaed48",
  measurementId: "G-R0CH858WNP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();