<script>
	import {stats} from '$shared';
</script>

<section class="section-sticy h-auto">
  <div class="sticky-container">
    <div class="animation-wrapper">
      {#each stats as stat}

      <div class="animation-block is-1">
        <div class="w-layout-grid animation-grid">
          <img src="{stat.img}" loading="lazy"  sizes="100vw" alt="{stat.title} image" class="image-animation is-1">
          <div class="hd-block hide-mobile">
            <h2 class="animation-heading is-1">{stat.count}</h2>
          </div>
          <div  class="text-block hide-mobile">
            <div class="animation-text is-1">{stat.title}</div>
          </div>
          <div class="animation-mobile-content">
            <div class="hd-block">
              <h2 class="animation-heading is-1">{stat.count}</h2>
            </div>
            <div class="text-block">
              <div class="animation-text is-1">{stat.title}</div>
            </div>
          </div>
        </div>
      </div>
      {/each}
      
    </div>
  </div>
</section>


<style>
.section-sticy {
  background-color: #192120;
  padding-left: 1.5em;
  padding-right: 1.5em;
  position: relative;
}
</style>