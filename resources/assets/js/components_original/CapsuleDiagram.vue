<template>

  <div class="CapsuleDiagram relative">
    <div :class="[version]" class="hidden lg:block relative w-content mx-auto">

      <img class="top-layer absolute z-10 pointer-events-none" :src="topLayer" />

      <div class="point a" @click="goToPage(0)">
        <svg id="capsule-a" xmlns="http://www.w3.org/2000/svg" width="331.506" height="245.338" viewBox="0 0 331.506 245.338">
          <g id="Group_6747" data-name="Group 6747" transform="translate(-743 -5123.931)">
            <g id="Ellipse_854" data-name="Ellipse 854" transform="translate(743 5265.992)" fill="none" stroke="#000" stroke-width="3">
              <ellipse cx="51.639" cy="51.639" rx="51.639" ry="51.639" stroke="none"/>
              <ellipse cx="51.639" cy="51.639" rx="50.139" ry="50.139" fill="none"/>
            </g>
            <path id="Path_9370" data-name="Path 9370" d="M226.189,1.672-10.867,164.906" transform="translate(847.467 5123.494)" fill="none" stroke="#000" stroke-width="3"/>
          </g>
        </svg>
        <div class="circle corner left-0 bottom-0">
          <div class="text">|| 'CapsuleDiagram.a_label' ||</div>
        </div>
      </div>
      <div class="point b" @click="goToPage(1)">
        <svg id="capsule-b2" xmlns="http://www.w3.org/2000/svg" width="339.814" height="261.5" viewBox="0 0 339.814 261.5">
          <g id="Group_6752" data-name="Group 6752" transform="translate(-1402.131 -5123.778)">
            <g id="Group_6408" data-name="Group 6408" transform="translate(1402.833 5125.231)">
              <line id="Line_1486" data-name="Line 1486" x2="242" y2="172" transform="translate(0.167 -0.231)" fill="none" stroke="#1d1d1d" stroke-width="3"/>
            </g>
            <g id="Group_6745" data-name="Group 6745">
              <g id="Ellipse_845" data-name="Ellipse 845" transform="translate(1630.667 5274)" fill="none" stroke="#1d1d1d" stroke-width="3">
                <ellipse cx="55.639" cy="55.639" rx="55.639" ry="55.639" stroke="none"/>
                <ellipse cx="55.639" cy="55.639" rx="54.139" ry="54.139" fill="none"/>
              </g>
            </g>
          </g>
        </svg>
        <div class="circle corner right-0 bottom-0">
          <div class="text">|| 'CapsuleDiagram.b2_label' ||</div>
        </div>
      </div>
      <div class="point c" @click="goToPage(2)">
        <svg id="capsule-b12" xmlns="http://www.w3.org/2000/svg" width="306.133" height="242.233" viewBox="0 0 306.133 242.233">
          <g id="Group_6751" data-name="Group 6751" transform="translate(-1432.812 -4881.488)">
            <g id="Ellipse_845" data-name="Ellipse 845" transform="translate(1635.667 4881.488)" fill="none" stroke="#1d1d1d" stroke-width="3">
              <ellipse cx="51.639" cy="51.639" rx="51.639" ry="51.639" stroke="none"/>
              <ellipse cx="51.639" cy="51.639" rx="50.139" ry="50.139" fill="none"/>
            </g>
            <path id="Path_9623" data-name="Path 9623" d="M9.767,155.349,227.562,0" transform="translate(1423.916 4967.151)" fill="none" stroke="#1d1d1d" stroke-width="3"/>
          </g>
        </svg>
        <div class="circle corner right-0 top-0">
          <div class="text">|| 'CapsuleDiagram.b12_label' ||</div>
        </div>
      </div>
      <div class="point d" @click="goToPage(3)">
        <svg id="capsule-calcium" xmlns="http://www.w3.org/2000/svg" width="112.599" height="314.012" viewBox="0 0 112.599 314.012">
          <g id="Group_6749" data-name="Group 6749" transform="translate(-1192.172 -4808.488)">
            <g id="Path_9395" data-name="Path 9395" transform="translate(1192.172 4808.488)" fill="none">
              <path d="M56.3,0A56.3,56.3,0,1,1,0,56.3,56.3,56.3,0,0,1,56.3,0Z" stroke="none"/>
              <path d="M 56.29955673217773 2.999992370605469 C 49.10284042358398 2.999992370605469 42.12299346923828 4.4088134765625 35.55388641357422 7.187309265136719 C 29.20737457275391 9.871658325195312 23.50698852539062 13.71517944335938 18.61107635498047 18.61107635498047 C 13.71517181396484 23.50699615478516 9.871658325195312 29.20737457275391 7.187309265136719 35.55389404296875 C 4.408805847167969 42.12299346923828 2.999992370605469 49.10284423828125 2.999992370605469 56.299560546875 C 2.999992370605469 63.49627685546875 4.408805847167969 70.47612762451172 7.187309265136719 77.04522705078125 C 9.871658325195312 83.39174652099609 13.71517181396484 89.09212493896484 18.61107635498047 93.98804473876953 C 23.50698852539062 98.88394165039062 29.20737457275391 102.7274627685547 35.55388641357422 105.4118118286133 C 42.12299346923828 108.1903076171875 49.10284042358398 109.5991287231445 56.29955673217773 109.5991287231445 C 63.49627304077148 109.5991287231445 70.47611999511719 108.1903076171875 77.04522705078125 105.4118118286133 C 83.39173889160156 102.7274627685547 89.09212493896484 98.88394165039062 93.98802185058594 93.98804473876953 C 98.88394165039062 89.09212493896484 102.7274398803711 83.39174652099609 105.4117889404297 77.04522705078125 C 108.1902923583984 70.47612762451172 109.5991058349609 63.49627685546875 109.5991058349609 56.299560546875 C 109.5991058349609 49.10284423828125 108.1902923583984 42.12299346923828 105.4117889404297 35.55389404296875 C 102.7274398803711 29.20737457275391 98.88394165039062 23.50699615478516 93.98802185058594 18.61107635498047 C 89.09212493896484 13.71517944335938 83.39173889160156 9.871658325195312 77.04522705078125 7.187309265136719 C 70.47611999511719 4.4088134765625 63.49627304077148 2.999992370605469 56.29955673217773 2.999992370605469 M 56.29955673217773 -7.62939453125e-06 C 87.3929443359375 -7.62939453125e-06 112.5991058349609 25.2061767578125 112.5991058349609 56.299560546875 C 112.5991058349609 87.3929443359375 87.3929443359375 112.5991287231445 56.29955673217773 112.5991287231445 C 25.2061767578125 112.5991287231445 -7.62939453125e-06 87.3929443359375 -7.62939453125e-06 56.299560546875 C -7.62939453125e-06 25.2061767578125 25.2061767578125 -7.62939453125e-06 56.29955673217773 -7.62939453125e-06 Z" stroke="none" fill="#1d1d1d"/>
            </g>
            <path id="Path_9621" data-name="Path 9621" d="M0,0V202.773" transform="translate(1246.772 4919.727)" fill="none" stroke="#1d1d1d" stroke-width="3" opacity="0.8"/>
          </g>
        </svg>
        <div class="circle middle top-0">
          <div class="text">|| 'CapsuleDiagram.calcium_label' ||</div>
        </div>
      </div>
      <div class="point e" @click="goToPage(4)">
        <svg id="capsule-choline" xmlns="http://www.w3.org/2000/svg" width="113.911" height="350.899" viewBox="0 0 113.911 350.899">
          <g id="Group_6754" data-name="Group 6754" transform="translate(-1257.641 -5125.5)">
            <g id="Ellipse_850" data-name="Ellipse 850" transform="translate(1257.641 5362.488)" fill="#fff" stroke="#1d1d1d" stroke-width="3">
              <ellipse cx="56.956" cy="56.956" rx="56.956" ry="56.956" stroke="none"/>
              <ellipse cx="56.956" cy="56.956" rx="55.456" ry="55.456" fill="none"/>
            </g>
            <line id="Line_1488" data-name="Line 1488" y2="238.938" transform="translate(1313.625 5125.5)" fill="none" stroke="#1d1d1d" stroke-width="3" opacity="0.8"/>
          </g>
        </svg>
        <div class="circle middle bottom-0">
          <div class="text">|| 'CapsuleDiagram.choline_label' ||</div>
        </div>
      </div>
      <div class="point f" @click="goToPage(5)">
        <svg id="capsule-d3" xmlns="http://www.w3.org/2000/svg" width="324.801" height="254.874" viewBox="0 0 324.801 254.874">
          <g id="Group_6748" data-name="Group 6748" transform="translate(-749 -4869)">
            <g id="Group_6407" data-name="Group 6407" transform="translate(754 4874.488)">
              <path id="Path_9371" data-name="Path 9371" d="M244.426,154.157-6.5-26.3" transform="translate(74.5 94.012)" fill="none" stroke="#1d1d1d" stroke-width="3"/>
              <g id="Ellipse_844" data-name="Ellipse 844" transform="translate(-5 -5.488)" fill="#fff" stroke="#1d1d1d" stroke-width="3">
                <ellipse cx="51.5" cy="52" rx="51.5" ry="52" stroke="none"/>
                <ellipse cx="51.5" cy="52" rx="50" ry="50.5" fill="none"/>
              </g>
            </g>
          </g>
        </svg>
        <div class="circle corner left-0 top-0">
          <div class="text">|| 'CapsuleDiagram.d3_label' ||</div>
        </div>
      </div>
      <div class="point g" @click="goToPage(6)">
        <svg id="capsule-iodine" xmlns="http://www.w3.org/2000/svg" width="112.599" height="314.168" viewBox="0 0 112.599 314.168">
          <g id="Group_6746" data-name="Group 6746" transform="translate(-1016.667 -4808.488)">
            <g id="Ellipse_849" data-name="Ellipse 849" transform="translate(1016.667 4808.488)" fill="#fff" stroke="#1d1d1d" stroke-width="3">
              <ellipse cx="56.3" cy="56.3" rx="56.3" ry="56.3" stroke="none"/>
              <ellipse cx="56.3" cy="56.3" rx="54.8" ry="54.8" fill="none"/>
            </g>
            <path id="Path_9622" data-name="Path 9622" d="M0,0V202.93" transform="translate(1073.656 4919.727)" fill="none" stroke="#1d1d1d" stroke-width="3" opacity="0.8"/>
          </g>
        </svg>
        <div class="circle middle top-0">
          <div class="text">|| 'CapsuleDiagram.iodine_label' ||</div>
        </div>
      </div>
      <div class="point h" @click="goToPage(7)">
        <svg id="capsule-k2" xmlns="http://www.w3.org/2000/svg" width="113.911" height="347.899" viewBox="0 0 113.911 347.899">
          <g id="Group_6753" data-name="Group 6753" transform="translate(-1392.584 -5125.5)">
            <g id="Ellipse_853" data-name="Ellipse 853" transform="translate(1392.584 5359.488)" fill="#fff" stroke="#1d1d1d" stroke-width="3">
              <ellipse cx="56.956" cy="56.956" rx="56.956" ry="56.956" stroke="none"/>
              <ellipse cx="56.956" cy="56.956" rx="55.456" ry="55.456" fill="none"/>
            </g>
            <line id="Line_1493" data-name="Line 1493" y2="235.938" transform="translate(1449.323 5125.5)" fill="none" stroke="#1d1d1d" stroke-width="3" opacity="0.8"/>
          </g>
        </svg>
        <div class="circle middle bottom-0">
          <div class="text">|| 'CapsuleDiagram.k2_label' ||</div>
        </div>
      </div>
      <div class="point j" @click="goToPage(8)">
        <svg id="capsule-selenium" xmlns="http://www.w3.org/2000/svg" width="113.911" height="354.899" viewBox="0 0 113.911 354.899">
          <g id="Group_6756" data-name="Group 6756" transform="translate(-990 -5122.5)">
            <g id="Ellipse_852" data-name="Ellipse 852" transform="translate(990 5363.488)" fill="#fff" stroke="#1d1d1d" stroke-width="3">
              <ellipse cx="56.956" cy="56.956" rx="56.956" ry="56.956" stroke="none"/>
              <ellipse cx="56.956" cy="56.956" rx="55.456" ry="55.456" fill="none"/>
            </g>
            <line id="Line_1489" data-name="Line 1489" y2="242.938" transform="translate(1047.03 5122.5)" fill="none" stroke="#1d1d1d" stroke-width="3" opacity="0.8"/>
          </g>
        </svg>
        <div class="circle middle bottom-0">
          <div class="text">|| 'CapsuleDiagram.selenium_label' ||</div>
        </div>
      </div>
      <div class="point k" @click="goToPage(9)">
        <svg id="capsule-zinc" xmlns="http://www.w3.org/2000/svg" width="113.911" height="351.899" viewBox="0 0 113.911 351.899">
          <g id="Group_6755" data-name="Group 6755" transform="translate(-1121.545 -5125.5)">
            <g id="Ellipse_851" data-name="Ellipse 851" transform="translate(1121.545 5363.488)" fill="#fff" stroke="#1d1d1d" stroke-width="3">
              <ellipse cx="56.956" cy="56.956" rx="56.956" ry="56.956" stroke="none"/>
              <ellipse cx="56.956" cy="56.956" rx="55.456" ry="55.456" fill="none"/>
            </g>
            <line id="Line_1487" data-name="Line 1487" y2="241.14" transform="translate(1177.728 5125.5)" fill="none" stroke="#1d1d1d" stroke-width="3" opacity="0.8"/>
          </g>
        </svg>
        <div class="circle middle bottom-0">
          <div class="text">|| 'CapsuleDiagram.zinc_label' ||</div>
        </div>
      </div>
      <div class="point l" @click="goToPage(10)">
        <svg data-v-5a0ae3b8="" id="capsule-iron" xmlns="http://www.w3.org/2000/svg" width="112.599" height="314.168" viewBox="0 0 112.599 314.168">
          <g data-v-5a0ae3b8="" id="Group_6746" data-name="Group 6746" transform="translate(-1016.667 -4808.488)">
            <g data-v-5a0ae3b8="" id="Ellipse_849" data-name="Ellipse 849" transform="translate(1016.667 4808.488)" fill="#fff" stroke="#1d1d1d" stroke-width="3">
              <ellipse data-v-5a0ae3b8="" cx="56.3" cy="56.3" rx="56.3" ry="56.3" stroke="none"></ellipse>
              <ellipse data-v-5a0ae3b8="" cx="56.3" cy="56.3" rx="54.8" ry="54.8" fill="none"></ellipse>
            </g>
            <path data-v-5a0ae3b8="" id="Path_9622" data-name="Path 9622" d="M0,0V202.93" transform="translate(1073.656 4919.727)" fill="none" stroke="#1d1d1d" stroke-width="3" opacity="0.8"></path>
          </g>
        </svg>
        <div class="circle middle top-0">
          <div class="text">|| 'CapsuleDiagram.iron_label' ||</div>
        </div>
      </div>

      <img class="bottom-layer" :src="bottomLayer" />

    </div>

    <div v-show="modalVisible" class="lg:absolute lg:top-0 lg:w-full lg:z-20 lg:pt-2">
      <carousel
        :autoplay="false"
        :loop="true"
        :per-page="1"
        :paginationEnabled="false"
        :navigationEnabled="true"
        :navigationPrevLabel="arrowSVGlarge"
        :navigationNextLabel="arrowSVGlarge"
        class="max-w-xl mx-auto lg:shadow-lg"
        ref="carousel">

        <slide v-for="(slide, index) in slides" :key="'slide-' + index"
          :index="index"
          :class="{
            'last-slide':(index === slides.length - 1)
          }"
          :style="{ backgroundImage: 'url(' + slide.imgURL + ')' }"
          ref="slide">
          <div class="flex justify-center items-center md:w-2/3 px-8 md:px-16 py-20 md:py-16 bg-black-full-80 md:bg-black-full-90 text-white h-full md:min-h-152 relative">
            <div @click="hideModal()" class="hidden lg:block absolute top-0 right-0 m-8 cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" width="28.876" height="28.876" viewBox="0 0 28.876 28.876">
                <g id="Group_6449" data-name="Group 6449" transform="translate(-2129.379 3071.621)">
                  <line id="Line_1547" data-name="Line 1547" y1="24.634" x2="24.634" transform="translate(2131.5 -3069.5)" fill="none" stroke="#fff" stroke-linecap="round" stroke-width="3"/>
                  <line id="Line_1548" data-name="Line 1548" x2="24.634" y2="24.634" transform="translate(2131.5 -3069.5)" fill="none" stroke="#fff" stroke-linecap="round" stroke-width="3"/>
                </g>
              </svg>
            </div>
            <div>
              <h2 class="text-3xl mb-4 uppercase">{{ slide.title }}</h2>
              <h3 class="text-xl mb-4 leading-normal font-normal">{{ slide.subTitle }}</h3>
              <div v-for="(paragraph, index) in slide.paragraphs" :key="'paragraph-' + index">
                <h4 v-if="paragraph.title" class="text-base font-bold mb-2"
                  v-html="paragraph.title">
                </h4>
                <p class="mt-2 text-sm leading-normal"
                  v-html="paragraph.text">
                </p>
              </div>
              <div v-if="slide.cite" class="mx-auto mt-4 text-sm leading-normal"
                v-html="slide.cite">
              </div>
            </div>
          </div>
        </slide>

      </carousel>
    </div>
  </div>

