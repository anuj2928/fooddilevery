
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAggORdfEHOF1jQHZl7ebuwkSufyslSwoc",
  authDomain: "newfooddeliver.firebaseapp.com",
  projectId: "newfooddeliver",
  storageBucket: "newfooddeliver.firebasestorage.app",
  messagingSenderId: "888592212278",
  appId: "1:888592212278:web:211f6200df780231bc1397",
  measurementId: "G-BBVQXSLR0F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app)
const provider=new GoogleAuthProvider()
export {provider,auth}