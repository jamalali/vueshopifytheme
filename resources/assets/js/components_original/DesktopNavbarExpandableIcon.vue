<template>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-13650.854 6861.146 10.707 10.707">
    <g transform="translate(-13814 6748)">
      <transition @enter="animateToPlus" @leave="animateToMinus" :css="false">
        <g stroke="#000" transform="translate(167.555 113.146)" v-if="!open">
          <rect stroke="none" width="1.889" height="10.707" rx="0.945"/>
          <rect fill="none" x="0.5" y="0.5" width="0.889" height="9.707" rx="0.445"/>
        </g>
      </transition>
      <g stroke="#000" transform="translate(173.854 117.555) rotate(90)">
        <rect stroke="none" width="1.889" height="10.707" rx="0.945"/>
        <rect fill="none" x="0.5" y="0.5" width="0.889" height="9.707" rx="0.445"/>
      </g>
    </g>
  </svg>
</template>

<script>
import gsap from 'gsap';

export default {
  props: {
    open: {
      type: Boolean,
      default: false
    }
  },

  methods: {
    animateToPlus (el, done) {
      gsap.set(el, { transformOrigin: 'center center' });
      gsap.from(el, { duration: 0.3, rotation: -90, onComplete: done });
    },

    animateToMinus (el, done) {
      gsap.set(el, { transformOrigin: 'center center' });
      gsap.to(el, { duration: 0.3, rotation: 90, onComplete: done });
    }
  }
};
</script>
