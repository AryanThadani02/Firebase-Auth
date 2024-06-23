import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // Import Firestore

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDXckT5Pdlz5Rn1Uw3GnrA3ym7WTw1QUfA",
  authDomain: "lgin-auth.firebaseapp.com",
  projectId: "lgin-auth",
  storageBucket: "lgin-auth.appspot.com",
  messagingSenderId: "4510647403",
  appId: "1:4510647403:web:b284085835244b57929d2e",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app); // Initialize Firestore

export { auth, db };
