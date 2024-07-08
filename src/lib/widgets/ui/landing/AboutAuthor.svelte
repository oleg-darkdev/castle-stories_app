

<section class="section">
<div class="eco-block">
    <div class="w-layout-grid grid-2-1fr">
    <div  class="left-block about-us">
        <div class="txt-flex-vert about-us">
            <div class="body-18 text-white-70">
                About author
            </div>
        <h4 class="h5-heading text-is-white">
            Lorem Ipsum is simply
            <br>
             dummy text of the printing and typesetting industry.
        </h4>
        </div>
        <div class="w-layout-grid grid-2">
        <div class="flex-horizontal eco">
            <img src="images/icon-eco.svg" loading="lazy" alt="" class="eco-icon">
            <p class="body-18 text-white-70">
Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.            </p>
        </div>
        <div class="flex-horizontal eco-block">
            <img src="images/icon-eco2.svg" loading="lazy" alt="" class="eco-icon">
            <p class="body-18 text-white-70">
Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.            </p>
        </div>
        </div>
    </div>
    <div class="block-right-about eco">
        <div class="animated-img-opacity eco">
        <img src="images/recyclable-material-min.png" loading="lazy"  sizes="(max-width: 479px) 100vw, (max-width: 767px) 262px, (max-width: 991px) 31vw, 32vw" alt="Recyclable%20material"  class="on-top-img eco-img">
        </div>
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