<template>
  <div class="hero-atc-totals flex justify-between mb-4">
    <div class="flex flex-col justify-end text-sm font-medium ml-1">
      <transition name="quick-fade" mode="out-in">
        <p
          v-if="hasDiscount && purchaseType == 'single' && !hideMultiDiscount"
          class="text-green-thrive font-bold mt-0"
          style="margin-bottom:0.1rem;"
        >{{ saveMoneyText }}</p>
      </transition>
      <p
        v-if="hasServings"
        class="mt-0"
        style="margin-bottom:0.1rem;"
      >
        || 'HeroAddToCartTotals.total_servings_text' ||
      </p>
      <p
        v-if="hasServings"
        class="mt-0"
        style="margin-bottom:0.1rem;"
      >
        <span class="font-bold">|| 'HeroAddToCartTotals.only_text' ||</span>
        <display-price :price="pricePerServing" />&nbsp;|| 'HeroAddToCartTotals.per_serving_text' ||
      </p>
    </div>
    <div class="flex flex-col justify-end">
      <h4 class="font-bold text-2xl self-end">
        <display-price v-if="totalOriginalPrice" :price="totalOriginalPrice" class="line-through" />
        <display-price :price="totalPrice" :class="{ 'text-green-thrive': totalOriginalPrice }" />
      </h4>
      <transition name="quick-fade" mode="out-in">
        <p
          v-if="(hasDiscount && discountTotal) || compareAtPriceTotal"
          class="font-semibold text-sm text-green-thrive mb-0 mt-0"
        >
          || 'HeroAddToCartTotals.you_saved_text' ||
        </p>
      </transition>
    </div>
  </div>
</template>

<style scoped>
/* Text Anims for discounts & totals. */
.quick-fade-enter-active {
  transition: opacity 3s ease-out;
}

.quick-fade-enter,
.quick-fade-leave-to {
  opacity: 0;
}

.quick-fade-leave-active {
  transition: opacity 1.5s ease-in;
  display: none;
}
</style>

