import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load = (({ params }) => {
    if (/^[0-9][0-9]*/gm.test(params.slug)) {
        console.log("boop")
        return {
            slug: params.slug.toString(),
        };
    }

    throw error(404, 'Not found');
}) satisfies PageLoad;