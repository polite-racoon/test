// import { applicationDefault, initializeApp } from 'firebase-admin/app';

// const app = initializeApp({
//   credential: applicationDefault(),
//   databaseURL: 'https://sweet-cookie-boutique.firebaseio.com',
// });

// export default app;
import admin from 'firebase-admin';

const serviceAccount = JSON.parse(process.env.GOOGLE_APPLICATION_CREDENTIALS);

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
