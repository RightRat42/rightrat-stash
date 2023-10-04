import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { loadDocs, docs } from "$lib/firebase";

// let dataSize: number = data.items.length;
// let items = data.items;

export async function get_items () {
    if (docs !== null){
        return docs;
    }
    await loadDocs();

    return docs!;
}

export function saveChanges (title: string, type: string, textContentToSave: string, innerID: string): Promise<void> {
    const db = firebase.firestore();
    const itemRef = db.collection("data-prod").doc(innerID)
    return itemRef.update({
        content: textContentToSave
    })
    .then(() => {
        console.log("Document successfully updated!");
    })
    .catch((error) => {
        // The document probably doesn't exist.
        console.error("Error updating document: ", error);
        alert("Error updating document: " + error)
    });
}

export async function getItemById (id: string) {
    let found = await docs?.find((item: any) => id == item.id);
    console.log(found)
    return found;
}