import data from "../../../backend/src/assets/data.json";
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { loadDocs, docs } from "$lib/firebase";

// let dataSize: number = data.items.length;
// let items = data.items;

export async function get_items() {
    if (docs !== null){
        return docs;
    }
    await loadDocs();

    return docs!;
}

export function SaveChanges(textContentToSave: string, innerID: number): undefined {
        
    data.items[innerID].content = textContentToSave;
    console.log(data.items[innerID].content);
    
    // console.log(data.items[innerID].content);
}