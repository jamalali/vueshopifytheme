<template>
  <div class="overflow-hidden -mx-5">
    <div>
      <div class="mt-8 mx-16">
        <slot></slot>
      </div>

      <div class="border-grey-lighter border-t mt-8">
        <div class="flex items-center justify-between mx-16 my-8">
          <div class="w-3 mr-8" @click="back">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="-6141.35 12433.352 9.4 15.7">
              <path fill="none" stroke="#1d1d1d" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3px" d="M2,2,8.4,8.4,14.7,2" transform="translate(-6131.45 12432.852) rotate(90)"/>
            </svg>
          </div>

          <div class="flex-grow overflow-hidden relative text-center">
            <transition @enter="enter" @leave="leave" :css="false">
              <div class="font-bold w-full" v-for="(title, index) in titles" :key="index" v-if="index == currentColumn">
                {{ title }}
              </div>
            </transition>
          </div>

          <div class="w-3 ml-8" @click="next">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="-5852.35 12433.351 9.4 15.7">
              <path fill="none" stroke="#1d1d1d" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3px" d="M2,2,8.4,8.4,14.7,2" transform="translate(-5852.85 12449.551) rotate(-90)"/>
            </svg>
          </div>
        </div>
      </div>

      <div class="relative">
        <transition @enter="enter" @leave="leave" :css="false">
          <div class="w-full" v-for="(title, index) in titles" :key="index" v-if="index == currentColumn">
            <div
              :class="['flex items-center justify-between px-16 py-3', { 'border-b': index + 1 == titles.length }, { 'bg-green text-white': headingIndex == 0 }]"
              v-for="(heading, headingIndex) in superior.headings"
              :key="headingIndex"
            >
              <div>{{ heading }}</div>
              <div>
                <svg class="w-8" xmlns="http://www.w3.org/2000/svg" viewBox="-4351.284 12696.018 30.082 30.082" v-if="superior.data[index].cols[headingIndex] === true">
                  <g transform="translate(-4351.284 12696.018)">
                    <ellipse fill="#fff" cx="15.041" cy="15.041" rx="15.041" ry="15.041" transform="translate(0 0)" v-if="headingIndex == 0"/>
                    <path fill="none" stroke-width="4px" stroke="#b5d310" d="M0,4.839,3.628,8.873,13.99,0" transform="translate(8.828 10.807) rotate(-3)" />
                  </g>
                </svg>

                <svg class="w-8" xmlns="http://www.w3.org/2000/svg" viewBox="-4754.284 12505.018 30.082 30.082" v-else>
                  <g transform="translate(-5277 5457)">
                    <g transform="translate(532.389 7057.898)">
                      <line fill="none" stroke="#d90000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="4px" y2="15.393" transform="translate(10.885 0) rotate(45)"/>
                      <line fill="none" stroke="#d90000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="4px" x1="15.393" transform="translate(0 0) rotate(45)"/>
                    </g>
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import gsap from 'gsap';

export default {
  props: ['superior'],

  data () {
    return {
      currentColumn: 0,
      transition: null
    };
  },

  computed: {
    titles () {
      return _.map(this.superior.data, item => item.title);
    }
  },

  methods: {
    next () {
      if (this.transition != null) return;

      this.transition = 'next';
      this.currentColumn = (this.currentColumn != this.titles.length - 1)
        ? this.currentColumn + 1 : 0;
    },

    back () {
      if (this.transition != null) return;

      this.transition = 'back';
      this.currentColumn = (this.currentColumn != 0)
        ? this.currentColumn - 1 : this.titles.length - 1;
    },

    enter (el, done) {
      gsap.set(el, { position: 'absolute', top: 0, left: 0 });
      gsap.from(el, {
        duration: 0.3,
        xPercent: this.transition == 'next' ? -100 : 100,
        ease: Power3.easeOut,
        onComplete: () => {
          gsap.set(el, { position: 'static' });
          this.transition = null;
          done();
        }
      });
    },

    leave (el, done) {
      gsap.to(el, {
        duration: 0.3,
        xPercent: this.transition == 'next' ? 100 : -100,
        ease: Power3.easeOut,
        onComplete: () => {
          this.transition = null;
          done();
        }
      });
    },

    accordionEnter (el, onComplete) {
      gsap.from(el, {
        duration: 0.3,
        onComplete,
        height: 0
      });
    },

    accordionLeave (el, onComplete) {
      gsap.to(el, {
        duration: 0.3,
        onComplete,
        height: 0
      });
    }
  }
};
</script>
