import { addEvent, getAllEvents } from '$lib/database';

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function post({ request }) {
	const event = await request.json();
	addEvent(
		event.title,
		event.lat,
		event.long,
		event.description,
		event.owner,
		event.date,
		event.capacity
	);

	const events = getAllEvents();
	return {
		status: 200,
		body: events
	};
}

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function get({ request }) {
	const events = await getAllEvents();

	return {
		status: 200,
		body: events
	};
}
