// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBo6gkGjokcnFrPdu7eNOQXhebWS7qd6gs",
  authDomain: "top-up-2e703.firebaseapp.com",
  projectId: "top-up-2e703",
  storageBucket: "top-up-2e703.appspot.com",
  messagingSenderId: "1016156522505",
  appId: "1:1016156522505:web:e48e9e0ed8299a572010d8",
  measurementId: "G-DCQGKGTX28"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default firebaseConfig