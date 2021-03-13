import firebase from "firebase";

// replace this with your credentials
const firebaseConfig = {
  apiKey: "AIzaSyCMlLVVCe2rhHo4OgVQBdPU9h-FEmtC55s",
  authDomain: "nopal-8154e.firebaseapp.com",
  projectId: "nopal-8154e",
  storageBucket: "nopal-8154e.appspot.com",
  messagingSenderId: "265732549211",
  appId: "1:265732549211:web:4459400d2dc39b6cdd6d7e",
  measurementId: "G-ZJXWQJEVS2",
};
// ----------------------------------------//

const fire = firebase.initializeApp(firebaseConfig);
export default fire;
