// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyChvc4CjlT9vL1ZaXyZ0efWuoU6XxxeV8g",
    authDomain: import.meta.env.VITE_BACKEND_AUTHDOMAIN,
    projectId: import.meta.env.VITE_BACKEND_PROJECTID,
    storageBucket: import.meta.env.VITE_BACKEND_STOGAREBUCKET,
    messagingSenderId: import.meta.env.VITE_BACKEND_MESSAGINGSENDERID,
    appId: import.meta.env.VITE_BACKEND_APPID,
    measurementId: import.meta.env.VITE_BACKEND_MEASUREMENTID
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)