import { parse } from 'cookie';
import { getSession as getSessionFromDB } from '$lib/database';

/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
	const cookies = parse(event.request.headers.get('cookie') || '');

	if (cookies.session_id) {
		const session = await getSessionFromDB(cookies.session_id);
		if (session) {
			event.locals.user = { username: session.username, score: session.score };
			return resolve(event);
		}
	}

	event.locals.user = null;
	return resolve(event);
}

/** @type {import('@sveltejs/kit').GetSession} */
export function getSession(event) {
	return event?.locals?.user
		? {
				user: {
					username: event.locals.user.username,
					score: event.locals.user.score
				}
		  }
		: {};
}
