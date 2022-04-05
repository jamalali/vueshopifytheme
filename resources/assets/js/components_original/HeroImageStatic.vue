<template>
  <div class="w-full md:w-1/2 lg:w-1/2 xl:w-full xxxl:w-1/2 md:w-auto flex justify-center items-center bg-hero-mobile-2020 md:bg-img-none md:bg-white bg-center hero-image-static-container"> <!-- basis-100 md:basis-65 xxxl:basis-80 -->
      <div id="hero-carousel" class="relative md:w-9/10 xl:w-auto">
          <div class="md:vivo-hidden">
            <slot name="caption_mobile"></slot>
          </div>
            <div class="hidden xl:block">
              <img
                class="hero-carousel-img"
                style=""
                :src="image"
              />
            </div>
          <div class="hero-carousel-caption vivo-hidden md:flex xl:min-w-sm">
              <slot name="caption"></slot>
          </div>

          <div class="hero-carousel-tablet-image md:flex xl:hidden md:pt-36 bg-atc-tablet-grey md:min-h-160 flex flex-col justify-end">
            <img
              class="w-full md:self-end lg:w-auto lg:max-w-125"
              :src="mid_image"
            />
          </div>

          <slot name="caption_tabs"></slot>
      </div>
  </div>
</template>

<style scoped>
.hero-carousel-caption {
  flex-direction: column;
  position: absolute;
  top: 5%;
  left: 4%;
}

@media only screen and (min-width: 768px) {
  .hero-carousel-img {
    min-height: 38rem;
    object-fit: cover;
    height: 100%;
  }
}

#hero-carousel > div.hero-carousel-caption.vivo-hidden.md\:flex > div > hgroup > p {
  width: auto;
  max-width: 30rem;
}

@media (max-width: 1200px) {
  .hero-carousel-caption {
    left: 0%;
  }
}
</style>

<script>
export default {
  name: 'hero-image-static',

  props: {
    image: String,
    mid_image: String
  }
};

</script>
