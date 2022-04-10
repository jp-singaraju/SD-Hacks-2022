import { updateScore } from '$lib/database';

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function post({ request }) {
	const user = await request.json();
	let newUser = await updateScore(user.username, user.score);

	return {
		status: 200,
		body: newUser
	};
}
