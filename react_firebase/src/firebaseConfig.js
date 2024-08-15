// firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyA9YxgP6IlPl8iSrGYa2tDit4o5Uetfsr0",
    authDomain: "register-app-ceaca.firebaseapp.com",
    projectId: "register-app-ceaca",
    storageBucket: "register-app-ceaca.appspot.com",
    messagingSenderId: "1064220157398",
    appId: "1:1064220157398:web:551762c65ac8e35f043077"
  };
  

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
