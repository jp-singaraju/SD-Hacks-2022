<script>
	import { Map, Geocoder, Marker, controls } from '@beyonk/svelte-mapbox';
	import { onMount } from 'svelte';
	import { get as getSession } from 'svelte/store';
	import { session } from '$app/stores';
	import { get, post } from '$lib/utils';
	const { GeolocateControl, NavigationControl } = controls;

	let mapboxToken =
		'pk.eyJ1IjoiZGNoYW5hbmEiLCJhIjoiY2wxczM5dWw1MTJoMjNrbG13azJ3cjVoNCJ9.AmtsrwvBqcgz58uWlGHB_A';

	const sess = getSession(session);
	let center = { lat: 37.0902, lng: -95.7129 };
	let zoom = 2;
	let mapComponent;
	let events;

	onMount(async () => {
		events = await get('/api/events');
		console.log(events);
	});

	function placeChanged(e) {
		console.log(e.detail.result.center);
		const { result } = e.detail;
		mapComponent.setCenter(result.center, 14);
	}

	async function joinEvent() {
		let data = {
			username: sess.user.username,
			score: sess.user.score + 10
		};

		let newUser = await post("/api/updateScore", data);
	}
</script>

<div id="map">
	<div class="relative h-[340px] w-full">
		<div class="absolute w-full h-[340px]"><Map accessToken={mapboxToken} bind:this={mapComponent} bind:zoom bind:center>
			<NavigationControl />
			{#each events as event}
				<Marker lat={event.lat} lng={event.long} label={event.title}>
					<div slot="popup">
						<h1 class="text text-lg font-bold">{event.title}  
						<button class="focus:shadow-outline bg-green-500 py-2 px-4 font-bold
					text-white hover:bg-green-700 focus:outline-none text-sm"
					on:click={joinEvent}>Join</button>
						</h1>
						<h1 class="text text-lg">{event.description}</h1>
					</div>
				</Marker>
			{/each}
		</Map></div>
		<div class="absolute mx-3 my-4">
			<a class="btn focus:shadow-outline bg-green-500 py-2 rounded-2xl px-4 font-bold
					text-white hover:bg-green-700 focus:outline-none" href="/newEvent">Add Event</a>
		</div>
	</div>
</div>
