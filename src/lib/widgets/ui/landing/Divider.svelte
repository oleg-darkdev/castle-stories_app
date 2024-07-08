<section class="section">
    <div   class="ceo-quote">
      <div class="w-layout-grid grid-2-1fr">
        <div   class="left-block about-us">
          <div class="txt-flex-vert about-us">
            <h3 class="h5-heading text-is-white">
Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.

            </h3>
            <div class="body-18 text-white-70">
                Lorem Ipsum is simply
            </div>
          </div>
        </div>
        <div class="block-right-about">
          <div class="">
            <img src="images/divider.webp" loading="lazy" izes="(max-width: 479px) 100vw, (max-width: 767px) 321px, 28vw" alt="Design Sketch Indecom"  class="on-top-img quote">
          </div>
          <div class="txt-block-absolute left-bottom">Lorem Ipsum is simply</div>
        </div>
      </div>
    </div>
</section>

  

<style>
.block-right-about {
  width: 100%;
  height: 50em;
  background-image: url("images/quote-background.webp");
  background-position: 50%;
  background-size: cover;
  justify-content: center;
  align-items: center;
  display: flex;
  position: relative;
}

.block-right-about.eco {
  background-image: url("/images/sustainability-background.webp");
}


@media screen and (max-width: 767px) {
  .block-right-about {
    height: 30rem;
  }

  .block-right-about.eco {
    height: 24.6744rem;
  }
}

@media screen and (max-width: 991px) {
  .block-right-about.eco {
    height: 100%;
    object-fit: cover;
  }
}
</style>