<script>
export default {
  props: {
    product: Object,

    purchaseType: {
      type: String,
      default: 'single'
    },

    pouchSize: {
      type: String,
      default: 'large'
    },

    selectedVariantQuantities: {
      type: Object,
      default: () => {
        return {};
      }
    },

    subscriptions: Object,

    totalQuantity: {
      type: Number,
      default: 0
    },

    inactive: {
      type: Boolean,
      default: false
    },

    servings: {
      type: Number,
      default: 0
    },

    smallVariants: {
      type: Array,
      default: () => {
        return [];
      }
    },

    largeVariants: {
      type: Array,
      default: () => {
        return [];
      }
    },

    onlyVariant: {
      type: Array,
      required: false,
      default: () => {
        return [];
      }
    },

    hideMultiDiscount: {
      type: Boolean,
      default: false
    }
  },

  watch: {
    selectedVariantQuantities (val) {
      this.selectedVariantQuantities = val;
    }
  },

  methods: {
    minusPercent (n, p) {
      return n - (n * (p / 100));
    },
    unitPriceForQty (qty) {
      if (qty == 2) {
        return (this.minusPercent(this.getPrice, 5) / 100).toFixed(2);
      }
      if (qty > 2) {
        return (this.minusPercent(this.getPrice, 10) / 100).toFixed(2);
      }
    }
  },

  computed: {
    // Replaces basePrice function.
    getPrice () {
      if ((this.product.tags.includes('Apparel') ||
            this.product.tags.includes('GiftCard') ||
            this.product.tags.includes('Accessory') ||
            this.pouchSize === 'single') &&
        typeof (this.onlyVariant) === 'object' &&
        this.onlyVariant[0] !== false) {
        return this.onlyVariant[0].price;
      }
      let arRef = [];
      if (this.pouchSize === 'large') {
        arRef = this.largeVariants;
      } else if (this.pouchSize === 'small') {
        arRef = this.smallVariants;
      }
      if (arRef.length > 0) {
        return arRef.reduce(function (prev, curr) {
          return prev.price < curr.price ? prev : curr;
        }).price;
      } else {
        return 0;
      }
    },

    hasServings () {
      return Boolean(this.servings);
    },

    basePrice () {
      return 0; // This is deprecated but keeping it returning 0 for now as many other functions depend on it returning a value.
    },

    hasDiscount () {
      return (
        this.purchaseType == 'subscription' ||
        (!this.product.tags.includes('Apparel') && !this.product.tags.includes('GiftCard') && !this.product.tags.includes('Accessory'))
      );
    },

    compareAtPriceTotal () {
      // This only picks up the compare_at_price of each variant and then multiplies it by the quantity.
      const arRef = this.product.variants;
      const compareAt = arRef
        .map(v => v.compare_at_price * (this.selectedVariantQuantities[v.id] ? this.selectedVariantQuantities[v.id].quantity : 0))
        .reduce((total, p) => {
          return total + p;
        }, 0);
      return compareAt;
    },

    subTotal () {
      // Another re-factored function, uses this.product.variants instead of individual variant arrays based on sizes,
      // means it'll always add up the right variants as it has access to read all.
      const arRef = this.product.variants;
      // console.log('subtotal:');
      const sub = arRef
        .map(v => v.price * (this.selectedVariantQuantities[v.id] ? this.selectedVariantQuantities[v.id].quantity : 0))
        .reduce((total, p) => {
          return total + p;
        }, 0);
      // console.log(sub);
      return sub;
    },

    discountTotal () {
      if (this.totalQuantity == 0) {
        return 0;
      }
      if (this.discountPercentage && this.compareAtPriceTotal) {
        return (this.compareAtPriceTotal - this.subTotal) + (this.subTotal * (this.discountPercentage / 100));
      }
      if (this.discountPercentage && !this.compareAtPriceTotal) {
        return this.subTotal * (this.discountPercentage / 100);
      }
      if (this.compareAtPriceTotal > this.subTotal) {
        return this.compareAtPriceTotal - this.subTotal;
      }
      return 0;
    },

    totalOriginalPrice () {
      if (this.totalQuantity == 0) {
        return 0;
      }
      if (this.discountPercentage && this.compareAtPriceTotal) {
        return this.compareAtPriceTotal;
      }
      if (this.discountPercentage && !this.compareAtPriceTotal) {
        return this.subTotal;
      }
      if (this.compareAtPriceTotal > this.subTotal) {
        return this.compareAtPriceTotal;
      }
      return 0;
    },

    totalPrice () {
      if (this.totalQuantity == 0) {
        return 0;
      }
      // console.log(this.subTotal);
      // console.log(this.discountTotal);
      const subTotal = this.subTotal;
      const discountTotal = this.discountTotal;
      // console.log(`Sub total ${subTotal}`);
      // console.log(`Discount total ${discountTotal}`);
      // console.log(`Figure: ${(subTotal - discountTotal) / 100}`);
      return Math.floor(this.minusPercent(this.subTotal, this.discountPercentage)).toFixed(2);
    },

    pricePerServing () {
      const quantity = this.totalQuantity > 0 ? this.totalQuantity : 0;
      if (quantity === 0) { return 0; }
      return this.totalPrice / this.totalServings;
    },

    totalServings () {
      return Object.values(this.selectedVariantQuantities).reduce(
        (total, variant, index) => {
          return total + (variant.servings * variant.quantity);
        },
        0
      );
    },

    discountPercentage () {
      if (this.purchaseType == 'subscription') {
        return 12.5;
      } else if (this.product.tags.includes('Apparel') || this.product.tags.includes('GiftCard') || this.product.tags.includes('Accessory') || this.hideMultiDiscount) {
        return 0;
      } else if (this.totalQuantity == 2) {
        return 5;
      } else if (this.totalQuantity > 2) {
        return 10;
      } else {
        return 0;
      }
    },

    saveMoneyText () {
      switch (this.totalQuantity) {
        case 0:
          return "|| 'HeroAddToCartTotals.discount_buy_2_text' ||";
        case 1:
        case 2:
          return `|| 'HeroAddToCartTotals.discount_add_another_text_1' || ${this.unitPriceForQty(this.totalQuantity + 1)} || 'HeroAddToCartTotals.discount_add_another_text_2' ||`;
        default:
          return "|| 'HeroAddToCartTotals.discount_best_text' ||";
      }
    }
  }
};
</script>
