<script>
	import {navigation, countries, scenarios} from '$shared';
</script>


<footer class="footer w-full">
  <div class="container w-full">
    <div class="space-80"></div>
    <div class="footer-wrapper w-full">
      <div class="flex-footer-top w-full">
        <div class="links-footer">
          <div class="link-div">
            <div class="body-16 all-caps">Countries</div>
            <div class="w-dyn-list">
              <div role="list" class="footer-products w-dyn-items">

                {#each countries[0].subregions as country}
                <!-- {country.href} -->
                  <div role="listitem" class="w-dyn-item">
                    <a href="{country.href}" target="_blank" class="footer-link">{country.name}</a>
                  </div>
                {/each}

              </div>
            </div>
            <a href="/" class="footer-link is-ethy">Lorem  <span class="text-span">Ipsum  simply dummy text</span>
            </a>
          </div>
          <div class="link-div">
            <div class="body-16 all-caps">Scenarios</div>
            <div class="w-dyn-list">
              <div role="list" class="footer-products w-dyn-items">
                {#each countries as country}
                  <div role="listitem" class="w-dyn-item">
                    <a href="/scenarios" target="_blank" class="footer-link">{country.region}</a>
                  </div>
                {/each}

              </div>
            </div>
          </div>
          <div class="link-div">
            <div class="body-16 all-caps">Navigation</div>
            <a href="/app" class="footer-link">App</a>
            {#each navigation as nav}
              <a href="{nav.href}" class="footer-link">{nav.title}</a>
            {/each}
          </div>
        </div>
        <div class="in-touch-div">
          <div class="txt-block ctr-448">
            <p class="body-22">
              <span class="serif text-[#a44936]">THE Castles Stories.</span>
                Educational boardgame about castles and fortifications.
            </p>
              <a href="https://oleg-darkdev.vercel.app/" target="_blank" class="main-btn muted w-inline-block">
                <div>Get in touch</div>
              <img alt="" loading="lazy" src="images/arrow.svg" class="arrow-icon">
            </a>
          </div>
        </div>
      </div>
      <div class="flex-footer-bottom w-full">
        <div class="body-16-md all-caps">Copyright © 2024</div>
        <div class="body-16-md all-caps">
          <a href="/" target="_blank" class="body-16-md all-caps"> Lorem Ipsum is simply dummy text of the printing </a>
          <a href="/" class="body-16-md all-caps">Lorem Ipsum is simply dummy </a> text of the printing
        </div>
      </div>
    </div>
  </div>
</footer>
