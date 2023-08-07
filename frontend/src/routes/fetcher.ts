import data from "../../../backend/src/assets/data.json";
import files from "../../../backend/src/assets/files.json";

let dataSize: number = data.items.length;
let items = data.items;

export function get_items_ids () : string[] {
    let ids: string[] = [];
    for (let i = 0; i < dataSize; ++i){
        ids[i] = items[i].id;
    }
    return ids;
}

export function get_items_by_ids (ids: string[]) {
    let ret = [];
    let idsSize: number = ids.length;
    for (let i = 0; i < idsSize; ++i) {
        for (let j = 0; j < dataSize; ++j) {
            if (ids[i] == items[j].id) {
                ret.push(items[j]);
            }
        }
    }
    return ret;
}