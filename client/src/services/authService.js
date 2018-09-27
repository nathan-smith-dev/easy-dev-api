import firebase from 'firebase/app';
import axios from 'axios';
import 'firebase/auth';

const config = {
    apiKey: process.env.REACT_APP_GOOGLE_API_KEY,
    authDomain: process.env.REACT_APP_GOOGLE_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_GOOGLE_DB_URL,
    projectId: process.env.REACT_APP_GOOGLE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_GOOGLE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_GOOGLE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config); 
const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
auth.onAuthStateChanged(user => {
    if(user) {
        console.log(user);
        axios.defaults.headers.common['x-auth'] = user.qa;
    } else {
        console.log('User is not defined');
        axios.defaults.headers.common['x-auth'] = '';
    }
});

export const getAuthToken = () => auth.currentUser.getIdToken();
export const signInWithRedirect = () => auth.signInWithRedirect(provider);
export const signOut = () => auth.signOut();