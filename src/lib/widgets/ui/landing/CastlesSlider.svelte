<script>
	import {promoCastles} from '$shared';
	import {SliderCard} from '$entities';	
	import Carousel from 'svelte-carousel'
    import { browser } from '$app/environment'
</script>


<section class="section is-slider">
	<main class="main">
		<!-- <div class="cursor no-click">
			<div class="cursor-move">
				<div class="cursor-dot">
					<img src="images/64a2d4ace99be54e912fc988_cursor.png" loading="lazy" alt="" />
				</div>
			</div>
		</div> -->
		<div class="swiper_component">
			<div class="container-2">
				<div class="slider">
					<div class="hd-block-centred">
						<h2 class="text-is-white h3-centred">
							New 
							<span class="font-is-victor text-[#a44936]">
								castles and fortifications 
							</span>
							<br />
							already available.
						</h2>
					</div>

					<a name="gallery" />
					
					<div class="slider_list-wrapper swiper w-dyn-list">
						<div role="list" class="slider_list swiper-wrapper w-dyn-items">
							{#if browser}
								<Carousel

									duration={800}
									autoplay
									timingFunction="linear"
									dots={false}
									arrows={false}
									swiping={true}
									>
									{#each promoCastles as castle}
										<SliderCard {castle}/>
									{/each}
								</Carousel>
							{/if}
						</div>
					</div>
				</div>
				<img
					src="images/slider-bg.svg"
					loading="lazy"
					alt=""
					class="slider-image-bg"
				/>
			</div>
		</div>
	</main>
</section>


<style>
	.swiper-wrapper.is-slider-main {
		flex-direction: row;
		justify-content: flex-start;
		align-items: flex-start;
		display: flex;
	}

</style>