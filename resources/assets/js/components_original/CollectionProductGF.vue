<template>
  <div
    v-if="! hidden"
    class="flex flex-col px-2 py-8 md:px-8 relative text-center w-1/2 md:w-1/3 xl:w-1/4"
    itemscope
    itemtype="http://schema.org/Product"
    @mouseover="hovered = true"
    @mouseout="hovered = false"
  >
    <div
      :class="['top-0 inset-x-0 lg:p-8 z-10 h-full', { 'bg-white': ! showAddToCart }]"
    >
      <collection-product-content-gf
        :display-price="displayPrice"
        :has-subscription-discount="hasSubscriptionDiscount"
        :subscriptions="subscriptions"
        :product="product"
        :product-title="productTitle"
        :product-subtitle="productSubtitle"
        :show-more-info="showMoreInfo"
        v-on:show-add-to-cart="revealAddToCart"
      />

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
          :hide-multi-discount="hideMultiDiscount"
        />
      </div>
    </div>
  </div>
</template>

<script>
import breakpoints from "../breakpoints";

export default {
  props: [
    "product",
    "related",
    "subscriptions",
    "variantSubscriptions",
    "variantMetafields",
    "showMoreInfo",
    "hideMultiDiscount"
  ],

  mounted() {
    EventBus.$on("toggle-product-filter", option => {
      this.filters = { ...this.filters, [option]: !this.filters[option] };
      this.hidden = this.isHidden();
    });

    EventBus.$on("collection-add-to-cart-shown", product => {
      if (product.id == this.product.id) return;
      this.showAddToCart = false;
    });
  },

  data() {
    return {
      hidden: false,
      hovered: false,
      showAddToCart: false,
      filters: {}
    };
  },

  computed: {
    displayPrice() {
      const { price } = this.product;
      const { discount_percentage } = this.subscriptions;

      return discount_percentage
        ? price - price * (discount_percentage / 100)
        : price;
    },

    hasSubscriptionDiscount() {
      return this.subscriptions.discount_percentage;
    },

    productTitle() {
      return this.product.title.replace('(Green Friday)', '').split(":")[0];
    },

    productSubtitle() {
      return this.product.title.replace('(Green Friday)', '').split(":")[1];
    },

    shippingIntervalFrequencies() {
      return this.subscriptions.shipping_interval_frequency.split(",");
    }
  },

  methods: {
    revealAddToCart() {
      this.showAddToCart = true;
      //EventBus.$emit("collection-add-to-cart-shown", this.product);
    },

    modalClosed() {
      this.showAddToCart = false;
    },

    showDescription() {
      return (
        this.hovered &&
        !this.showAddToCart &&
        window.innerWidth >= breakpoints.lg
      );
    },

    isHidden() {
      const activeFilters = Object.keys(_.pickBy(this.filters, f => f == true));
      if (activeFilters.length == 0) return false;

      return !_.every(activeFilters, f => _.includes(this.product.tags, f));
    }
  }
};
</script>
