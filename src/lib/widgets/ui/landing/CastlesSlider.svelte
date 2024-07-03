<script>
	import {promoCastles} from '$shared';
	import {SliderCard} from '$entities';	
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
							Discover our 
							<span class="font-is-victor">
								 simply dummy
							</span>
							<br />
							text of the printing 
						</h2>
					</div>

					<a name="gallery" />
					
					<div class="slider_list-wrapper swiper w-dyn-list">
						<div role="list" class="slider_list swiper-wrapper w-dyn-items">
							<!-- {#each promoCastles as castle} -->
								<SliderCard castle={promoCastles[0]}/>
							<!-- {/each} -->
							
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