// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCt91srgYd3TYfe16bLaIpjrxZzfkHYKH0",
  authDomain: "ema-john-shopping-c3dcd.firebaseapp.com",
  databaseURL: "https://ema-john-shopping-c3dcd-default-rtdb.firebaseio.com",
  projectId: "ema-john-shopping-c3dcd",
  storageBucket: "ema-john-shopping-c3dcd.appspot.com",
  messagingSenderId: "471544105243",
  appId: "1:471544105243:web:3f94fa7213abd9d330ebbe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;