// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBu0giQ5jABpWDxGhqi21C3Q7P6OVy7WV8",
  authDomain: "dream-car-shop.firebaseapp.com",
  projectId: "dream-car-shop",
  storageBucket: "dream-car-shop.appspot.com",
  messagingSenderId: "207225905785",
  appId: "1:207225905785:web:833c1c2f890a7b45c6aaa8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);


export default app;