<template>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="2503 -24226.5 39 39">
    <circle
      v-if="checked || ! hideUncheckedCircle"
      fill="#fff"
      cx="19.5"
      cy="19.5"
      r="19.5"
      transform="translate(2503 -24226.5)"
    />

    <path
      v-if="checked"
      stroke="#b5d310"
      fill="none"
      stroke-width="4px"
      d="M-5529.326,1097.7l4.7,5.23,13.433-11.5"
      transform="translate(7978.072 -25591.807) rotate(-3)"
    />

    <path
      v-if="! checked && ! hideUncheckedCircle"
      stroke="#343434"
      fill="none"
      stroke-width="4px"
      d="M10.413.18,10.646,10.7.181,10.472"
      transform="translate(2511.244 -24207.1) rotate(-45)"
    />
  </svg>
</template>

<script>
import gsap from 'gsap';

export default {
  props: ['checked', 'hideUncheckedCircle'],

  methods: {
    enter (el, onComplete) {
      gsap.fromTo(
        el,
        {
          duration: 0.5,
          transformOrigin: '50% 50%',
          scale: 0
        },
        {
          scale: 1,
          ease: Elastic.easeOut.config(1, 0.3),
          onComplete
        }
      );
    },

    leave (el, onComplete) {
      gsap.fromTo(
        el,
        {
          duration: 0.5,
          transformOrigin: '50% 50%',
          scale: 1
        },
        {
          scale: 0,
          ease: Elastic.easeOut.config(1, 0.3),
          onComplete
        }
      );
    }
  }
};
</script>
