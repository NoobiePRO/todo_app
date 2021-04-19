import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyCUIf8kAR_ZrBNliJhoLQxvpmLz7ZOTqWA",
    authDomain: "to-do-app-2303.firebaseapp.com",
    projectId: "to-do-app-2303",
    storageBucket: "to-do-app-2303.appspot.com",
    messagingSenderId: "554953662625",
    appId: "1:554953662625:web:9be8954bf8475fc89010e0"
  };

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export { db }; 