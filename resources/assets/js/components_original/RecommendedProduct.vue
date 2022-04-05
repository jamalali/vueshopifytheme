<template>
  <div
    class="w-full md:w-1/2 lg:w-1/3"
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
      <div :class="['mb-16 mx-auto w-3/4', { 'shadow-lg-offset': hovered && !showAddToCart }]">
        <add-to-cart-widget
          v-if="showAddToCart"
          :product="product"
          :subscriptions="subscriptions"
          :related="related"
          :variant-subscriptions="variantSubscriptions"
        />

        <div :class="['pt-4', { 'bg-white': hovered }]" v-if="!showAddToCart">
          <img
            class="block mx-auto w-1/2"
            :src="product.featured_image"
            :alt="product.title"
          >
        </div>

        <div class="bg-white pb-8 pt-16 text-center -mt-16" v-if="!showAddToCart">
          <div itemprop="name">
            <h1 class="font-extrabold text-2xl uppercase">{{ productTitle }}</h1>
            <h2 class="font-light text-lg">{{ productSubtitle }}</h2>
          </div>

          <div class="flex flex-col flex-grow justify-end mt-4">
            <div class="justify-center flex items-start">
              <span class="items-start font-bold text-lg md:flex md:text-3xl">
                <div
                  v-if="hasSubscriptionDiscount"
                  class="text-xs md:mt-1 md:mr-1"
                >
                  FROM
                </div>
                <display-price :price="fromPrice" />
              </span>
            </div>

            <a
              class="bg-green block cursor-pointer font-extrabold mt-4 mx-auto no-underline px-6 py-4 text-sm text-white transition-300 transition-bg md:px-12 md:text-lg hover:bg-green-dark"
              :href="url"
              @click="onBuyNowClick"
            >
              BUY NOW
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import breakpoints from '../breakpoints';

export default {
  props: ['product', 'related', 'subscriptions', 'variantSubscriptions'],

  data () {
    return {
      hovered: false,
      showAddToCart: false
    };
  },

  computed: {
    rootStyle () {
      const backgroundImage = this.product.images.length > 1
        ? `url(${this.product.images[1]})`
        : null;

      return { backgroundImage };
    },

    productTitle () {
      return this.product.title.split(':')[0];
    },

    productSubtitle () {
      return this.product.title.split(':')[1];
    },

    hasSubscription () {
      return this.subscriptions && this.subscriptions.has_subscription == 'True';
    },

    hasSubscriptionDiscount () {
      return this.subscriptions && this.subscriptions.discount_percentage;
    },

    fromPrice () {
      return this.hasSubscriptionDiscount
        ? this.product.price - (this.product.price * Number(this.subscriptions.discount_percentage) / 100)
        : this.product.price;
    },

    url () {
      return `/products/${this.product.handle}`;
    }
  },

  methods: {
    onBuyNowClick (event) {
      if (window.innerWidth >= breakpoints.lg) {
        event.preventDefault();
        this.showAddToCart = true;
      }
    }
  }
};
</script>
