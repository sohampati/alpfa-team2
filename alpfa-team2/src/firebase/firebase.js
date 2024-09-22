import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB2IbTYjX-i9YwfkhHaStTRbP2pOfOKclk",
  authDomain: "alpfa-team2.firebaseapp.com",
  projectId: "alpfa-team2",
  storageBucket: "alpfa-team2.appspot.com",
  messagingSenderId: "1087045121462",
  appId: "1:1087045121462:web:67fb983d787bed26eabd17",
  measurementId: "G-1X31JS8H4D"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

console.log('Firebase is connected:', app.name); // Should log "[DEFAULT]"


export { app, auth, GoogleAuthProvider, db };