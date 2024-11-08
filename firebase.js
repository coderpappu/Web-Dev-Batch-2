// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration

import { getAuth, GoogleAuthProvider } from "firebase/auth";

//  Firebase SDKs
{
  /* <script src="https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js"></script> */
}

const firebaseConfig = {
  apiKey: "AIzaSyCIOc3oJ9MM5O7ezYnfRUCZfIVEefK3Xyw",
  authDomain: "employeesystem-e15e0.firebaseapp.com",
  projectId: "employeesystem-e15e0",
  storageBucket: "employeesystem-e15e0.appspot.com",
  messagingSenderId: "117174486886",
  appId: "1:117174486886:web:e30bd2f8b8e82fe93feaa7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();

const db = getFirestore(app);

export { auth, googleProvider };
export default db;
