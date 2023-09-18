import { user } from '$lib';
import { redirect } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load = (() => {
	return new Promise<void>((resolve, reject) => {
		user.subscribe((user) => {
			console.log(`User on main page: ${user}`)
			console.log(`has user: ${user != null}`)
			if (user) {
				redirect(301, '/');
				resolve();
			} else {
				reject(redirect(307, '/signin'))
			}
		});
	})
}) satisfies PageLoad;
