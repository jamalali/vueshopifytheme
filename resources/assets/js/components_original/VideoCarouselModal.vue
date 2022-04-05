<template>
  <div>
    <play-button
      class="h-11 w-11"
      @click.native="showModal"
    />

    <portal to="video-modal">
      <div
        v-if="modalVisible"
        class="modal-background"
        @click="hideModal"
      >
        <svg
          class="absolute cursor-pointer mt-4 mr-4 right-0 top-0 w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="-1405.337 11749.662 17.678 17.678"
          @click="hideModal"
        >
          <g
            fill="none"
            stroke="#fff"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-miterlimit="10"
            stroke-width="4px"
            transform="translate(-1697.019 10366.914) rotate(45)"
          >
            <line
              y2="17"
              transform="translate(1196.5 763)"
            />
            <line
              x1="17"
              transform="translate(1188 771.5)"
            />
          </g>
        </svg>

        <div class="h-full items-center max-w-4xl md:mx-24  xl:mx-auto pt-64 sm:pt-128 md:pt-64 relative">
          <slick
            ref="slick"
            :options="slickOptions"
          >
            <div
              class="px-8"
              v-for="(videoId, index) in videoIds"
              :key="index"
            >
              <div>
                <responsive-video-embed :video-id="videoId" />
              </div>
            </div>
          </slick>

          <div class="absolute mb-8 mx-8 left-0 bottom-0 w-8 -mt-4 z-50 cursor-pointer transition-300 md:inset-y-center hover:scale-1.2" @click.stop="prev">
            <slider-chevron direction="left" color="white" />
          </div>

          <div class="absolute mb-8 mx-8 right-0 bottom-0 w-8 -mt-4 z-50 cursor-pointer transition-300 md:inset-y-center hover:scale-1.2" @click.stop="next">
            <slider-chevron direction="right" color="white" />
          </div>
        </div>
      </div>
    </portal>
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
    buttonClass: {
      type: String,
      default: 'absolute right-0 top-0 w-32 md:left-0 md:-ml-32 lg:mt-8'
    },

    buttonColor: {
      type: String,
      default: 'green'
    },

    videoIds: Array
  },

  data () {
    return {
      modalVisible: false,
      slickOptions: {
        arrows: false,
        centerPadding: '0',
        centerMode: true,
        slidesToShow: 1,
        infinite: true
      }
    };
  },

  methods: {
    showModal () {
      this.modalVisible = true;
      document.body.classList.add('body--no-scroll');
    },

    hideModal () {
      this.modalVisible = false;
      document.body.classList.remove('body--no-scroll');
    },

    next () {
      this.$refs.slick.next();
    },

    prev () {
      this.$refs.slick.prev();
    },

    reInit () {
      this.$nextTick(() => this.$refs.slick.reSlick());
    }
  }
};
</script>
