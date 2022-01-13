// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDVckbVQUnH5dFEne6KT4UjZvq4V78T_lk',
  authDomain: 'dungeon-logger.firebaseapp.com',
  projectId: 'dungeon-logger',
  storageBucket: 'dungeon-logger.appspot.com',
  messagingSenderId: '110191463418',
  appId: '1:110191463418:web:00b73d977ae316ea777243',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
