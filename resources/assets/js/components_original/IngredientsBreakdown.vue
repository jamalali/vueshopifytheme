<template>
  <div>
    <mobile-ingredients-breakdown
      v-if="isMobile()"
      :flavours="flavours"
      :ingredients="ingredients"
    >
      <slot></slot>
    </mobile-ingredients-breakdown>

    <desktop-ingredients-breakdown
      v-else
      :default-image="defaultImage"
      :flavours="flavours"
      :ingredients="ingredients"
    >
      <slot></slot>
    </desktop-ingredients-breakdown>
  </div>
</template>

<script>
import MobileIngredientsBreakdown from './MobileIngredientsBreakdown';
import DesktopIngredientsBreakdown from './DesktopIngredientsBreakdown';
import breakpoints from '../breakpoints';

export default {
  props: ['defaultImage', 'flavours', 'ingredients'],

  components: { MobileIngredientsBreakdown, DesktopIngredientsBreakdown },

  data () {
    return {
      showFlavoursDropdown: false,
      currentFlavour: 0,
      selectedIngredient: null
    };
  },

  methods: {
    isMobile () {
      return window.innerWidth < breakpoints.md;
    }
  }
};
</script>