</template>

<script>
import breakpoints from '../breakpoints';
import { Carousel, Slide } from 'vue-carousel';

export default {
  name: 'capsule-diagram',

  components: {
    Carousel,
    Slide
  },

  props: {
    version: {
      type: String,
      default: 'v2'
    },
    topLayer: {
      type: String,
      required: true
    },
    bottomLayer: {
      type: String,
      required: true
    },
    slides: {
      type: Array,
      required: true
    	},
    options: {
      type: Object
    }
  },

  data () {
    return {
      arrowSVGsmall: `<svg xmlns="http://www.w3.org/2000/svg" width="81" height="81" viewBox="0 0 81 81">
          <g id="Group_6757" data-name="Group 6757" transform="translate(-593 -3934)">
            <rect id="Rectangle_5298" data-name="Rectangle 5298" width="81" height="81" transform="translate(593 3934)" fill="#fff"/>
            <g id="Group_6545" data-name="Group 6545" transform="translate(623.5 3957.5)">
              <line id="Line_1547" data-name="Line 1547" y1="34" x2="0" fill="none" stroke="#1d1d1d" stroke-linecap="round" stroke-width="3" y2="17" x1="17"></line>
              <line id="Line_1548" data-name="Line 1548" y1="17" x2="17" fill="none" stroke="#1d1d1d" stroke-linecap="round" stroke-width="3"/>
            </g>
          </g>
        </svg>`,
      arrowSVGlarge: `<svg xmlns="http://www.w3.org/2000/svg" width="81" height="81" viewBox="0 0 81 81">
          <g id="Group_6757" data-name="Group 6757" transform="translate(-593 -3934)">
            <rect id="Rectangle_5298" data-name="Rectangle 5298" width="81" height="81" transform="translate(593 3934)" fill="#fff"/>
            <g id="Group_6545" data-name="Group 6545" transform="translate(623.5 3957.5)">
              <line id="Line_1547" data-name="Line 1547" y1="34" x2="0" fill="none" stroke="#1d1d1d" stroke-linecap="round" stroke-width="3" y2="17" x1="17"></line>
              <line id="Line_1548" data-name="Line 1548" y1="17" x2="17" fill="none" stroke="#1d1d1d" stroke-linecap="round" stroke-width="3"/>
            </g>
          </g>
        </svg>`,
      modalVisible: (window.innerWidth < breakpoints.lg)
    };
  },

  methods: {
    previous () {
      this.$refs.carousel.handleNavigation('backward');
    },
    next () {
      this.$refs.carousel.handleNavigation();
    },
    goToPage (pageNumber) {
      this.showModal();
      var vm = this;
      setTimeout(function () { vm.$refs.carousel.goToPage(pageNumber); }, 500);
    },
    showModal () {
      this.modalVisible = true;
    },
    hideModal () {
      this.modalVisible = false;
    },
    windowResized (e) {
      if (window.innerWidth < breakpoints.lg) {
        this.modalVisible = true;
      }
    }
  },

  created () {
    window.addEventListener('resize', this.windowResized);
  },
  mounted () {
    this.$nextTick(() => {
      this.$refs.slide[0].$el.classList.add('VueCarousel-slide-active');
    });
  },
  destroyed () {
    window.removeEventListener('resize', this.windowResized);
  }

};
</script>

