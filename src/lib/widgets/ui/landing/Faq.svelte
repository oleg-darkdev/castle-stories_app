<script>
    import {faq} from '$shared';
</script>

<section class="section">
<div class="py-20 px-6">
    <div class="usp-block">

        <a name='faq' />
        <div class="w-layout-grid grid-usp-3">
            {#each faq as faqData}
            <div  class="img-txt-usp group">
            <!-- <img src="images/icon_service.svg" loading="lazy" alt="" class="usp-icon"> -->
            <div class="txt-flex-vert space-16px group-hover:bg-[#a44936]  px-2 py-6 group-hover:text-neutral-100 ">
                <div class="body-22 " on:click={()=> faqData.showAnwer = !faqData.showAnwer}>{faqData.q}</div>

                {#if faqData.showAnwer}
                    {#each faqData.a as answer}
                        <p class="body-18 group-hover:text-neutral-300 group-hover:bg-[#a44936]  ">
                            {answer}
                        </p>
                    {/each}
                {/if}
            </div>
            </div>
            {/each}
        </div>
    </div>
</section>
