<template>
  <div
    v-if="!hidden"
    class="w-full relative md:w-1/2 lg:w-1/3"
    itemscope
    itemtype="http://schema.org/Product"
    @mouseover="hovered = true"
    @mouseout="hovered = false"
  >
    <div
      :class="[
        'bg-contain bg-no-repeat bg-right-top mx-3 pt-1/4',
        { 'overflow-hidden': !hovered }
      ]"
      :style="rootStyle"
    >
      <div :class="['mb-16 mx-6 lg:mx-auto lg:w-3/4', { 'shadow-lg-offset': hovered && !showAddToCart }]">
        <div v-if="showAddToCart == true">
          <hero-add-to-cart-modal
            :product="product"
            :subscriptions="subscriptions"
            :related="related"
            :variant-subscriptions="variantSubscriptions"
            @added-to-cart="showAddToCart = false"
            @modal-closed="modalClosed"
            :show-add-to-cart="showAddToCart"
            :variant-metafields="variantMetafields"
          />
        </div>

        <div :class="['pt-4', { 'bg-white': hovered }]">
          <a :href="url">
            <img
              class="block mx-auto w-1/2"
              :src="product.featured_image"
              :alt="product.title"
            >
          </a>
        </div>

        <div
          class="bg-white pb-8 pt-16 text-center -mt-16"
        >
          <collection-product-content
            :has-subscription-discount="hasSubscriptionDiscount"
            :subscriptions="subscriptions"
            :product="product"
            :product-title="productTitle"
            :product-subtitle="productSubtitle"
            :show-more-info="showMoreInfo"
            :hideProductImage="true"
            :show-sub-comparison="showSubComparison"
            v-on:show-add-to-cart="revealAddToCart"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import breakpoints from '../breakpoints';

export default {
  props: {
    product: {
      type: Object,
      required: true
    },

    related: {
      type: Array,
      required: false
    },

    subscriptions: {
      type: Object,
      required: false
    },

    variantSubscriptions: {
      type: Object,
      default: () => {}
    },

    variantMetafields: {
      type: Object,
      default: () => {}
    },

    showMoreInfo: {
      type: Boolean,
      default: false
    },

    showSubComparison: {
      type: Boolean,
      default: false
    }
  },

  data () {
    return {
      hidden: false,
      hovered: false,
      showAddToCart: false,
      filters: {}
    };
  },

  mounted () {
    EventBus.$on('toggle-product-filter', option => {
      this.filters = { ...this.filters, [option]: !this.filters[option] };
      this.hidden = this.isHidden();
    });

    EventBus.$on('collection-add-to-cart-shown', product => {
      if (product.id == this.product.id) return;
      this.showAddToCart = false;
    });
  },

  computed: {
    rootStyle () {
      const backgroundImage = this.product.images.length > 1
        ? `url(${this.product.images[1]})`
        : null;

      return { backgroundImage };
    },

    hasSubscriptionDiscount () {
      return this.subscriptions.discount_percentage ? true : false;
    },

    productTitle () {
      return this.product.title.split(':')[0];
    },

    productSubtitle () {
      return this.product.title.split(':')[1];
    },

    url () {
      return `/products/${this.product.handle}`;
    }
  },

  methods: {
    revealAddToCart (event) {
      this.showAddToCart = true;
    },

    modalClosed () {
      this.showAddToCart = false;
    },

    isHidden () {
      const activeFilters = Object.keys(_.pickBy(this.filters, f => f == true));
      if (activeFilters.length == 0) return false;

      return !_.every(activeFilters, f => _.includes(this.product.tags, f));
    }
  }
};
</script>

<style>

.collection-product-full-description ul {
  list-style-position: inside;
  margin-left: 0;
  padding-left: 0;
  text-align: center;
}

.collection-product-full-description li {
  font-size: 12px;
  font-weight: normal;
  padding: 0.25rem 0;
}

@media (min-width: 992px) {
  .collection-product-full-description li {
    font-size: 15px;
  }
}
</style>
