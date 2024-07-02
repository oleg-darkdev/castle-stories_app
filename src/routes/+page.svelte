<script>
	// import {  } from '$lib/shared';
	import { Nav, CastlesSlider, Hero, Stats, Footer, About, TheStories, Features, Cta } from '$lib/widgets';
	import { InfoCard } from '$lib/entities';
</script>

<svelte:head>
	<title>Castles Stories</title>
</svelte:head>

<div class="main-wrapper overflow-hidden">
	<Nav />

	<Hero />

	<CastlesSlider />

	<About />

	<TheStories />
  
	<Features />

	<Stats />

	<Cta />

	<Footer />

	<InfoCard />
</div>
