<template>
  <div class="vivo-hidden border-b-2 border-grey-lighter border-t-2 lg:flex flex-wrap justify-between mb-16 mx-8">
    <product-filter
      v-for="(filter, index) in filters"
      :key="index"
      :title="filter.title"
      :options="filter.options"
    >
      {{ filter.title }}
    </product-filter>
  </div>
</template>

<script>
import ProductFilter from './ProductFilter';

export default {
  props: {
    rawFilters: {
      type: Array,
      required: true
    }
  },

  data () {
    return {
      filters: this.rawFilters
        .map(f => ({ ...f, options: f.options.split(',').map(o => o.trim()) }))
        .filter(f => f.options.length > 0)
    };
  },

  components: { ProductFilter }
};
</script>
