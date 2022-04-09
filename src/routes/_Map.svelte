<script>
	import { Map, Geocoder, Marker, controls } from '@beyonk/svelte-mapbox';
	import { onMount } from 'svelte';
	import { get } from '$lib/utils';
	const { GeolocateControl, NavigationControl } = controls;

	let mapboxToken =
		'pk.eyJ1IjoiZGNoYW5hbmEiLCJhIjoiY2wxczM5dWw1MTJoMjNrbG13azJ3cjVoNCJ9.AmtsrwvBqcgz58uWlGHB_A';

	let center = { lat: 33.098358, lng: -96.780052 };
	let zoom = 11.15;
	let mapComponent;
	let events;

	onMount(async () => {
		events = await get('events');
		console.log(events);
	});

	function placeChanged(e) {
		console.log(e.detail.result.center);
		const { result } = e.detail;
		mapComponent.setCenter(result.center, 14);
	}
</script>

<div id="map">
	<div class="h-full w-full px-64">
		<div class="absolute h-1/2 w-1/2">
			<Map accessToken={mapboxToken} bind:this={mapComponent} bind:zoom bind:center>
				<NavigationControl />
				{#each events as event}
					<Marker lat={event.lat} lng={event.long} label={event.title} />
				{/each}
			</Map>
		</div>
		<div class="absolute m-3 flex h-full flex-col justify-between">
			<Geocoder accessToken={mapboxToken} on:result={placeChanged} />
		</div>
	</div>
</div>
