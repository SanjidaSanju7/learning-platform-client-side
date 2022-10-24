// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAUVlm7f5rXr94dq_YGIMex6BV-EXg4iFo",
    authDomain: "educational-website-client.firebaseapp.com",
    projectId: "educational-website-client",
    storageBucket: "educational-website-client.appspot.com",
    messagingSenderId: "840309821203",
    appId: "1:840309821203:web:b3e4ac1121e1421cff14e6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;