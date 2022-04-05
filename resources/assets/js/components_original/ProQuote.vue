<template>
  <section class="mx-auto mt-22 md:mt-0 md:flex md:max-w-3xl md:px-20">
    <div class="vivo-hidden md:flex items-center w-4 mr-4" @click="previousQuote">
      <slider-chevron class="w-full" direction="left" />
    </div>

    <div
      class="px-10 md:px-0 md:pr-8 md:w-1/4 lg:w-1/3 lg:pr-16 xl:pr-32"
      @click="previousQuote(!isMobile())"
    >
      <slot></slot>
    </div>

    <div class="h-164 overflow-hidden py-1 relative md:h-100 md:w-3/4 lg:h-128 lg:w-2/3" @click="nextQuote(!isMobile())">
      <transition @enter="showQuote" @leave="hideQuote" :css="false">
        <div class="absolute mt-1 top-0 left-0 w-full" :key="quote">
          <div class="border-t border-grey-lighter flex items-center justify-between mt-8 py-4 text-center md:hidden">
            <div class="mx-6 w-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="4607 13597.352 9.4 15.7"
                @click.prevent="previousQuote"
              >
                <path
                  fill="none"
                  stroke="#1d1d1d"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-miterlimit="10"
                  stroke-width="3px"
                  d="M2,2,8.4,8.4,14.7,2"
                  transform="translate(4616.9 13596.852) rotate(90)"
                />
              </svg>
            </div>

            <div>
              <h3 class="font-bold">{{ currentQuote.name }}</h3>
              <h4 class="font-normal text-sm">{{ currentQuote.title }}</h4>
            </div>

            <div class="mx-6 w-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="4901.65 13597.351 9.4 15.7"
                @click.prevent="nextQuote"
              >
                <path
                  fill="none"
                  stroke="#1d1d1d"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-miterlimit="10"
                  stroke-width="3px"
                  d="M2,2,8.4,8.4,14.7,2"
                  transform="translate(4901.15 13613.551) rotate(-90)"
                />
              </svg>
            </div>
          </div>

          <img class="block mb-8 w-full md:hidden" :src="currentQuote.image" v-if="currentQuote.image">
          <div class="bg-grey mb-8 md:hidden" style="padding-top: 100%" v-else></div>

          <div class="relative">
            <span class="absolute ml-3 text-4xl top-0 left-0 -mt-4 md:-mt-2 lg:text-6xl lg:-mt-4">“</span>
            <blockquote class="font-light leading-normal mb-6 mx-12 text-base text-normal md:mb-4 lg:text-2xl">
              {{ currentQuote.body }}
            </blockquote>
            <span class="absolute mr-3 text-4xl bottom-0 right-0 -mb-6 lg:text-6xl lg:-mb-16">”</span>
          </div>

          <div class="vivo-hidden mx-12 text-2xs md:block md:text-xs lg:text-base">
            <h3 class="font-extrabold">{{ currentQuote.name }}</h3>
            <h4 class="font-medium">{{ currentQuote.title }}</h4>

            <img class="block bg-grey mt-8 w-1/2" :src="currentQuote.image" v-if="currentQuote.image">
            <div class="bg-grey mt-8 w-1/2" style="padding-top: 30%;" v-else></div>
          </div>
        </div>
      </transition>
    </div>

    <div class="vivo-hidden md:flex items-center w-4 ml-4" @click="nextQuote">
      <slider-chevron class="w-full" direction="right" />
    </div>
  </section>
</template>

<script>
import gsap from 'gsap';
import breakpoints from '../breakpoints';
import SliderChevron from './SliderChevron';

export default {
  components: { SliderChevron },

  props: {
    quotes: {
      type: Array,
      required: true
    }
  },

  data () {
    return { quote: 0, transition: null };
  },

  computed: {
    currentQuote () {
      return this.quotes[this.quote];
    }
  },

  methods: {
    isMobile () {
      return window.innerWidth < breakpoints.md;
    },

    nextQuote (changeQuote = true) {
      if (!changeQuote) return;
      this.transition = 'next';
      this.quote = this.quote + 1 != this.quotes.length ? this.quote + 1 : 0;
    },

    previousQuote (changeQuote = true) {
      if (!changeQuote) return;
      this.transition = 'previous';
      this.quote = this.quote != 0 ? this.quote - 1 : this.quotes.length - 1;
    },

    showQuote (el, done) {
      gsap.from(el, 0.3, {
        xPercent: this.transition == 'next' ? 100 : -100,
        onComplete: () => {
          this.transition = null;
          done();
        }
      });
    },

    hideQuote (el, done) {
      gsap.to(el, 0.3, {
        xPercent: this.transition == 'next' ? -100 : 100,
        onComplete: () => {
          this.transition = null;
          done();
        }
      });
    }
  }
};
</script>
