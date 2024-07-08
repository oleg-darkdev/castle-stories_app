<script>
	import {countries, } from '$shared';



	import Carousel from 'svelte-carousel'
  import { browser } from '$app/environment'
</script>


<section class=" scenarios">
  <div class="space-80"></div>
  <div class="slider-main_component is-philosphy">
    <h4 class="text-is-white">Scenarios</h4>
    <!-- <div class="slider-main_top-wrapper">
      <h3 class="text-is-white text-align-center">
        Discover our
        <span class="font-is-victor">
          iconic
        </span>
        collections, crafted to last.
      </h3>
      <div class="slider-main_button-wrapper">
        <a href="/" class="slider-main_button swiper-prev w-inline-block">
          <div class="slider-main_button-icon is-reversed w-embed">
            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 29.541 22.323">
              <g id="Group_44" data-name="Group 44" transform="translate(0 1.014)">
                <path id="Path_1" data-name="Path 1" d="M115.445,20.633l9.311-10.148L115.445.338" transform="translate(-97.25 -0.338)" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="3"></path>
                <line id="Line_1" data-name="Line 1" x1="27.506" transform="translate(0 10.148)" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="3"></line>
              </g>
            </svg>
          </div>
        </a>
        <a href="/" class="slider-main_button swiper-next w-inline-block">
          <div class="slider-main_button-icon w-embed">
            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 29.541 22.323">
              <g id="Group_44" data-name="Group 44" transform="translate(0 1.014)">
                <path id="Path_1" data-name="Path 1" d="M115.445,20.633l9.311-10.148L115.445.338" transform="translate(-97.25 -0.338)" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="3"></path>
                <line id="Line_1" data-name="Line 1" x1="27.506" transform="translate(0 10.148)" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="3"></line>
              </g>
            </svg>
          </div>
        </a>
      </div>
    </div> -->
    <div class="swiper is-slider-main is-philosopgy  flex flex-row flex-wrap justify-between">
      <div role="list" class="flex flex-row is-slider-main w-dyn-items max-w-[700px]  overflow-hidden">
      {#if browser}
          <Carousel

            duration={400}
            autoplay
            timingFunction="linear"
            dots={false}
            arrows={false}
            swiping={true}
            >

            {#each countries as country}
              <div role="listitem" class="is-slider-main w-dyn-item mb-10">
                <div class="slider-main-link">
                  <div style="background-color:hsla(0, 0.00%, 100.00%, 1.00)" class="slider-card">
                    <div class="flex-horizontal align-center start-mobile">
                      <div class='flex flex-row '>
                          <h5 class=' mr-10 '> <span class='serif'> {country.castles}</span>+  castles</h5>
                          <h5 class=' '> <span class='serif'>{country.subregions.length}</span> countries</h5>
                      </div>
                      <div class="partner-country">
                        <img src="images/map_point.svg" loading="lazy" alt="Location Pin" class="location-icon">
                        <div class="body-16 is-country">{country.region}</div>
                      </div>
                    </div>
                    <div>
                      <p class="body-18 is-medium">{country.region} scenario </p>
                      <div class="mg-t-16">
                        <!-- {#each country.desc as desc} -->
                          <!-- <p> -->
                            {country.desc}
                          <!-- </p> -->
                        <!-- {/each} -->
                      </div>
                    </div>
                    
                  </div>
                </div>
              </div>
            {/each}
          </Carousel>
        {/if}
        </div>

        <div role="listitem" class="swiper-slide max-w-[700px] is-slider-main w-dyn-item">
            <div class="slider-main-link">
                <div style="background-color:hsla(33.10344827586207, 13.62%, 41.76%, 1.00)" class="slider-card">
                <div class="flex-horizontal align-center start-mobile w-condition-invisible">
                    <img src="" loading="lazy" alt="" class="partner-image w-dyn-bind-empty">
                    <div class="partner-country">
                    <img src="images/map_point.svg" loading="lazy" alt="Location Pin" class="location-icon">
                    <div class="body-16 is-country w-dyn-bind-empty"></div>
                    </div>
                </div>
                <div class="w-condition-invisible">
                    <p class="body-18 is-medium">Collaborate</p>
                    <div class="mg-t-16">Would you like to create a scenario for your country?</div>
                </div>
                <div class="contact-card-content">
                    <h4 class="text-is-white h6-heading">Would you like to create a scenario for your country?</h4>
                    <div class="div-block-11">
                    <p class="body-18 text-is-white">Would you like to talk about your dream project? Do not hesitate to get in touch for more information and requests.</p>
                    <a href="https://oleg-darkdev.vercel.app/" class="main-btn mg-t-32 w-inline-block">
                        <div>Get in touch</div>
                        <img alt="" loading="lazy" src="images/arrow.svg" class="arrow-icon">
                    </a>
                    </div>
                </div>
                </div>
            </div>
        </div>

    </div>
  </div>
  <div class="space-80"></div>
</section>



<style>
.scenarios {
  background-image: url("images/649f20bb5522b0e5c3b4e902_AS_Becker-min.webp");
  background-position: 50%;
  background-size: cover;
}

</style>