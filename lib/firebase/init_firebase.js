import { initializeApp, getApp, getApps, deleteApp } from "firebase/app";
import { getFirestore, initializeFirestore } from "@firebase/firestore"
import { getStorage } from "firebase/storage"
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyBvBfBWTvMM9xK5Wv23TImqVQQpH4A1V_Y",
    authDomain: "website-ease.firebaseapp.com",
    projectId: "website-ease",
    storageBucket: "website-ease.appspot.com",
    messagingSenderId: "737118448619",
    appId: "1:737118448619:web:0958386afdf6102cf087ae"
  };

export const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
export const firestore = getFirestore(app)
export const auth = getAuth (app)
export const storage = getStorage(app);
