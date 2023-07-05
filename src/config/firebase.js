import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
    apiKey:process.env.REACT_APP_DASHBOARD_API_KEY,
    authDomain:process.env.REACT_APP_DASHBOARD_AUTH_DOMAIN,
    projectId:process.env.REACT_APP_DASHBOARD_PROJECT_ID,
    storageBucket:process.env.REACT_APP_DASHBOARD_STORAGE_BUCKET,
    messagingSenderId:process.env.REACT_APP_DASHBOARD_MESSAGING_SENDER_ID,
    appId:process.env.REACT_APP_DASHBOARD_APP_ID,
    measurementId:process.env.REACT_APP_DASHBOARD_MEASUREMENT_ID,
  };
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);