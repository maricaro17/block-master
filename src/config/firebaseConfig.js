import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth,GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBhVnIckAWm7zwF5omedvJ8XoeZLuXaAWk",
  authDomain: "block-master-625d7.firebaseapp.com",
  projectId: "block-master-625d7",
  storageBucket: "block-master-625d7.appspot.com",
  messagingSenderId: "1074310679975",
  appId: "1:1074310679975:web:82808d6577d8997988ba82",
};

const app  = initializeApp(firebaseConfig);
const auth  = getAuth(app)
const db = getFirestore(app);
const google = new GoogleAuthProvider();
const facebook = new FacebookAuthProvider();
export { db, google, facebook, app, auth}
