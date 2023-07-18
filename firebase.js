import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyBrgTYXMXv1YlRXTQit8PHYxR7aZCjskhU",
    authDomain: "next-quoted.firebaseapp.com",
    databaseURL: "https://next-quoted-default-rtdb.firebaseio.com",
    projectId: "next-quoted",
    storageBucket: "next-quoted.appspot.com",
    messagingSenderId: "1011886923506",
    appId: "1:1011886923506:web:4180e50839546e04217a6b"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);