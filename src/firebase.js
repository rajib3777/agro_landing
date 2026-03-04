import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// Firebase configuration provided by the user
const firebaseConfig = {
    apiKey: "AIzaSyCpSa1MJfnsTKzH-0CaDgikLD3Y7y6GfWs",
    authDomain: "alifagro-4ca5d.firebaseapp.com",
    databaseURL: "https://alifagro-4ca5d-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "alifagro-4ca5d",
    storageBucket: "alifagro-4ca5d.firebasestorage.app",
    messagingSenderId: "521940957026",
    appId: "1:521940957026:web:d6d174a95fb863bc145e3b",
    measurementId: "G-3NCY7ZRH3H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
