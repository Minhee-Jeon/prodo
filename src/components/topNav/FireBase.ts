// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export default class FireBase {
  public static firebaseConfig = {
    apiKey: "AIzaSyAKWGAqtQa6hDESICEhDtfvvo8N82hOjtA",
    authDomain: "prodoo-c0e5c.firebaseapp.com",
    projectId: "prodoo-c0e5c",
    storageBucket: "prodoo-c0e5c.appspot.com",
    messagingSenderId: "278336940822",
    appId: "1:278336940822:web:9968dc7ae646a5d9dcbe37",
    measurementId: "G-XJKJY41HM2"
  };
  
  // Initialize Firebase
  public static app = initializeApp(FireBase.firebaseConfig);
  private static analytics = getAnalytics(FireBase.app);
  private static dbService = getFirestore(FireBase.app);
}