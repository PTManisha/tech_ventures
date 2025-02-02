// // firebase.js
// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";

// const firebaseConfig = {
//   apiKey: "AIzaSyAAsXjHlvqk3_TTcno6nDinb4HEMUUOhv8",
//   authDomain: "sample-210bb.firebaseapp.com",
//   projectId: "sample-210bb",
//   storageBucket: "sample-210bb.firebasestorage.app",
//   messagingSenderId: "519662121370",
//   appId: "1:519662121370:web:4a889f7daff6ef9d4b8a23"
// };


// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);

// export { db };


// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAAsXjHlvqk3_TTcno6nDinb4HEMUUOhv8",
  authDomain: "sample-210bb.firebaseapp.com",
  projectId: "sample-210bb",
  storageBucket: "sample-210bb.firebasestorage.app",
  messagingSenderId: "519662121370",
  appId: "1:519662121370:web:4a889f7daff6ef9d4b8a23"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
