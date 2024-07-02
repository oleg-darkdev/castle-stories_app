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
            <div class="body-16 all-caps">Scenarios</div>
            <div class="w-dyn-list">
              <div role="list" class="footer-products w-dyn-items">

                {#each scenarios as scenario}
                  <div role="listitem" class="w-dyn-item">
                    <a href="{scenario.href}" target="_blank" class="footer-link">{scenario.title}</a>
                  </div>
                {/each}
                
              </div>
            </div>
            <a href="/" class="footer-link is-ethy">Lorem  <span class="text-span">Ipsum  simply dummy text</span>
            </a>
          </div>
          <div class="link-div">
            <div class="body-16 all-caps">Countries</div>
            <div class="w-dyn-list">
              <div role="list" class="footer-products w-dyn-items">
                {#each countries as country}
                  <div role="listitem" class="w-dyn-item">
                    <a href="{country.href}" target="_blank" class="footer-link">{country.title}</a>
                  </div>
                {/each}

              </div>
            </div>
          </div>
          <div class="link-div">
            <div class="body-16 all-caps">Navigation</div>
            {#each navigation as nav}
              <a href="{nav.href}" class="footer-link">{nav.title}</a>
            {/each}
          </div>
        </div>
        <div class="in-touch-div">
          <div class="txt-block ctr-448">
            <p class="body-22">
              <span class="serif">THE Castles Stories</span>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
            <a  href="/" class="main-btn muted w-inline-block">
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