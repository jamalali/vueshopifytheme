<template>
    <div
        v-if="isMobile"
        class="mt-16 relative"
    >
        <div
            class="absolute cursor-pointer ml-5 left-0 transition-300 w-5 hover:scale-1.2"
            style="top:50%;"
            @click="prev"
        >
            <slider-chevron direction="left" />
        </div>

        <slick
            ref="slick"
            class="mx-16"
            :options="slickOptions"
        >
            <slot />
        </slick>

        <div
            class="absolute cursor-pointer mr-5 right-0 transition-300 w-5 hover:scale-1.2"
            style="top:50%;"
            @click="next"
        >
            <slider-chevron direction="right" />
        </div>
    </div>

    <div v-else class="md:flex md:flex-wrap md:mx-16">
        <slot />
    </div>
</template>

<script>
import Slick from 'vue-slick';
import breakpoints from '../breakpoints';
import SliderChevron from './SliderChevron';
import 'slick-carousel/slick/slick.css';

export default {
  components: { Slick, SliderChevron },

  data () {
    return {
      isMobile: window.innerWidth < breakpoints.md,
      slickOptions: {
        arrows: false,
        centerPadding: 0,
        slidesToShow: 3,
        infinite: false,
        responsive: [
          {
            breakpoint: breakpoints.md - 1,
            settings: {
              slidesToShow: 1,
              centerPadding: '3rem'
            }
          }
        ]
      }
    };
  },

  created () {
    this.resizing = false;

    const listener = window.addEventListener('resize', () => {
      if (this.resizing) return;
      this.resizing = true;

      requestAnimationFrame(() => {
        this.isMobile = window.innerWidth < breakpoints.md;
        this.resizing = false;
      });
    });

    this.$once('hook:beforeDestroy', () => {
      document.removeEventListener('resize', listener);
    });
  },

  methods: {
    next () {
      this.$refs.slick.next();
    },

    prev () {
      this.$refs.slick.prev();
    },

    reInit () {
      this.$nextTick(() => {
        this.$refs.slick.reSlick();
      });
    }
  }
};
</script>
