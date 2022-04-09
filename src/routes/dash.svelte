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
	export let user;
	console.log(user);
</script>

<h1 class="text-center text-2xl font-semibold">
	Hi! You are registered as user {user.username} with score {user.score}.
</h1>
