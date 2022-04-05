<template>
  <div class="flex flex-col h-full">
    <div>
      <a :href="url"><img :src="product.featured_image" :alt="product.title" /></a>
    </div>

    <div class="text-black h-20">
      <div itemprop="name">
        <h1 class="font-extrabold text-xl md:text-2xl uppercase" v-text="productTitle" />

        <h2 class="font-semibold text-sm" v-text="productSubtitle" />
      </div>
    </div>

    <slot></slot>

    <div class="flex flex-col flex-grow justify-end mt-4">
      <div class="justify-center flex items-start">
        <span class="items-start font-bold text-green-friday-green md:flex">
          <div v-if="showFrom" class="text-xs md:mt-1 md:mr-1">|| 'CollectionProductContentGF.from_price_title' ||</div>
          <display-price class="font-bold notranslate text-3xl uppercase" :price="fromPrice" />
        </span>
      </div>

      <div
        v-if="! hasSubscriptionDiscount && product.compare_at_price"
        class="justify-center flex items-start"
      >
        <span class="text-black-2 text-lg md:text-2xl">
          <display-price class="uppercase line-through relative" :price="product.compare_at_price" />
        </span>
      </div>

      <div v-if="isDesktop" class="flex justify-center -mx-8">
        <button
          v-if="showMoreInfo"
          :href="url"
          class="btn btn--rayen bg-white border-2 border-green-friday-green block cursor-pointer font-extrabold mt-4 mx-1 no-underline text-sm text-green-friday-green lg:text-lg focus:outline-none"
          data-text="|| 'CollectionProductContentGF.more_info_title' ||"
          @click="goTo(url)"
        >
          || 'CollectionProductContentGF.more_info_title' ||
        </button>

        <button
          type="button"
          class="btn btn--rayen bg-green-friday-green block cursor-pointer font-extrabold mt-4 mx-1 no-underline text-sm text-white lg:text-lg focus:outline-none"
          :class="{'border-2 border-green' : showMoreInfo}"
          data-text="|| 'CollectionProductContentGF.buy_now_title' ||"
          @click="onBuyNowClick"
        >
          || 'CollectionProductContentGF.buy_now_title' ||
        </button>
      </div>

      <a
        v-else
        class="btn btn--rayen bg-green-friday-green block cursor-pointer font-extrabold mt-4 mx-auto no-underline text-sm text-white lg:text-lg"
        data-text="|| 'CollectionProductContentGF.buy_now_title' ||"
        @click="onBuyNowClick"
      >
        || 'CollectionProductContentGF.buy_now_title' ||
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
