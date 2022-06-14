import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyDye3gPrLUSFlpwHCDacPttd6HRYOeuN1I",
    authDomain: "daisybeauty-d88c2.firebaseapp.com",
    projectId: "daisybeauty-d88c2",
    storageBucket: "daisybeauty-d88c2.appspot.com",
    messagingSenderId: "568040200296",
    appId: "1:568040200296:web:5f028b31085459267643dd",
    measurementId: "G-VQ7BRL9QG1"
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const database = getDatabase(firebaseApp);
export { auth, database };