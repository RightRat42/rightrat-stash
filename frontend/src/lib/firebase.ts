// import firebase from 'firebase/app';
// import "firebase/firestore";
import { initializeApp, type FirebaseApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import {
  signInWithPopup,
  GoogleAuthProvider,
  getAuth,
  signOut,
  type Auth,
} from "firebase/auth";

import {
  PUBLIC_FIREBASE_API_KEY,
  PUBLIC_FIREBASE_AUTH_DOMAIN,
  PUBLIC_FIREBASE_PROJECT_ID,
  PUBLIC_FIREBASE_STORAGE_BUCKET,
  PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  PUBLIC_FIREBASE_APP_ID,
} from "$env/static/public";

export const firebaseConfig = {
  apiKey: PUBLIC_FIREBASE_API_KEY,
  authDomain: PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: PUBLIC_FIREBASE_APP_ID,
};

export let docs: any = null;
export let ids: string[] = [];

export let firebase: FirebaseApp;
export let auth: Auth;

export async function firebaseInit() {
  firebase = initializeApp(firebaseConfig);
  console.log("initted");
}

export async function firebaseLogout() {
  signOut(auth)
    .then(() => {})
    .catch((error) => {
      console.log(error);
    });
  docs = null;
}

export async function loginWithGoogle() {
  try {
    docs = null;
    const provider = new GoogleAuthProvider();
    auth = getAuth();
    await signInWithPopup(auth, provider);
  } catch (e) {
    console.log(e);
  }
}

export async function loadDocs() {
  console.log(docs);
  if (docs !== null) {
    console.log("getDocs(): already loaded");
    return;
  }
  console.log("getDocs(): trying to fetch data from db");
  const db = getFirestore(firebase);
  //await new Promise(f => setTimeout(f, 1000));
  const querySnapshot = await getDocs(collection(db, "data-prod")).catch(
    (e) => {
      console.log("failed to fetch data:", e.message);
      docs = ["Failed to fetch: " + e.message];
    }
  );

  docs = [];
  querySnapshot.forEach((doc) => {
    docs!.push({ id: doc.id, data: doc.data() });
    ids.push(doc.id);
  });
  console.log("returning", docs.length, "docs:", docs);
}

export function getFirebaseInstance() {
  return firebase;
}
