<template>
  <mobile-product-comparison
    :superior="superior"
    v-if="! isBreakpoint('lg')"
  >
    <slot></slot>
  </mobile-product-comparison>

  <div class="items-center mx-12 xl:flex xl:mx-24" v-else>
    <div class="flex-shrink-0 mb-16 mx-auto text-center xl:mb-0 xl:ml-0 xl:mr-24 xl:text-left xl:w-68">
      <slot></slot>
    </div>

    <div class="flex-grow">
      <comparison-table
        :data="superior.data"
        :featured-col="superior.featuredCol"
        :headings="superior.headings"
      >
      </comparison-table>
    </div>
  </div>
</template>

<script>
import breakpoints from '../breakpoints';
import MobileProductComparison from './MobileProductComparison';

export default {
  props: ['superior'],

  components: { MobileProductComparison },

  mounted () {
    window.addEventListener('resize', () => {
      this.viewportWidth = window.innerWidth;
    });
  },

  data () {
    return { viewportWidth: window.innerWidth };
  },

  methods: {
    isBreakpoint (breakpoint) {
      return this.viewportWidth >= breakpoints[breakpoint];
    },

    selectClick () {
      this.$refs['table-select'].click();
    }
  }
};
</script>
