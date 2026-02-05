import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyASLbi5rp-Kp5bqrYP2C4JK6MNNh1pcpaw",
  authDomain: "analyser-final.firebaseapp.com",
  projectId: "analyser-final",
  storageBucket: "analyser-final.appspot.com", // 🔥 FIXED
  messagingSenderId: "1022178076084",
  appId: "1:1022178076084:web:d8178be8ce6ffaa4123ee1"
};

const app = initializeApp(firebaseConfig);

// 🔑 AUTH (THIS WAS MISSING)
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

export default app;
