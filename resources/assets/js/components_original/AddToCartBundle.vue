<template>

  <form id="add-to-cart-bundle" @submit.prevent="addToCart">
    <table class="mx-auto mb-8">
      <tr>
        <th>|| 'AddToCartBundle.table_headings_col_1' ||</th>
        <th>|| 'AddToCartBundle.table_headings_col_2' ||</th>
        <th>|| 'AddToCartBundle.table_headings_col_3' ||</th>
      </tr>
      <tr v-for="product in products" :key="product.id" class="border-t-4">
        <td class="py-2 text-sm md:text-base">
          {{ product.title }}<br />

          <select v-if="product.variants.length > 1" :class="'variant-selector-'+product.id" v-model="product.selectedVariant" @change="updateTotals()">
            <option v-for="variant in product.variants" :key="variant.id" :value="variant.id" :data-price="variant.price">
              {{ variant.title }}<template v-if="variant.stock == 0"> || 'AddToCartBundle.out_of_stock_text_special' ||</template>
            </option>
          </select>

          <select v-else :class="'variant-selector-'+product.id" class="hidden" v-model="product.selectedVariant">
            <option v-for="variant in product.variants" :key="variant.id" :value="variant.id" :data-price="variant.price" selected="selected"></option>
          </select>
        </td>
        <td></td>
        <td class="variant-price" v-html="money(product.price)"></td>
      </tr>
    </table>

    <div class="uppercase font-bold text-sm">|| 'AddToCartBundle.bundle_price_title' ||</div>

    <div class="flex items-center justify-center content-center text-3xl w-64 mx-auto">
      <div class="flex-1">
        <span class="bundle-total line-through">|| 'globals.settings.currency_symbol' || 00.00</span>
      </div>
      <div class="flex-1">
        <span class="bundle-discount font-bold">|| 'globals.settings.currency_symbol' || 00.00</span>
      </div>
    </div>

    <span class="block text-green-thrive text-sm mb-8">|| 'AddToCartBundle.bundle_status_text_1' || <template v-if="productsCount > 1">|| 'AddToCartBundle.bundle_status_text_2' ||</template><template v-else>|| 'AddToCartBundle.bundle_status_text_3' ||</template> {{ productsCount }} <template v-if="productsCount > 1">|| 'AddToCartBundle.bundle_status_text_4' ||</template><template v-else>|| 'AddToCartBundle.bundle_status_text_5' ||</template> || 'AddToCartBundle.bundle_status_text_6' ||</span>

    <button type="submit" class="btn max-w-xs no-underline font-bold mx-auto px-10 my-2 w-full text-sm sm:text-base">
      || 'AddToCartBundle.bundle_add_to_cart' ||
    </button>
  </form>

  <!--

    <div class="w-1/3" v-for="(option, index) in options" :key="index">
      <h2>{{ option.title }}</h2>
      <img v-bind:src="option.img" /><br />
      <select>
        <option v-for="opt in option.variants" v-bind:opt-id="opt.id" v-bind:value="{ id: opt.id, price: opt.title }">{{ opt.title }}</option>
      </select>
    </div>

    <a v-bind:href="AddToCart">Add to cart</a>

    <div>
      <hr />
      {{ options }}
    </div>

  -->
</template>

<script>
import $ from 'jquery';

export default {
  name: 'add-to-cart-bundle',

  props: {
    bundle: {
      type: String,
      required: true
    },
    products: {
      type: Array,
      required: true
    },
    productsCount: {
      type: Number,
      required: true
    },
    locale: {
      type: String,
      required: true
    },
    currency: {
      type: String,
      required: true
    },
    percentage: {
      type: Number,
      default: 10
    }
  },

  data () {
    return {
      selectedProducts: {}
    };
  },

  computed: {
    cartUrl: function () {
      let url = '/cart/add?';
      for (const key in this.selectedProducts) {
        url += `id[]=${key}&properties[Bundle]=${encodeURI(this.bundle)}&quantity=1&`;
      }
      return url;
    },
    getDiscount: function () {
      return (100 - this.percentage) / 100;
    }
  },

  mounted () {
    this.$nextTick(() => {
      this.updateTotals();
    });
  },

  methods: {
    addToCart: function () {
      this.updateTotals();
      document.location.href = this.cartUrl;
    },
    money: function (val) {
      return new Intl.NumberFormat(this.locale, { style: 'currency', currency: this.currency }).format(val / 100);
    },
    updateTotals: function () {
      this.selectedProducts = {};
      let total = 0;
      for (let i = 0; i < this.products.length; i++) {
        this.changePrice(this.products[i].id);
      }
      for (const i in this.selectedProducts) {
        total += this.selectedProducts[i];
      }
      $('.bundle-total').html(this.money(total));
      $('.bundle-discount').html(this.money(total * this.getDiscount));
    },
    changePrice: function (id) {
      const variantID = $('.variant-selector-' + id).find(':selected').val();
      const price = $('.variant-selector-' + id).find(':selected').data('price');
      this.selectedProducts = {
        ...this.selectedProducts,
        [variantID]: price
      };
      $('.variant-price', $('.variant-selector-' + id).closest('tr')).html(this.money(price));
    }
  }
};
</script>
