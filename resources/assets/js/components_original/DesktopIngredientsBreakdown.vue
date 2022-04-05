<template>
  <div class="px-8 py-32">
    <div class="flex items-center mb-16">
      <div class="w-1/2 pr-8">
        <slot></slot>
      </div>

      <div class="overflow-hidden w-3/5">
        <img
          class="w-full"
          :src="defaultImage"
          alt="Ingredients breakdown"
          key="defaultImage"
          v-if="selectedIngredient == null"
        >
        <div
          v-else
          class="relative lg:mr-16 lg:pt-16"
          :key="selectedIngredient"
        >
          <img class="absolute vivo-hidden top-0 lg:block" :src="ingredient.background" :alt="ingredient.name">

          <div class="bg-black px-8 pb-8 relative text-white lg:min-w-90 lg:ml-auto lg:top-0 lg:right-0 lg:w-1/2 lg:-mr-16">
            <svg
              class="hidden absolute mt-3 mr-3 top-0 right-0 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="-5826.339 7144.661 17.678 17.678"
              @click="selectedIngredient = null"
            >
              <g
                fill="none"
                stroke="#fff"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-miterlimit="10"
                stroke-width="4px"
                transform="translate(-7561 6880)"
              >
                <line y2="17" transform="translate(1749.51 267.489) rotate(45)"/>
                <line x1="17" transform="translate(1737.49 267.489) rotate(45)"/>
              </g>
            </svg>

            <img class="block mx-auto w-48" :src="ingredient.image" :alt="ingredient.name">

            <h2 class="tracking-wide uppercase">{{ ingredient.name }}</h2>
            <p class="border-b-2 border-white font-medium leading-normal pb-8 text-base">
              {{ ingredient.description }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <desktop-ingredients-breakdown-carousel
      :ingredients="filteredIngredients(selectedFlavour)"
      v-on:ingredient-selected="selectIngredient"
    />
  </div>
</template>

<script>
import DesktopIngredientsBreakdownCarousel from './DesktopIngredientsBreakdownCarousel';
import breakpoints from '../breakpoints';

export default {
  props: ['defaultImage', 'flavours', 'ingredients'],

  components: { DesktopIngredientsBreakdownCarousel },

  data () {
    return {
      selectedFlavour: 0,
      selectedIngredient: 0, // was "null" previous to 14/04/20
      showFlavoursDropdown: false,
      slidesToShow: 8,
      responsive: [
        {
          breakpoint: breakpoints.lg - 1,
          slidesToShow: 6
        }
      ]
    };
  },

  computed: {
    ingredient () {
      return this.ingredients[this.selectedIngredient];
    }
  },

  methods: {
    filteredIngredients (index) {
      // Flavours have been disabled for now so we are just returning all of
      // the ingredients.
      return this.ingredients;
    },

    selectIngredient (index) {
      this.selectedIngredient = index;
    },

    selectFlavour (index) {
      this.selectedFlavour = index;
      this.showFlavoursDropdown = false;
      this.selectedIngredient = null;
    }
  }
};
</script>
