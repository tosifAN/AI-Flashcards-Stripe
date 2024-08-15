// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirebase } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCdX0FDZvnbeFO2taAVZubh4-hCFFrUypU",
    authDomain: "flashcardsaas-fb818.firebaseapp.com",
    projectId: "flashcardsaas-fb818",
    storageBucket: "flashcardsaas-fb818.appspot.com",
    messagingSenderId: "381832520810",
    appId: "1:381832520810:web:9d685677a4685de0039613",
    measurementId: "G-FHBYZXDLN9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirebase(app);

export {db};