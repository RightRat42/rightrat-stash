import {
    PUBLIC_FIREBASE_API_KEY,
    PUBLIC_FIREBASE_AUTH_DOMAIN,
    PUBLIC_FIREBASE_PROJECT_ID,
    PUBLIC_FIREBASE_STORAGE_BUCKET,
    PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    PUBLIC_FIREBASE_APP_ID,
} from '$env/static/public';

export const firebaseConfig = {
    apiKey: PUBLIC_FIREBASE_API_KEY,
    authDomain: PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: PUBLIC_FIREBASE_APP_ID,
};
  

import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

export let docs: any = null;

export async function firebaseInit() {
    console.log("was here");
    
    if( ! firebase.apps.length ) {
        firebase.initializeApp(firebaseConfig);
    }
}

export async function firebaseLogout() {
    await firebase.auth().signOut();
    docs = null;
}

export async function loginWithGoogle() {
    try {
        docs = null;
        const provider = new firebase.auth.GoogleAuthProvider();
        await firebase.auth().signInWithPopup(provider);
    } catch (e) {
        console.log(e);
    }
}

export async function loadDocs() {
    if( docs !== null ) {
        console.log("getDocs(): already loaded");
        return;
    }
    console.log("getDocs(): trying to fetch data from db");
    const db = firebase.firestore();
    //await new Promise(f => setTimeout(f, 1000));
    await db.collection("data-prod").get().then((querySnapshot) => {
        docs = [];
        querySnapshot.forEach((doc) => {
            docs!.push( { "id": doc.id, "data": doc.data() } );
            //console.log("got doc", doc.id);
            //console.log(doc.id, " => ", doc.data());
        });
        console.log("returning", docs.length, "docs:", docs);
    }).catch(e => {
        console.log("failed to fetch data:",e.message);
        docs = [ "Failed to fetch: " + e.message ]
    });
}
