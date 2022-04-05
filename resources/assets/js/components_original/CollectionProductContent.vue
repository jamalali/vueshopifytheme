<template>
  <div>
    <a v-if="!hideProductImage" :href="url">
      <img class="mb-4" :src="product.featured_image" :alt="product.title" />
    </a>

    <a class="no-underline text-black" :href="url">
      <div itemprop="name">
        <h1 class="font-extrabold text-base md:text-2xl uppercase" v-text="productTitle" />

        <h2 class="font-light text-sm md:text-lg" v-text="productSubtitle" />
      </div>
    </a>

    <slot></slot>

    <div v-if="!hideProductDescription" class="font-medium collection-product-full-description mx-8 my-4 leading-normal text-center text-lg" v-html="product.description">
    </div>

    <div class="flex flex-col flex-grow justify-end mt-4">
      <div class="justify-center flex items-start">
        <span class="items-start font-bold text-lg md:flex md:text-3xl">
          <div v-if="showFrom && !showSubComparison" class="text-xs md:mt-1 md:mr-1">|| 'CollectionProductContent.from_price_title' ||</div>
          <display-price :price="fromPrice" />
        </span>
      </div>

      <div
        v-if="(!hasSubscriptionDiscount && product.compare_at_price) || showSubComparison"
        class="justify-center flex items-start mt-2"
      >
        <span class="text-red text-base">
          || 'CollectionProductContent.rrp_title' ||
          <display-price class="line-through" :price="product.compare_at_price || product.price" />
        </span>
      </div>

      <div v-if="isDesktop" class="flex justify-center -mx-8">
        <button
          v-if="showMoreInfo"
          :href="url"
          class="btn btn--rayen bg-white border-2 border-green block cursor-pointer font-extrabold mt-4 mx-1 no-underline px-6 py-0 text-sm text-green lg:text-lg"
          data-text="|| 'CollectionProductContent.more_info_title' ||"
          @click="goTo(url)"
        >
          <span class="py-3">|| 'CollectionProductContent.more_info_title' ||</span>
        </button>

        <button
          type="button"
          class="btn btn--rayen bg-green block cursor-pointer font-extrabold mt-4 mx-1 no-underline px-6 py-0 text-sm text-white lg:text-lg"
          :class="{'border-2 border-green' : showMoreInfo}"
          data-text="|| 'CollectionProductContent.buy_now_title' ||"
          @click="onBuyNowClick"
        >
          <span class="py-3">|| 'CollectionProductContent.buy_now_title' ||</span>
        </button>
      </div>

      <a
        v-else
        class="btn btn--rayen bg-green block cursor-pointer font-extrabold mt-4 mx-auto no-underline px-6 py-0 text-sm text-white lg:text-lg"
        data-text="|| 'CollectionProductContent.buy_now_title' ||"
        @click="onBuyNowClick"
      >
        <span class="py-3">|| 'CollectionProductContent.buy_now_title' ||</span>
      </a>
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

    productTitle: {
      type: String,
      required: true
    },

    productSubtitle: {
      type: String,
      default: ''
    },

    subscriptions: {
      type: Object,
      required: false
    },

    hasSubscriptionDiscount: {
      type: Boolean,
      default: false
    },

    showMoreInfo: {
      type: Boolean,
      default: false
    },

    hideProductImage: {
      type: Boolean,
      default: false
    },

    hideProductDescription: {
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
      isDesktop: window.innerWidth >= breakpoints.lg
    };
  },

  created () {
    this.resizing = false;

    const listener = window.addEventListener('resize', () => {
      if (this.resizing) return;
      this.resizing = true;

      requestAnimationFrame(() => {
        this.isDesktop = window.innerWidth >= breakpoints.lg;
        this.resizing = false;
      });
    });

    this.$once('hook:beforeDestroy', () => {
      document.removeEventListener('resize', listener);
    });
  },

  computed: {
    url () {
      return `/products/${this.product.handle}`;
    },

    fromPrice () {
      return this.subscriptions &&
        this.subscriptions.has_subscription == 'True' &&
        this.subscriptions.discount_percentage
        ? this.product.price -
            (this.product.price *
              Number(this.subscriptions.discount_percentage)) /
              100
        : this.product.price;
    },

    showFrom () {
      return (
        (this.subscriptions && this.subscriptions.has_subscription == 'True') ||
        this.product.price_varies
      );
    }
  },

  methods: {
    goTo (url) {
      window.location.href = url;
    },

    onBuyNowClick (event) {
      event.preventDefault();
      this.$emit('show-add-to-cart');
    }
  }
};
</script>
