<template>
  <div>
    <div class="cursor-pointer focus:no-outline flex items-center justify-between" role="button" tabindex="0" @click="isActive = !isActive">
      <h3 class="w-4/5 text-lg py-8 px-4" v-html="headingParsed"></h3>
      <svg class="w-4 h-4 mx-4" xmlns="http://www.w3.org/2000/svg" viewBox="2506 17861 21 21">
        <g stroke-width="4px" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" transform="translate(859 4875)">
          <transition @enter="animateShowPlus" @leave="animateHidePlus" :css="false">
            <line y2="17" transform="translate(1657.5 12988)" v-if="!isActive"/>
          </transition>
          <line x1="17" transform="translate(1649 12996.5)"/>
        </g>
      </svg>
    </div>
    <transition @enter="animateOpen" @leave="animateClose" :css="false">
      <div class="font-light overflow-hidden" v-show="isActive">
        <div class="pb-4 px-4 text-base leading-normal">
          <img v-if="images && images.mobile.src"
          class="block shadow-md md:hidden max-w-56 mx-auto"
          :src="images.mobile.src"
          :alt="images.mobile.alt">
          <img v-if="images && images.desktop.src"
          class="vivo-hidden shadow-md md:block"
          :src="images.desktop.src"
          :alt="images.desktop.alt">
          <slot></slot>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import gsap from 'gsap';

export default {
  name: 'accordion',

  props: {
    heading: {
      type: String, required: true
    },
    display: {
      type: String, default: 'hidden'
    },
    initialIsActive: {
      type: Boolean, default: false
    },
    images: {
      type: Object
    }
  },

  data () {
    return {
      isActive: this.initialIsActive
    };
  },

  computed: {
    headingParsed () {
      return this.heading.replace(/\\"/g, '"').replace(/\\'/g, "'");
    }
  },

  methods: {
    animateOpen (el, done) {
      el.style.removeProperty('height');
      gsap.from(el, {
        duration: 0.3,
        height: el.offsetHeight,
        onComplete: done
      });
    },

    animateClose (el, done) {
      gsap.to(el, {
        duration: 0.3,
        height: 0,
        onComplete: done
      });
    },

    animateShowPlus (el, done) {
      gsap.from(el, {
        duration: 0.3,
        rotation: 90,
        transformOrigin: 'center center',
        onComplete: done
      });
    },

    animateHidePlus (el, done) {
      gsap.fromTo(el, {
        duration: 0.3,
        transformOrigin: 'center center'
      }, {
        rotation: -90,
        onComplete: done
      });
    }
  }
};
</script>
