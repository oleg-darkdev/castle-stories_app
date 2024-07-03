<script>
	import {promoCastles} from '$shared';
	import {SliderCard} from '$entities';	
	import Carousel from 'svelte-carousel'
    import { browser } from '$app/environment'
</script>

<section class="section">
<div class="container">
    <div class="hd-block mg-t-24">
    <h4>Related Scenarios</h4>
    </div>
    <div class="space-80 is-40-mb"></div>
    <div class="related-collection-desktop w-dyn-list">
    <div role="list" class="collection-list-related w-dyn-items">
        {#each promoCastles as scenario}
            <div role="listitem" class="w-dyn-item">
                <a href="/" class="link-model w-inline-block">
                    <div class="model-tem-div">
                    <div class="modul-img">
                        <img alt="first {scenario.title} promo image" loading="lazy" src="{scenario.mainImg}"  class="model-img-100">
                        <img alt="second {scenario.title} promo image" src="{scenario.coverImg}" loading="lazy" sizes="(max-width: 767px) 100vw, (max-width: 991px) 31vw, 32vw"  class="model-img-abs">
                    </div>
                    <div class="body-22">{scenario.title}</div>
                    </div>
                </a>
            </div>
        {/each}
    </div>
    </div>
    <div class="related-collection-mobile w-dyn-list">
    <div role="list" class="collection-list-related is-mobile w-dyn-items">
        {#each promoCastles as scenario}
            <div role="listitem" class="w-dyn-item">
                <a href="/"  class="link-model w-inline-block">
                    <div class="model-tem-div">
                    <div class="modul-img">
                        <img lt="first {scenario.title} promo image" loading="lazy" src="{scenario.mainImg}" sizes="(max-width: 479px) 45vw, (max-width: 767px) 47vw, 100vw"  class="model-img-100">
                        <img alt="second {scenario.title} promo image" src="{scenario.coverImg}"  loading="lazy" sizes="(max-width: 479px) 45vw, (max-width: 767px) 47vw, 100vw" class="model-img-abs">
                    </div>
                    <div class="body-22">{scenario.title}</div>
                    </div>
                </a>
            </div>
        {/each}
    </div>
    </div>
</div>
<!-- <div class="space-160 bottom-line"></div> -->
</section>