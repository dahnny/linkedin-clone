import firebase from "firebase";


const firebaseConfig = {
  apiKey: "AIzaSyB88vvCDVvDPKKBLS6L5c4eNf2JOZ6kvlU",
  authDomain: "linkedin-clone-581aa.firebaseapp.com",
  projectId: "linkedin-clone-581aa",
  storageBucket: "linkedin-clone-581aa.appspot.com",
  messagingSenderId: "824749955182",
  appId: "1:824749955182:web:8cce5d39f1e4ad9c2a2e7f",
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export {auth , provider, storage};
export default db;