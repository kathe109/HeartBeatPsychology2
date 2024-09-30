// Firebase Configuración inicial ya proporcionada por ti
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyC7TIgRSDUP16tkrUEQBV7tCtmqHf43uT4",
    authDomain: "heartbeat-ff81e.firebaseapp.com",
    projectId: "heartbeat-ff81e",
    storageBucket: "heartbeat-ff81e.appspot.com",
    messagingSenderId: "279727767496",
    appId: "1:279727767496:web:60b6af643b767b1e5fcafd"
  };

  const app = initializeApp(firebaseConfig);

  export const auth = getAuth(app);
  export const db = getFirestore(app);


