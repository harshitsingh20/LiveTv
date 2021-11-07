import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDSZtFOOyO4ip32ekVC2kcLSLSQcFnFTV4",
    authDomain: "disneyplus-clone-d30b3.firebaseapp.com",
    projectId: "disneyplus-clone-d30b3",
    storageBucket: "disneyplus-clone-d30b3.appspot.com",
    messagingSenderId: "112879444410",
    appId: "1:112879444410:web:c0b8da980635066cbdbd83",
    measurementId: "G-3BLYPVP2TP"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();

  export { auth, provider, storage };
  export default db;