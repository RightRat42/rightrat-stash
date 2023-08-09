import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import data from "../../../../../backend/src/assets/data.json"

export const load = (({ params }) => {
    let isFound: boolean = false;
    for (let i = 0; i < data.items.length; ++i){
        if (params.slug == data.items[i].id){
            isFound = true;
        }
    }
    if (/^[0-9][0-9]*/gm.test(params.slug) && isFound) {
        return {
            slug: params.slug.toString(),
        };
    }

    throw error(404, 'Not found');
}) satisfies PageLoad;