<template>
  <transition @enter="show" @leave="hide" :css="false">
    <div v-show="visible" class="absolute bg-grey-lighter flex flex-col justify-center search-form-container shadow-inner text-center w-full" style="height:80px; margin-top:-80px;z-index:-1;">
      <form action="/search" class="search-form">
        <input placeholder="Enter search terms" ref="searchInput" class="text-2xl w-1/4 outline-none p-2 bg-grey-lighter" type="text" name="q" :value="searchTerms" autocomplete="off" />
        <button type="submit" class="align-middle h-6">
          <svg class="h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
            <circle class="search-svg-1" cx="12.96" cy="12.62" r="9.46" />
            <line class="search-svg-2" x1="21.5" y1="22.06" x2="27.45" y2="28" />
          </svg>
        </button>
      </form>
    </div>
  </transition>
</template>

<script>
import { gsap } from 'gsap';

export default {
  props: {
    visible: {
      type: Boolean,
      default: false
    },
  },
  data () {
    return {
      searchTerms: Vivo.searchTerms // Vivo.searchTerms is set in theme.liquid
    };
  },
  methods: {
    show (el, done) {
      gsap.to(el, {
        marginTop: '0',
        duration: 0.2
      });
    },

    hide (el, done) {
      gsap.to(el, {
        duration: 0.2,
        marginTop: '-80px',
        onComplete: done
      });
    },
  },
  watch: {
    visible: function () {
      if (this.visible) {
        this.$nextTick(() => {
          this.$refs.searchInput.focus();
        });
        
      }
    }
  }
}
</script>