<template>
    <transition
        :css="false"
        @enter="enter"
        @leave="leave"
    >
        <slot />
    </transition>
</template>

<script>
import gsap from 'gsap';

export default {
  methods: {
    enter (el, onComplete) {
      gsap.set(el, { overflow: 'hidden' });
      gsap.from(el, {
        duration: 0.5,
        height: 0,
        onComplete () {
          gsap.set(el, { height: 'auto' });
          onComplete();
        }
      });
    },

    leave (el, onComplete) {
      gsap.set(el, { overflow: 'hidden' });
      gsap.to(el, { duration: 0.5, height: 0, onComplete });
    }
  }
};
</script>
