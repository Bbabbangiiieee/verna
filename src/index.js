// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBPKFFtfjSrFnmJfhAUqzNw0gwqK5fL9fs",
  authDomain: "verna-d11d3.firebaseapp.com",
  projectId: "verna-d11d3",
  storageBucket: "verna-d11d3.appspot.com",
  messagingSenderId: "366033671861",
  appId: "1:366033671861:web:f548537c14e9a1a94950fc",
  measurementId: "G-98PDZ12FLP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
console.log(app)