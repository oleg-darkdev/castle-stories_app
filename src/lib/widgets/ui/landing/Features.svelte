<script>
	import {features} from '$shared';
</script>

<section class="section is-gateway">
    <div class="container">
        <div class="space-160" />
        <div  class="w-layout-grid grid">
            <h2 class="text-is-white">
                 
                Seamless, 
                <br /> 
                intuitive features 
                <br /> 
                <span class="serif text-[#a44936]">THE Castles Stories</span> 
                to enhance your 
                <br /> 
                gamification experience.
                <!-- <br /> and typesetting. -->
            </h2>
            <div class="flex-horizontal padding-131">

                <a name="features" />


                <div class="heading-div hide-mb" />
                <div class="txt-block ctr-448">
                    {#each features as feature}
                        <p class="body-22 text-is-white">
                            <span class="serif text-[#a44936]" >
                                {feature.title}
                            </span>
                                {feature.desc}
                        </p>
                    {/each}

                    <!-- <a
                        href="/"
                        class="main-btn w-inline-block"
                    >
                        <div>Work with us</div>
                        <img
                            alt=""
                            loading="lazy"
                            src="images/arrow-top.svg"
                            class="arrow-icon"
                        />
                    </a> -->
                </div>
            </div>
        </div>
        <div class="space-100" />
    </div>
</section>