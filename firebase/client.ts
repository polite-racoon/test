import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDbrQ0zLY9EUnPiG4_8NwmMCnbMBTyGaFY',
  authDomain: 'sweet-cookie-boutique.firebaseapp.com',
  projectId: 'sweet-cookie-boutique',
  storageBucket: 'sweet-cookie-boutique.appspot.com',
  messagingSenderId: '763860071564',
  appId: '1:763860071564:web:3553efa2a79cd120a6b7a9',
  measurementId: 'G-2TM82X8RM0',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
