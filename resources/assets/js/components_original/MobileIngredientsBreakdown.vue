<template>
  <div>
    <div class="mx-8 pb-12 pt-16">
      <slot></slot>
    </div>

    <div>
      <!-- <div class="border-b-2 border-grey-lighter border-t-2 flex items-center justify-between px-8 py-8" @click="showFlavoursDropdown = !showFlavoursDropdown">
        <div class="font-bold text-base uppercase">
          {{ flavours[currentFlavour].name }}
        </div>

        <div class="w-4">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="-5856.5 10847.5 15.7 9.4">
            <path
              fill="none"
              stroke="#1d1d1d"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-miterlimit="10"0
              stroke-width="3px"
              d="M2,2,8.4,8.4,14.7,2"
              transform="translate(-5857 10847)"
            />
          </svg>
        </div>
      </div> -->

      <!-- <transition @enter="flavoursDropdownEnter" @leave="flavoursDropdownLeave" :css="false">
        <ul class="bg-grey-lighter list-none p-0 overflow-hidden" v-if="showFlavoursDropdown">
          <li
            v-if="index != currentFlavour"
            v-for="(flavour, index) in flavours"
            class="px-6 py-4"
            @click="currentFlavour = index; showFlavoursDropdown = false"
          >
            {{ flavour.name }}
          </li>
        </ul>
      </transition> -->
    </div>

    <ingredients-carousel
      :ingredients="filteredIngredients(index)"
    />
  </div>
</template>

<script>
import gsap from 'gsap';
import IngredientsCarousel from './IngredientsCarousel';

export default {
  props: ['flavours', 'ingredients'],

  components: { IngredientsCarousel },

  data () {
    return {
      index: 0,
      showFlavoursDropdown: false,
      currentFlavour: 0,
      selectedIngredient: null
    };
  },

  methods: {
    filteredIngredients (index) {
      return this.ingredients;
    },

    flavoursDropdownEnter (el, done) {
      gsap.from(el, {
        duration: 0.3,
        height: 0,
        onComplete: done
      });
    },

    flavoursDropdownLeave (el, done) {
      gsap.to(el, {
        duration: 0.3,
        height: 0,
        onComplete: done
      });
    }
  }
};
</script>
