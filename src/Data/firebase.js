// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "@firebase/firestore";


import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {

    apiKey: "AIzaSyChvc4CjlT9vL1ZaXyZ0efWuoU6XxxeV8g",
    authDomain: "food-delivery-app-b9b74.firebaseapp.com",
    databaseURL: "https://food-delivery-app-b9b74-default-rtdb.firebaseio.com",
    projectId: "food-delivery-app-b9b74",
    storageBucket: "food-delivery-app-b9b74.appspot.com",
    messagingSenderId: "698833111298",
    appId: "1:698833111298:web:7876bdd0351834409d9a1b",
    measurementId: "G-EH3NQTH866"

};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);



// const userCollection = collection(db, 'users');

export const getData = async () => {
    const res = await getDocs(collection(db, 'restaurantes'));
    return res

}