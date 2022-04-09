<script context="module">
	export async function load({ session }) {
		if (!session?.user) {
			return {
				status: 302,
				redirect: '/login'
			};
		}
		return {
			props: {
				user: session.user
			}
		};
	}
</script>

<script>
	import { post } from '$lib/utils.js';
	import { Geocoder } from '@beyonk/svelte-mapbox';
	import { goto } from '$app/navigation';

	let mapboxToken =
		'pk.eyJ1IjoiZGNoYW5hbmEiLCJhIjoiY2wxczM5dWw1MTJoMjNrbG13azJ3cjVoNCJ9.AmtsrwvBqcgz58uWlGHB_A';

	let title, lat, long, description, date, capacity;
	export let user;

	async function submit() {
		let data = {
			title,
			lat,
			long,
			description,
			owner: user.username,
			date,
			capacity
		};

		console.log(data);
		post('/events', data);
	}

	function placeChanged(e) {
		console.log(e.detail.result.center);
		const { result } = e.detail;
		lat = result.center[1];
		long = result.center[0];
	}
</script>

<div
	class="flex h-full h-[94vh] flex-grow flex-col justify-center overflow-x-hidden px-6 md:py-4 xl:px-64"
>
	<div class="flex flex-wrap justify-center">
		<form
			class="mb-4 rounded bg-gray-100 px-8 pt-6 pb-8 shadow-md"
			on:submit|preventDefault={submit}
		>
			<h1 class="mb-4 text-3xl font-bold">Add New Event</h1>
			<div class="mb-4 border-b border-gray-700">
				<input
					class="mb-2 mr-3 w-full appearance-none border-none bg-transparent py-1
					px-2 leading-tight focus:ring-0"
					type="text"
					required
					placeholder="Event Name"
					bind:value={title}
				/>
			</div>
			<div class="mb-4 border-b border-gray-700">
				<input
					class="mb-2 mr-3 w-full appearance-none border-none bg-transparent py-1
					px-2 leading-tight focus:ring-0"
					type="text"
					required
					placeholder="Description"
					bind:value={description}
				/>
			</div>
			<div class="mb-4 border-b border-gray-700">
				<input
					class="mb-2 mr-3 w-full appearance-none border-none bg-transparent py-1
					px-2 leading-tight focus:ring-0"
					type="number"
					required
					placeholder="Capacity"
					bind:value={capacity}
				/>
			</div>
			<div class="mb-4 flex w-full justify-center">
				<Geocoder accessToken={mapboxToken} on:result={placeChanged} />
			</div>
			<div class="inline-flex">
				<button
					class="focus:shadow-outline rounded-l bg-green-500 py-2 px-4 font-bold
					text-white hover:bg-green-700 focus:outline-none"
					type="submit"
				>
					Add Event
				</button>
			</div>
		</form>
	</div>
</div>
