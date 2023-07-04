import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyBM3rdB0rpgcu5PYp1ozGMgeTgxaElgjM8",
    authDomain: "listed-dashboard-8652c.firebaseapp.com",
    projectId: "listed-dashboard-8652c",
    storageBucket: "listed-dashboard-8652c.appspot.com",
    messagingSenderId: "416245695023",
    appId: "1:416245695023:web:0426a1e445fe112e79fcda",
    measurementId: "G-2G031B8RMB"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);