<style lang="sass" scoped>
  .point
    &.a, &.b, &.c, &.d, &.e, &.f, &.g, &.h, &.i, &.j, &.k, &.l
      .circle
        @apply absolute flex items-center justify-center pointer-events-none

        &.corner.left-0.top-0
          width: 102.99px
          height: 103.99px

        &.corner.right-0.top-0
          width: 103.27px
          height: 103.27px

        &.corner.left-0.bottom-0
          width: 103.27px
          height: 103.27px

        &.corner.right-0.bottom-0
          width: 111.28px
          height: 111.28px

        &.middle.top-0
          width: 112.6px
          height: 112.6px

        &.middle.bottom-0
          width: 113.91px
          height: 113.91px

        &.top-0
          top: 2px

        &.bottom-0
          bottom: 2px

      .text
        @apply font-bold text-center text-xl uppercase

      &:hover
        ellipse, g g path
          @apply fill-black #{!important}
          @apply cursor-pointer

        .text
          @apply text-white

  .v1
    .point
      @apply absolute

      &.a
        top: 48%

      &.b
        top: 46%
        right: 0

      &.c
        top: 10%
        right: 0

      &.d
        left: calc(48% - 60px)

      &.e
        right: 39%
        bottom: 0

      &.f
        top: 9%

      &.g
        left: 22%

      &.h
        right: 25%
        bottom: 0

      &.i
        right: 40%

      &.j
        left: 21%
        bottom: 0

      &.k
        left: 35%
        bottom: 0

      &.l
        right: 27%

  .v2
    .point
      @apply absolute

      &.a
        top: 48%

      &.b
        top: 46%
        right: 0

      &.c
        top: 10%
        right: 0

      &.d
        left: calc(48% - 60px)

      &.e
        right: 39%
        bottom: 0

      &.f
        top: 9%

      &.g
        left: 22%

      &.h
        right: 25%
        bottom: 0

      &.i
        right: 40%

      &.j
        left: 21%
        bottom: 0

      &.k
        left: 35%
        bottom: 0

      &.l
        right: 27%

  .VueCarousel-slide
    @apply flex justify-end items-center bg-white bg-cover bg-left

    @media (min-width: 768px)
      @apply bg-contain

  ::v-deep .VueCarousel-inner
    max-width: 100vw

  ::v-deep .VueCarousel-navigation
    position: absolute
    top: 26px
    width: 100%

    @media (min-width: 768px)
      top: calc(50% - 20px)

    .VueCarousel-navigation-prev
      left: initial
      right: 10px
      padding: 0 !important

      @media (min-width: 768px)
        left: calc(25px + -25px)
        transform: translateY(-50%) translateX(-50%)

    .VueCarousel-navigation-next
      right: 50px
      padding: 0 !important

      @media (min-width: 768px)
        right: calc(25px + 0rem)

      svg
        transform: rotate(180deg)

    .VueCarousel-navigation-prev, .VueCarousel-navigation-next
      svg
        height: 50px
        width: 50px

        @media (min-width: 768px)
          @apply shadow-lg

        path
          stroke-width: 8px

          @media (min-width: 768px)
            stroke-width: 4px

  ::v-deep .VueCarousel-navigation-button:focus
    outline: none
</style>
