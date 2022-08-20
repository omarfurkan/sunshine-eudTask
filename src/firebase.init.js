// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDbHCgNT1Jta83ufHNZ1CDcOKaEh3JBLiQ",
    authDomain: "edutask-7dc04.firebaseapp.com",
    projectId: "edutask-7dc04",
    storageBucket: "edutask-7dc04.appspot.com",
    messagingSenderId: "824641183967",
    appId: "1:824641183967:web:3b3d5ec6b1b28cb27b896a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
export default auth;