<script context="module">
	export async function load({ session }) {
		if (!session?.user) {
			return {
				status: 200
			};
		}
		return {
			status: 302,
			redirect: '/dash'
		};
	}
</script>

<script>
	import { post } from '$lib/utils.js';
	import { goto } from '$app/navigation';
	import { sha256 } from 'js-sha256';

	let username;
	let password;
	let message;

	async function submit() {
		let encryptedPassword = sha256(password);
		let data = {
			username,
			password: encryptedPassword
		};

		message = (await post('/auth/register', data)).message;

		if (!message) {
			goto('/dash');
		}
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
			<div class="mb-4 border-b border-gray-700">
				<h1 class="mb-4 text-3xl font-bold">Sign Up</h1>
				<input
					class="mb-2 mr-3 w-full appearance-none border-none bg-transparent py-1
					px-2 leading-tight focus:ring-0"
					type="text"
					required
					placeholder="Username"
					bind:value={username}
				/>
			</div>
			<div class="mb-4 border-b border-gray-700">
				<input
					class="mb-2 mr-3 w-full appearance-none border-none bg-transparent py-1
					px-2 leading-tight focus:ring-0"
					type="password"
					required
					placeholder="Password"
					bind:value={password}
				/>
			</div>
			{#if message}
				<p class="text-m italic text-red-500">{message}</p>
			{/if}
			<div class="inline-flex">
				<button
					class="focus:shadow-outline rounded bg-blue-500 py-2 px-4 font-bold
					text-white hover:bg-blue-700 focus:outline-none"
					type="submit"
					href="/register"
				>
					Register
				</button>
			</div>
		</form>
	</div>
</div>
