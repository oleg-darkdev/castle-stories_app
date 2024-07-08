<script>

    const steps = [
        '',
        '',
        '',
        '',
    ]
</script>

<section class="section">
<div class="container">
    <div class="space-80"></div>
    <div class="grid-block">
    <div class="flex-horizontal top-bottom-line">
        <div class="body-22">The project Story</div>
        <div class="numbers-flex">
        <div class="body-22">1950s</div>
        <div class="line-n"></div>
        <div class="body-22">2023</div>
        </div>
    </div>
    {#each steps as step}
    <div class="w-layout-grid about-grid-story line-bottom">
        <div  class="flex-horizontal story">
        <div class="txt-block number-story">
            <h2 class="h3-heading">1950s</h2>
        </div>
        <div class="txt-block ctr-448">
            <p class="body-22">
Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.            </p>
            <div class="location-story">
            <img src="images/map_point.svg" loading="lazy" alt="Location dot ">
            <div class="body-16">Lorem Ipsum has been</div>
            </div>
        </div>
        </div>
        <div class="img-story flex-horz">
        <img src="images/1-step.webp" loading="lazy" alt="" class="story-img-small">
        <img src="images/1-step.webp" loading="lazy" sizes="(max-width: 479px) 92vw, (max-width: 767px) 95vw, (max-width: 991px) 25vw, 21vw"  alt="" class="story-img-big">
        </div>
    </div>
   {/each}
    <div class="space-80"></div>
    </div>
</div>
</section>