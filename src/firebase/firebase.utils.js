import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyBxmJE014mCI1cWOZDR2uCVGfPticRrI4s',
  authDomain: 'clothing-store-db-a225c.firebaseapp.com',
  databaseURL: 'https://clothing-store-db-a225c.firebaseio.com',
  projectId: 'clothing-store-db-a225c',
  storageBucket: '',
  messagingSenderId: '555070468678',
  appId: '1:555070468678:web:e8fb0d2202114e42195047'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
