import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { loadDocs, docs, ids } from "$lib/firebase";

export async function get_items() {
  if (docs !== null) {
    return docs;
  }
  await loadDocs();

  return docs!;
}

export async function deleteDoc(itemID: string) {
  const db = firebase.firestore();
  delete docs[docs.findIndex((t: any) => t.id == itemID)];
  delete ids[ids.findIndex((t: any) => t == itemID)];
  await db
    .collection("data-prod")
    .doc(itemID)
    .delete()
    .then(() => {
      console.log("Document successfully deleted!");
    })
    .catch((error) => {
      console.error("Error removing document: ", error);
      alert("Error updating document: " + error);
    });
}

export async function createAndSave(
  title: string,
  type: string,
  textContentToSave: string,
  tags: string[]
): Promise<void> {
  const db = firebase.firestore();
  const itemRef = await db.collection("data-prod").doc();
  ids.push(itemRef.id);
  return itemRef
    .set({
      title: title,
      type: type,
      content: textContentToSave,
      tags: tags,
    })
    .then(() => {
      console.log("Document successfully created and saved!");
    })
    .catch((error) => {
      console.error("Error updating document: ", error);
      alert("Error updating document: " + error);
    });
}

export async function saveChanges(
  title: string,
  type: string,
  textContentToSave: string,
  innerID: string
): Promise<void> {
  const db = firebase.firestore();
  const itemRef = db.collection("data-prod").doc(innerID);
  return itemRef
    .update({
      title: title,
      type: type,
      content: textContentToSave,
    })
    .then(() => {
      console.log("Document successfully updated!");
    })
    .catch((error) => {
      console.error("Error updating document: ", error);
      alert("Error updating document: " + error);
    });
}

export async function getItemById(id: string) {
  let found = await docs?.find((item: any) => id == item.id);
  console.log(found);
  return found;
}
