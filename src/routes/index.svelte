<script>
	import Typewriter from 'svelte-typewriter';
</script>

<svelte:head>
	<title>EcoGo!</title>
	<link rel="stylesheet" href="home_style.css" />
</svelte:head>

<header>
	<div class="container_solid box">
		<div id="navbar">
			<img class="logo_image fixed" src="logo.png" alt="Eco Logo" align="left" />
			<div class="login_button">
				<button
					class="focus:shadow-outline fixed bg-green-500 py-2 px-4
					font-bold text-white hover:bg-green-700 focus:outline-none"
					><a href="/login">Login/Signup</a>
				</button>
			</div>
		</div>
		<div class="title_wrapper">
			<h1>Welcome to EcoGo!</h1>
		</div>
		<div class="title_wrapper2">
			<h1>&#8595</h1>
		</div>
	</div>
	<div class="container_image box">
		<Typewriter loop cursor={false}>
			<h1 class="typewrite">Involve.</h1>
			<h1 class="typewrite">Participate.</h1>
			<h1 class="typewrite">Help.</h1>
			<h1 class="typewrite">Encourage.</h1>
			<h1 class="typewrite">Sustain.</h1>
		</Typewriter>
	</div>
</header>
<div class="bg-white">
	<div class="text">
		<h2>Our Motto</h2>
		<h5>
			"You Are Equipped With The Necessary Technology To Save The World! The World Now Rests In Your
			Hands! EcoGo!"
		</h5>
	</div>
	<div class="text">
		<h2>About EcoGo</h2>
		<h5>
			EcoGo is the nature's best friend. Our product aims to reduce pollution, decrease carbon
			emission, and make the world a healthier and happier place.
			<br /><br /> EcoGo tracks an individual's Eco-Score to provide the most accurate information
			on one's contribtion to making the Earth more sustainable. <br /><br /> We make the process of
			helping the Earth an interactive, plus-plus game. The theory behind this idea is that through
			competition people will be incentivized to help the Earth. <br /><br />
			We recognize that every human has potential to help sustain the Earth. If even one person joins,
			that is an accomplishment because one-by-one we can soon involve all 7 billion people living on
			this Earth.
		</h5>
	</div>
	<div class="text">
		<h2>Contact Us</h2>
		<h5>
			This hybrid (website + mobile) product was founded by two passionate individuals. For any
			questions, concerns, or comments, please reach out to us. <br /><br />
			Jathin Pranav Singaraju -- pran.singaraju@gmail.com <br /><br />
			Dhruv Chanana -- d.chanana777@gmail.com
		</h5>
	</div>
</div>
