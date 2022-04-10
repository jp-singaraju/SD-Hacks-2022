

<script>
	import Map from './_Map.svelte';
	import { get as getSession } from 'svelte/store';
	import { session } from '$app/stores';

	let user;
	let score;
	session.subscribe(value => {
		user = value.user;
		score = user.score;
		console.log("asdf");
	});
</script>

<svelte:head>
	<meta charset="UTF-8" />
	<meta http-equiv="X-UA-Compatible" content="ie-edge" />
	<meta
		name="viewport"
		content="width=device-width, height=device-height, initial-scale=0.6, minimum-scale=0.6"
	/>
	<title>EcoGo!</title>
	<link rel="stylesheet" href="dashboard_style.css" />
	<link href="https://fonts.googleapis.com/css?family=Gill\ Sans" rel="stylesheet" />
</svelte:head>

<div class="dashboard h-screen">
	<header>
		<img class="logo_image" src="/logo.png" alt="Eco Logo" align="left" />
		<p class="bg-[url('/background.jpg')]" />
		<div class="name"><br />Welcome {user.username}!</div>
	</header>
	<div class="row1-container">
		<div class="box box-down cyan">
			<Map />
		</div>
		<div class="box red">
			<h2>Your Eco-Score</h2>
			<div class="container_points">
				<div class="card1">
					<div class="text_points">Today's Points</div>
					<div class="text_points">Out of 50</div>
					<div class="points_vals">{user.score}</div>
				</div>
				<div class="card2">
					<div class="text_points">Week's Average</div>
					<div class="text_points">Out of 50</div>
					<div class="points_vals">{user.score}</div>
				</div>
				<div class="card3">
					<div class="text_points">All-Time Average</div>
					<div class="text_points">Out of 50</div>
					<div class="points_vals">{user.score}</div>
				</div>
			</div>
		</div>
		<div class="box box-down blue">
			<h2>Daily Tasks</h2>
			<h3>
				<input type="checkbox" id="task1" name="task1" value="1" />
				<label for="task">Pick up trash on the ground</label><br /> <br />
				<input type="checkbox" id="task2" name="task2" value="2" />
				<label for="task">Walk to school</label><br /> <br />
				<input type="checkbox" id="task3" name="task3" value="3" />
				<label for="task">Spend 30 minutes outdoors</label><br /> <br />
				<input type="checkbox" id="task4" name="task4" value="4" />
				<label for="task">Do not trash recyclable materials</label><br /> <br />
				<input type="checkbox" id="task5" name="task5" value="5" />
				<label for="task">Eat healthy</label><br />
			</h3>
			<button
				class="focus:shadow-outline mt-2 rounded bg-green-500 py-2 px-4 font-bold
					text-white hover:bg-green-700 focus:outline-none"
				type="button">Submit Task(s)</button
			>
		</div>
	</div>
	<div class="row2-container">
		<div class="box orange">
			<h2>Leaderboard</h2>
			<table class="table">
				<thead>
					<th>Rank</th>
					<th>Name</th>
					<th>Total Points</th>
				</thead>
				<tbody>
					<tr>
						<td>1</td>
						<td>jpsingaraju</td>
						<td>500</td>
					</tr>
					<tr>
						<td>2</td>
						<td>sakkiina</td>
						<td>305</td>
					</tr>
					<tr>
						<td>3</td>
						<td>sakkina</td>
						<td>255</td>
					</tr>
					<tr>
						<td>4</td>
						<td>Person 4</td>
						<td>250</td>
					</tr>
					<tr>
						<td>5</td>
						<td>Person 5</td>
						<td>200</td>
					</tr>
					<tr>
						<td>...</td>
						<td>...</td>
						<td>...</td>
					</tr>
					<tr>
						<td>355</td>
						<td>{user.username}</td>
						<td>{user.score}</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</div>
