import firebase from "firebase";
import "firebase/auth";

// replace this with your credentials

const firebaseConfig = {
  apiKey: "AIzaSyDJuJ4kKonqfptUPYd4tni-MXvR1j-caSM",
  authDomain: "weddingkik.firebaseapp.com",
  projectId: "weddingkik",
  storageBucket: "weddingkik.appspot.com",
  messagingSenderId: "482832104157",
  appId: "1:482832104157:web:35d297554e3e37886eb934",
  measurementId: "G-SHN0MQTXYH",
};
// ----------------------------------------//
const fire = firebase.initializeApp(firebaseConfig);

export const auth = fire.auth();

export default fire;
