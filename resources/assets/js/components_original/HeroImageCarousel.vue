<template>
  <div class="bg-off-white bg-center flex-auto" style="flex-basis: 65%;">
      <div id="hero-carousel" class="relative md:w-9/10 xl:w-auto">
          <transition-group
            name="fade"
            tag="div"
          >
            <div v-for="i in [currentIndex]" :key="i">
              <img
                class="hero-carousel-img"
                style="min-height: 38rem;"
                :src="currentImg"
                v-on:mouseover="stopSlide"
                v-on:mouseout="startSlide"
              />
            </div>
          </transition-group>
          <div class="hero-carousel-caption">
              <slot name="caption"></slot>
          </div>
          <a class="prev" @click.prevent="prev">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 74 68"><g transform="translate(-10777 -6579)"><rect width="74" height="68" transform="translate(10851 6647) rotate(180)" fill="#000" opacity="0.7"/><path d="M0,0,15.258,15.258,30.278,0" transform="translate(10821.311 6597.955) rotate(90)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2.5"/></g></svg>
          </a>
          <a class="next" @click.prevent="next">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 74 68"><g transform="translate(-78 -942)"><rect width="74" height="68" transform="translate(78 942)" fill="#000" opacity="0.7"/><path d="M0,0,15.258,15.258,30.278,0" transform="translate(108.742 992.466) rotate(-90)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2.5"/></g></svg>
          </a>
      </div>
  </div>
</template>

<style scoped>
.fade-enter-active {
  transition: opacity 5s ease-out;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}

.fade-leave-active {
  transition: opacity 5s ease-in;
  display:none;
}

.hero-carousel-caption {
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 5%;
  left: 4%;
}

.prev, .next {
  cursor: pointer;
  position: absolute;
  bottom: -1.1rem;
  width: auto;
  padding: 16px;
  color: white;
  font-weight: bold;
  font-size: 18px;
  transition: 0.7s ease;
  text-decoration: none;
  user-select: none;
}

/* Set the SVG w/h here rather than on the attributes. */
.prev svg, .next svg {
  width: 4rem;
}

.next {
  right: -1rem;
}

.prev {
  right: 3.2rem;
}

.prev:hover, .next:hover {
  /*background-color: rgba(0,0,0,0.9);*/
  transform: scale(1.1);
}
</style>

<script>
export default {
  name: 'hero-image-carousel',

  props: {
    images: Array
  },

  data () {
    return {
      timer: null,
      timeout: null,
      currentIndex: 0
    };
  },

  mounted () {
    this.startSlide();
  },

  methods: {
    startSlide () {
      if (this.timer === null) {
        this.timer = setInterval(this.nextSlide, 8000);
      }
    },

    /* If they pause the auto control but then they just stop clicking through,
     * eventually we will start rotation again.
     * If we have already started the countdown, start again incase they have re-interacted.
     */
    restartSlide () {
      if (this.timeout !== null) {
        clearTimeout(this.timeout);
        this.timeout = null;
      }
      this.timeout = setTimeout(() => {
        this.startSlide();
        this.timeout = null;
      }, 15000);
    },

    stopSlide () {
      if (this.timer !== null) {
        clearInterval(this.timer);
        this.timer = null;
      }
    },

    /* Retain their control by stopping the interval if they start using the buttons. */
    manualControl () {
      if (this.timer !== null) {
        this.stopSlide();
        this.restartSlide();
      }
    },

    next () {
      if (this.timer !== null) {
        this.manualControl();
      }
      this.nextSlide();
    },

    prev () {
      if (this.timer !== null) {
        this.manualControl();
      }
      this.currentIndex -= 1;
    },

    nextSlide () {
      this.currentIndex += 1;
    }
  },

  computed: {
    currentImg () {
      return this.images[Math.abs(this.currentIndex) % this.images.length];
    }
  }
};
</script>
