<template>
  <carousel
    :loop="options && options.loop"
    :per-page="1"
    :paginationEnabled="false"
    :navigationEnabled="true"
    ref="carousel">

    <slide v-for="(slide, index) in slides" :key="'slide-'+index"
      :index="index"
      :class="{
        'last-slide':(index === slides.length - 1)
      }">
      <div class="text-center mx-auto mt-8 px-8">
        <div v-if="textPosition === 'top'" :class="textTopStyles" class="mx-auto mb-4"
          v-html="slide.text">
        </div>
        <div class="image h-48" :style="{ backgroundImage: 'url(' + slide.image + ')' }">
        </div>
        <div v-if="textPosition === 'bottom'" class="mx-auto mt-4 text-sm leading-normal"
          v-html="slide.text">
        </div>
      <template v-if="fullNav">
        <div v-if="options && !slide.hiddenArrow ? options.arrow : false" class="arrow flex items-center justify-between">
          <div class="mx-auto">
            <img :src="options.arrow" alt="" @click.prevent="previous" class="transform scale-x-flip" />
          </div>
          <div :class="['text-'+theme]" class="font-bold text-lg uppercase">
            || 'ImageCarouselMobile.swipe_text' ||
          </div>
          <div class="mx-auto">
            <img :src="options.arrow" alt="" @click.prevent="next" />
          </div>
        </div>
      </template>
      <template v-else>
        <div v-if="options && !slide.hiddenArrow ? options.arrow : false" class="arrow mx-auto mt-4">
          <img :src="options.arrow" alt="" @click.prevent="next" />
        </div>
      </template>
      </div>
    </slide>

  </carousel>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';

export default {
  components: {
    Carousel,
    Slide
  },

  props: {
    theme: {
      type: String,
      default: 'black'
    },
    textPosition: {
      type: String,
      default: 'bottom'
    },
    textTopStyles: {
      type: String,
      default: 'font-extrabold text-lg leading-normal'
    },
    slides: {
      type: Array,
      required: true
    	},
    fullNav: {
      type: Boolean,
      default: false
    },
    options: {
      type: Object
    }
  },

  methods: {
    previous () {
      this.$refs.carousel.handleNavigation('backward');
    },

    next () {
      this.$refs.carousel.handleNavigation();
    }
  }
};
</script>

<style scoped>
.VueCarousel-slide {
  position: relative;
}
.VueCarousel-slide .image {
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
}
.VueCarousel-slide .arrow {
  cursor: pointer;
}
>>> .VueCarousel-navigation .VueCarousel-navigation-button {
  width: 15%;
  height: 100%;
  padding: 0;
  opacity: 0;
}
>>> .VueCarousel-navigation .VueCarousel-navigation-prev {
  left: 15%;
}
>>> .VueCarousel-navigation .VueCarousel-navigation-next {
  right: 15%;
}
</style>
