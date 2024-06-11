// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDwCXbrqZIsOfasg_NcapIWl6wMuv670RM",
  authDomain: "fir-book-inventory-eee14.firebaseapp.com",
  projectId: "fir-book-inventory-eee14",
  storageBucket: "fir-book-inventory-eee14.appspot.com",
  messagingSenderId: "819751430717",
  appId: "1:819751430717:web:0f1f2edd5b1b5cf36b9854"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;