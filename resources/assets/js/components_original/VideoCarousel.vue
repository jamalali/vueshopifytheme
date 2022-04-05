<template>
  <div>
    <h2 class="font-extrabold mb-16 text-lg text-center sm:text-3xl md:text-2xl lg:text-3xl xl:text-4xl">
      || 'VideoCarousel.carousel_title' ||
    </h2>

    <div class="relative mx-4">

      <div
        class="absolute w-4 cursor-pointer left-0 transition-300 hover:scale-1.2"
        style="top: 50%;"
        @click="prev"
      >
        <slider-chevron direction="left" />
      </div>

      <slick ref="slick" :options="slickOptions" class="mx-8">
        <div class="relative px-4" v-for="(slide, index) in slides" :key="`slick-${index}`">
          <img class="block shadow-lg-offset w-auto" :src="slide.img">

          <div class="play-button-container absolute flex items-center justify-center inset-x-0 inset-y-0">
            <video-modal
              :button-color="color"
              button-class="w-32"
            >
              <responsive-video-embed
                :video-id="slide.videoId"
                slot="video"
              />
            </video-modal>
          </div>
        </div>

        <div class="relative px-4" v-for="(slide, index) in slides" :key="index">
          <img class="block shadow-lg-offset w-auto" :src="slide.img">

          <div class="play-button-container absolute flex items-center justify-center inset-x-0 inset-y-0">
            <video-modal :button-color="color" button-class="w-32">
              <responsive-video-embed
                :video-id="slide.videoId"
                slot="video"
              />
            </video-modal>
          </div>
        </div>
      </slick>

      <div
        class="absolute w-4 cursor-pointer right-0 transition-300 hover:scale-1.2"
        style="top: 50%;"
        @click="next"
      >
        <slider-chevron direction="right" />
      </div>
    </div>
  </div>
</template>

<script>
import Slick from 'vue-slick';
import breakpoints from '../breakpoints';
import 'slick-carousel/slick/slick.css';
import SliderChevron from './SliderChevron';

export default {
  components: { Slick, SliderChevron },

  props: {
    numVisibleSlides: {
      type: Number,
      default: 3
    },

    slides: {
      type: Array,
      required: true
    },

    color: {
      type: String,
      default: 'green'
    }
  },

  data () {
    return {
      slickOptions: {
        arrows: false,
        centerPadding: 0,
        slidesToShow: this.numVisibleSlides,
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

  computed: {},

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
