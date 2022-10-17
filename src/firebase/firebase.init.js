// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyDTUarZTePT2x4bXJ97clKkwM3euV2pLV8",
  authDomain: "online-shop-79e1d.firebaseapp.com",
  projectId: "online-shop-79e1d",
  storageBucket: "online-shop-79e1d.appspot.com",
  messagingSenderId: "167553927508",
  appId: "1:167553927508:web:0307e8b8fa2fd3e23420c1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
export const Storage = getStorage(app)
export default app