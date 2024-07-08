<script>
	// import {  } from '$lib/shared';
	import { Nav, CastlesSlider, Hero, Stats, Footer, About, TheStories, AboutAuthor, Features, Cta, Gallery, Steps, Divider, Faq, Scenarios, EvolutionProjectSteps, FullWidthBanner } from '$lib/widgets';
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

	<!-- <EvolutionProjectSteps />/ -->
	
	<TheStories />
  
	<Features />

	<Stats />



	<Gallery />

	<Scenarios />
	
	<Faq />

	
	<Cta />

	<Footer />

  <!-- <Steps /> -->
  
  <!-- <FullWidthBanner />

  <Divider />

  	<AboutAuthor /> -->


	<!-- <InfoCard /> -->
</div>
