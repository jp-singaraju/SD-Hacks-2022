<script>
	import { get as getSession } from 'svelte/store';
	import { session } from '$app/stores';
	import { get } from '$lib/utils';

	const sess = getSession(session);

	function logout() {
		get('auth/logout');
	}
</script>

<nav
	class="sticky top-0 h-[6vh] w-full border-b bg-gray-100 px-6 py-2
						md:opacity-90 xl:px-96"
>
	<div class="flex h-10 flex-wrap justify-between">
		<a href="/" class="flex items-center">
			<h1 class="text-2xl font-bold">EcoGO</h1>
		</a>
		<div class="inline-flex">
			{#if !sess?.user}
				<a href="/login" class="flex items-center">
					<h1 class="text-lg">Log In</h1>
				</a>
			{:else}
				<a href="/" on:click={logout} class="flex items-center">
					<h1 class="text-lg">Log Out</h1>
				</a>
			{/if}
		</div>
	</div>
</nav>
