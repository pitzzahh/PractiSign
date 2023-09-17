import { user } from '$lib';
import { redirect } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load = (async () => {
	return new Promise<void>((resolve, reject) => {
		user.subscribe((user) => {
			console.log(`User on main page: ${user}`)
			console.log(`has user: ${user}`)
			if (user) {
				redirect(307, '/');
				resolve();
			} else {
				reject(redirect(307, '/signin'))
			}
		});
	})
}) satisfies PageLoad;
