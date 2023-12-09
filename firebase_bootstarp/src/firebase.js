// import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import {getFirestore}from"firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDkQMX_enenw07S1cF0AeegT1uUTIo5TqY",
    authDomain: "webchait.firebaseapp.com",
    projectId: "webchait",
    storageBucket: "webchait.appspot.com",
    messagingSenderId: "978065882249",
    appId: "1:978065882249:web:c9d16a4a0a314a69e35a58",
    measurementId: "G-MMWNJLXD61"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database=getFirestore(app);  
