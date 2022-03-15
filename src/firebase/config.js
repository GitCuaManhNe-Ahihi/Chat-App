
import {connectAuthEmulator, getAuth} from 'firebase/auth';
import {connectFirestoreEmulator, getFirestore} from 'firebase/firestore';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCLGBTjRdWUwaOH9E2n2YZVaCa9KjkUfU8",
  authDomain: "chatapp-806e1.firebaseapp.com",
  projectId: "chatapp-806e1",
  storageBucket: "chatapp-806e1.appspot.com",
  messagingSenderId: "586302620698",
  appId: "1:586302620698:web:992dc17ea913101e5cbda3",
  measurementId: "G-NP37QDE1MZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
  const auth = getAuth(app);
  
  const db = getFirestore(app)
  //connect emulators
  // connectAuthEmulator(auth,'http://localhost:9011');
  // if(window.location.hostname === 'localhost'){
  // connectFirestoreEmulator(db,"localhost",8181);
  // console.log(' localhost');
  // }
  // else{
  //   console.log('not localhost');
  // }
  
  export{
    auth,db,app
  }

 