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

	<!-- <div class="section is-logos">
        <div class="container">
          <div class="space-100"></div>
          <div class="w-layout-grid logos-grid">
            <div id="w-node-f1e0d23a-59a2-af32-96b5-8840a9465dfe-3a958561" class="logo-block is-first">
              <img src="images/649efa674ac6ff584d690c5d_Partners-logo-Gispen%20Design.webp" loading="lazy" alt="Gispen Design">
            </div>
            <div id="w-node-_1a4429e7-39d8-7094-5ea5-258e641e3059-3a958561" class="logo-block">
              <img src="images/649efa67cd491918a9f242bc_Partners-logo-Source%20International.webp" loading="lazy" alt="Source Logo">
            </div>
            <div id="w-node-_6685bf41-fa4c-6524-e537-677baa401459-3a958561" class="logo-block">
              <img src="images/649efa676f3f8a09cbf21cc9_Partners-logo-Arcadia.webp" loading="lazy" alt="Arcadia">
            </div>
            <div id="w-node-_841a22ab-65d5-618f-5676-4c9608c7cc2c-3a958561" class="logo-block">
              <img src="images/649efa67d8e0d371b489082c_Partners-logo-Bert%20Plantagie.webp" loading="lazy" alt="Bert Plantagie ">
            </div>
            <div id="w-node-ce539461-5b32-c5eb-3082-69be4154ed72-3a958561" class="logo-block">
              <img src="images/649efa67d292434d60688887_Partners-logo-Circuform.webp" loading="lazy" alt="Circuform logo">
            </div>
            <div id="w-node-f996f515-c3cb-bf34-4b57-b710273f0c75-3a958561" class="logo-block">
              <img src="images/649efa678e2668554bb0dd46_Partners-logo-Rodlin%20Design.webp" loading="lazy" alt="Rodlin Design">
            </div>
          </div>
          <div class="space-100"></div>
        </div>
      </div> -->

	<Cta />

	<Footer />

	<InfoCard />
</div>
