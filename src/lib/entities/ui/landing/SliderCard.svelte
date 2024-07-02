<script>
    export let castle;

</script>

<div role="listitem" class="slider_list-item swiper-slide w-dyn-item">
    <div class="slider_item-wrapper is-vertical">
        <div class="product-name-block">
            <div class="div-block-20">
                <h3 class="product-name">{castle.title}</h3>
                <h4 class="colon-spacer">:</h4>
                <h4 class="product-motto">{castle.shortDesc}</h4>
            </div>
            <div class="btn-holder mg-t-40">
                <a
                    href="{castle.link}"
                    class="main-btn custom w-inline-block"
                >
                    <div class="div-block-8">
                        <div>Discover</div>
                        <div class="text-block-11">{castle.title}</div>
                    </div>
                    <img
                        alt=""
                        loading="eager"
                        src="images/arrow-top.svg"
                        class="arrow-icon"
                    />
                </a>
            </div>
        </div>
        <div class="product-images">
            <img
                alt=""
                src="images/slider/main.webp"
                loading="eager"
                sizes="(max-width: 479px) 81vw, (max-width: 767px) 82vw, 28vw"
                class="image-4"
            />
            <img
                alt=""
                src="images/slider/cover.webp"
                loading="eager"
                sizes="(max-width: 767px) 32vw, 15vw"
                class="model-img-small"
            />
        </div>
    </div>
</div>