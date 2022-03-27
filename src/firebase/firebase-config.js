// Import the functions you need from the SDKs you need
import {GoogleAuthProvider,FacebookAuthProvider,getAuth} from 'firebase/auth';
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDkxrzI3BsGnh10VGRvnk6QttITaftNV3s",
  authDomain: "react-anime-redux.firebaseapp.com",
  projectId: "react-anime-redux",
  storageBucket: "react-anime-redux.appspot.com",
  messagingSenderId: "696724902193",
  appId: "1:696724902193:web:303fccc3a2f827bd4ce010"
};

// Initialize Firebase
initializeApp(firebaseConfig);
const db = getFirestore();
const googleAuthProvider = new GoogleAuthProvider();
const facebookAuthProvider = new FacebookAuthProvider();
const auth= getAuth();

export {
    db,
    googleAuthProvider,
    facebookAuthProvider,
    auth
}