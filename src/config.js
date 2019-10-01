import firebase from 'firebase';

export const appName = "react-project-adv";
export const firebaseConfig = {
    apiKey: "AIzaSyBq_OHQX-HN_jYMNhG7_QxGxXfUprudyDc",
    authDomain: `${appName}.firebaseapp.com`,
    databaseURL: `https://${appName}.firebaseio.com`,
    projectId: appName,
    storageBucket: `${appName}.appspot.com`,
    messagingSenderId: "259081339523",
    appId: "1:259081339523:web:73ace8e87613d0660991b6",
    measurementId: "G-WHEK4EL4GC"
}

firebase.initializeApp(firebaseConfig);