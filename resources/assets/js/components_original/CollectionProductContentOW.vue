<template>
  <div>
    <div>
      <a :href="url"><img class="mb-4" :src="product.featured_image" :alt="product.title" /></a>
    </div>

    <div class="text-black">
      <div itemprop="name">
        <h1 class="font-extrabold text-base md:text-2xl uppercase" v-text="productTitle" />

        <h2 class="font-extrabold text-base md:text-2xl uppercase" v-text="productSubtitle" />
      </div>
    </div>

    <slot></slot>

    <div class="flex flex-col flex-grow justify-end mt-4">
      <div class="justify-center flex items-start">
        <span class="items-start font-bold text-ocean-week-blue text-lg md:flex md:text-3xl">
          <div v-if="showFrom" class="text-xs md:mt-1 md:mr-1">|| 'CollectionProductContentOW.from_price_title' ||</div>
          <display-price class="uppercase font-bold" :price="fromPrice" />
        </span>
      </div>

      <div
        v-if="! hasSubscriptionDiscount && product.compare_at_price"
        class="justify-center flex items-start"
      >
        <span class="text-black-2 text-lg md:text-3xl">
          <display-price class="uppercase line-through relative" :price="product.compare_at_price" />
        </span>
      </div>

      <div v-if="isDesktop" class="flex justify-center -mx-8">
        <button
          v-if="showMoreInfo"
          :href="url"
          class="btn btn--rayen bg-white border-2 border-ocean-week-blue block cursor-pointer font-extrabold mt-4 mx-1 no-underline px-6 py-0 text-sm text-ocean-week-blue lg:text-lg focus:outline-none"
          data-text="|| 'CollectionProductContentOW.more_info_title' ||"
          @click="goTo(url)"
        >
          <span class="py-3">|| 'CollectionProductContentOW.more_info_title' ||</span>
        </button>

        <button
          type="button"
          class="btn btn--rayen bg-ocean-week-blue block cursor-pointer font-extrabold mt-4 mx-1 no-underline px-6 py-0 text-sm text-white lg:text-lg focus:outline-none"
          :class="{'border-2 border-green' : showMoreInfo}"
          data-text="|| 'CollectionProductContentOW.buy_now_title' ||"
          @click="onBuyNowClick"
        >
          <span class="py-3">|| 'CollectionProductContentOW.buy_now_title' ||</span>
        </button>
      </div>

      <a
        v-else
        class="btn btn--rayen bg-ocean-week-blue block cursor-pointer font-extrabold mt-4 mx-auto no-underline px-6 py-0 text-sm text-white lg:text-lg"
        data-text="|| 'CollectionProductContentOW.buy_now_title' ||"
        @click="onBuyNowClick"
      >
        <span class="py-3">|| 'CollectionProductContentOW.buy_now_title' ||</span>
      </a>
    </div>
  </div>
</template>

<script>
import breakpoints from "../breakpoints";

export default {
  props: [
    "product",
    "productTitle",
    "productSubtitle",
    "displayPrice",
    "hasSubscriptionDiscount",
    "showMoreInfo",
    "subscriptions"
  ],

  data() {
    return {
      isDesktop: window.innerWidth >= breakpoints.lg
    };
  },

  created() {
    this.resizing = false;

    const listener = window.addEventListener("resize", () => {
      if (this.resizing) return;
      this.resizing = true;

      requestAnimationFrame(() => {
        this.isDesktop = window.innerWidth >= breakpoints.lg;
        this.resizing = false;
      });
    });

    this.$once("hook:beforeDestroy", () => {
      document.removeEventListener("resize", listener);
    });
  },

  computed: {
    url() {
      return `/products/${this.product.handle}`;
    },

    fromPrice() {
      return this.subscriptions &&
        this.subscriptions.has_subscription == "True" &&
        this.subscriptions.discount_percentage
        ? this.product.price -
            (this.product.price *
              Number(this.subscriptions.discount_percentage)) /
              100
        : this.product.price;
    },

    showFrom() {
      return (
        (this.subscriptions && this.subscriptions.has_subscription == "True") ||
        this.product.price_varies
      );
    }
  },

  methods: {
    goTo(url) {
      window.location.href = url;
    },

    onBuyNowClick(event) {
      event.preventDefault();
      this.$emit("show-add-to-cart");
    }
  }
};
</script>
