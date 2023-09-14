// import { applicationDefault, initializeApp } from 'firebase-admin/app';

// const app = initializeApp({
//   credential: applicationDefault(),
//   databaseURL: 'https://sweet-cookie-boutique.firebaseio.com',
// });

// export default app;
import admin from 'firebase-admin';
import serviceAccount from './key/sweet-cookie-boutique-firebase-adminsdk-la1zi-83d6429866.json';

if (!admin.apps.length) {
  try {
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
      databaseURL: 'https://sweet-cookie-boutique.firebaseio.com',
    });
  } catch (error) {
    console.log('Firebase admin initialization error', error.stack);
  }
}
const adminAuth = admin.auth();

export { adminAuth };
