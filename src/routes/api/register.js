import { register, getUser, initSession } from '$lib/database';
import { serialize } from 'cookie';

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function post({ request }) {
	const { username, password } = await request.json();
	const validUsername = await register(username, password);

	if (!validUsername) {
		return {
			status: 401,
			body: {
				message: 'Invalid username'
			}
		};
	}

	const user = await getUser(username);
	const { id } = await initSession(username);
	return {
		status: 200,
		headers: {
			'Set-Cookie': serialize('session_id', id, {
				path: '/',
				httpOnly: true,
				sameSite: 'strict',
				secure: process.env.NODE_ENV === 'production',
				maxAge: 60 * 60 * 24 * 7 // one week
			})
		},
		body: {
			user: {
				username: user.username,
				score: user.score
			}
		}
	};
}
