<template>
  <div
    class="mainContent lg:pt-49">
    <a v-if="showOverlay" class="mobileExit" @click.stop="reset"></a>
    <div
      class="bg-white max-w-full relative w-screen h-auto z-40 lg:pt-0"
      :class="classObject"
      ref="root"
    >
      <div
        class="absolute inset-x-0 inset-y-0"
        style="z-index: 999999999999"
        v-if="showOverlay"
        @click.stop="reset"
      >
      </div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import gsap from 'gsap';

export default {
  props: {
    campaignRunning: Boolean
  },

  /**
     * Create the intial data.
     */
  data () {
    return {
      transitioning: false,
      showOverlay: false
    };
  },

  /**
     * Create event listeners whrn the content container is mounted.
     */
  mounted () {
    EventBus.$on('reset-main-content-position', params =>
      this.animateTransition({
        ...params,
        newPosition: {
          x: 0,
          xPercent: 0,
          y: 0,
          yPercent: 0
        },
        onComplete: () => EventBus.$emit('main-content-position-was-reset'),
        showOverlay: false
      })
    );

    EventBus.$on('animate-main-content-position', params =>
      this.animateTransition({ ...params, showOverlay: true })
    );
  },

  computed: {
    realScreenHeight () {
      return window.innerHeight;
    },
    classObject: function () {
      return {
        'h-screen overflow-hidden shadow-sm': this.showOverlay,
        'pt-34': this.campaignRunning,
        'pt-28': !this.campaignRunning
      }
    }
  },

  methods: {
    /**
       * Reset the content container to its original position.
       */
    reset () {
      EventBus.$emit('reset-main-content-position');
    },

    /**
       * Animate the x and y positions of the content container.
       */
    animateTransition ({
      newPosition,
      onComplete = () => null,
      showOverlay,
      time = 0.3
    }) {
      if (this.showOverlay) {
        document.querySelector('.mainContent div.bg-white').classList.add('z-40');
      }
      if (this.transitioning) return;

      this.transitioning = true;
      this.showOverlay = showOverlay;

      document.body.classList.toggle('body--no-scroll', this.showOverlay);
      document.getElementsByTagName('html')[0].classList.toggle('overflow-hidden', this.showOverlay);

      gsap.set(this.$refs.root, this.showOverlay ? {
        position: 'fixed',
        top: 0,
        left: 0,
        height: window.innerHeight
      } : {
        position: 'relative',
        height: 'auto'
      });

      gsap.to(this.$refs.root, {
        duration: time,
        ...newPosition,
        onComplete: () => {
          this.transitioning = false;
          if (!this.showOverlay) {
            gsap.set(this.$refs.root, { clearProps: 'all' });
          } else {
            document.querySelector('.mainContent div.bg-white').classList.remove('z-40');
          }
          onComplete();
        }
      });
    }
  }
};
</script>
