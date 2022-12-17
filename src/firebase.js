// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBekBO0MoNIVhtoCOcEITBLB8ZL_FlxMOA",
  authDomain: "ig-reels-clone-67d2f.firebaseapp.com",
  projectId: "ig-reels-clone-67d2f",
  storageBucket: "ig-reels-clone-67d2f.appspot.com",
  messagingSenderId: "945490515932",
  appId: "1:945490515932:web:f23dccded73db19b6d2119",
  measurementId: "G-NBTZXZLJ2P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = firebaseApp.firestore();


export default db;