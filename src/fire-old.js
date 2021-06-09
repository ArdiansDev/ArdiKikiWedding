import firebase from "firebase";
import "firebase/auth";

// replace this with your credentials

const firebaseConfig = {
  apiKey: "AIzaSyAYXNm8_v3z_4pDyBDnOdfLF7zmN4wvgNs",
  authDomain: "weddingkik-92f96.firebaseapp.com",
  databaseURL:
    "https://weddingkik-92f96-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "weddingkik-92f96",
  storageBucket: "weddingkik-92f96.appspot.com",
  messagingSenderId: "758591616110",
  appId: "1:758591616110:web:8c3d787ad0c14c2462627f",
};
// ----------------------------------------//
const fire = firebase.initializeApp(firebaseConfig);

export const auth = fire.auth();

export default fire;
