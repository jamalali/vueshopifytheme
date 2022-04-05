<template>
  <div class="bg-green h-full mt-6 mx-6 overflow-hidden pt-10 relative shadow-lg-offset text-center text-white md:w-full md:-ml-6">
    <home-hero-close-button class="absolute top-0 right-0 pseudo-btn w-8 mt-6 mr-6" @close="$emit('close')">
    </home-hero-close-button>

    <div class="flex flex-col h-104 justify-end md:h-full">
      <div class="relative">
        <transition @enter="titleEnter" @leave="titleLeave" :css="false">
          <div class="w-full" v-if="view != 'goal'">
            <h2 class="font-extrabold mb-8 text-3xl md:text-2xl lg:text-4xl">
              FIND YOUR<br class="vivo-hidden xl:block"> PRODUCT
            </h2>

            <div class="mb-8 text-sm font-bold tracking-wider text-xs md:text-base">
              ARE YOU...
            </div>

            <div class="flex font-bold tracking-wide mb-6 mx-4">
              <div :class="['border-2 border-white cursor-pointer flex-1 mx-4 py-4 transition-300 transition-all md:py-2 lg:py-4 hover:bg-white hover:text-black', { 'bg-white text-black': sex == 'm' }]" @click="sex = 'm'">
                MALE
              </div>

              <div :class="['border-2 border-white cursor-pointer flex-1 mx-4 py-4 transition-300 transition-all md:py-2 lg:py-4 hover:bg-white hover:text-black', { 'bg-white text-black': sex == 'f' }]" @click="sex = 'f'">
                FEMALE
              </div>
            </div>
          </div>
        </transition>
      </div>

      <div>
        <div
          :class="[`border-t-2 border-${view == 'goal' ? 'transparent' : 'white'} flex font-bold items-center justify-between px-8 py-6 text-xl text-left tracking-wide md:py-4 md:text-base lg:py-6 lg:text-xl`]"
          @click="toggleGoalView"
        >

          {{ goalsDescription() }}

          <svg
            :class="[
              'stroke-current transition-300 transition-cubic-bezier transition-transform w-4',
              { 'rotate-180': view == 'goal' }
            ]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="-16952 14225 16.699 10.4"
          >
            <g
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-miterlimit="10"
              stroke-width="4px"
              transform="translate(-18503 13462)"
            >
              <path d="M2,2,8.4,8.4,14.7,2" transform="translate(1551 763)"/>
            </g>
          </svg>
        </div>

        <transition @enter="goalsEnter" @leave="goalsLeave" :css="false">
          <ul class="border-t-2 border-color-white-25 text-xl tracking-wide font-extrabold list-none p-0 overflow-hidden text-left md:text-base lg:text-xl" v-if="view == 'goal'">
            <li :class="['cursor-pointer p-8 md:py-4 lg:py-8 hover:bg-white-17 ', { 'bg-white-17': goal == 0 }]" @click="selectGoal(0)">
              Fitness & Performance
              <div class="font-medium text-xs tracking-normal">Train harder, Recover faster, Build muscle</div>
            </li>

            <li :class="['cursor-pointer p-8 md:py-4 lg:py-8 hover:bg-white-17', { 'bg-white-17': goal == 1 }]" @click="selectGoal(1)">
              Health & Lifestyle
              <div class="font-medium text-xs tracking-normal">Boost energy, Enhance focus, Optimise health</div>
            </li>

            <!-- Meal replacement hasn't launched yet. -->
            <li v-if="false" :class="['cursor-pointer p-8 hover:bg-white-17', { 'bg-white-17': goal == 2 }]" @click="selectGoal(2)">
              Meal Replacement
              <div class="font-medium text-xs tracking-normal">Lorem ipsum, Lorem ipsum, Lorem ipsum</div>
            </li>
          </ul>
        </transition>

        <a class="bg-white flex font-bold tracking-wide items-center justify-between no-underline px-8 py-6 text-2xl text-black text-left md:py-4 md:text-lg lg:py-6 lg:text-2xl" :href="collection" v-if="collection">
          START NOW

          <svg class="stroke-current w-4" xmlns="http://www.w3.org/2000/svg" viewBox="-16956 15510 21 21">
            <g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="4px" transform="translate(-18627 14673)">
              <line y2="17" transform="translate(1681.5 839)"/>
              <line x1="17" transform="translate(1673 847.5)"/>
            </g>
          </svg>
        </a>

        <div class="bg-white flex font-bold tracking-wide items-center justify-between no-underline px-8 py-6 text-2xl text-grey-light text-left md:py-4 md:text-lg lg:py-6 lg:text-2xl" v-else>
          START NOW

          <svg class="stroke-current w-4" xmlns="http://www.w3.org/2000/svg" viewBox="-16956 15510 21 21">
            <g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="4px" transform="translate(-18627 14673)">
              <line y2="17" transform="translate(1681.5 839)"/>
              <line x1="17" transform="translate(1673 847.5)"/>
            </g>
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import gsap from 'gsap';
import HomeHeroCloseButton from './HomeHeroCloseButton';

export default {
  components: { HomeHeroCloseButton },

  data () {
    return {
      sex: null,
      goal: null,
      view: null
    };
  },

  computed: {
    collection () {
      if (this.sex == null || this.goal == null) return;

      const collections = {
        m: ['/collections/fitness-performance-male', '/collections/health-lifestyle-male', '/'],
        f: ['/collections/fitness-performance-female', '/collections/health-lifestyle-female', '/']
      };

      return collections[this.sex][this.goal];
    }
  },

  methods: {
    toggleGoalView () {
      this.view = this.view != 'goal' ? 'goal' : null;
    },

    selectGoal (goal) {
      this.goal = goal;
      this.view = null;
    },

    titleEnter (el, onComplete) {
      gsap.set(el, { position: 'absolute', bottom: 0 });
      gsap.from(el, {
        duration: 0.3,
        onComplete: () => {
          gsap.set(el, { position: 'static' });
          onComplete();
        },
        opacity: 0
      });
    },

    titleLeave (el, onComplete) {
      gsap.set(el, { position: 'absolute', bottom: 0 });
      gsap.to(el, {
        duration: 0.3,
        onComplete,
        opacity: 0
      });
    },

    goalsDescription () {
      switch (this.goal) {
        case 0:
          return 'Fitness & Performance';
        case 1:
          return 'Health & Lifestyle';
        default:
          return 'What do you want to improve?';
      }
    },

    goalsEnter (el, onComplete) {
      gsap.from(el, {
        duration: 0.3,
        onComplete,
        height: 0,
        ease: Power4.easeOut
      });
    },

    goalsLeave (el, onComplete) {
      gsap.to(el, {
        duration: 0.3,
        onComplete,
        height: 0,
        ease: Power4.easeOut
      });
    }
  }
};
</script>
