<template>
  <tr class="align-top font-extrabold text-xl md:text-2xl" v-if="quantity > 0">
    <td class="border-grey-lighter border-t-2 px-1 py-5">
      <img :src="croppedImage()" :alt="item.product_title">
    </td>

    <td class="border-grey-lighter border-t-2 px-1 py-5">
      <div class="uppercase">{{ item.product_title }}</div>
      <div class="font-medium text-base">{{ item.variant_title }}</div>

      <div
        v-if="subscription"
        class="font-medium text-base my-4"
      >
        Delivery every {{ subscription.frequency }} {{ subscription.unitType }}
      </div>

      <button class="cursor-pointer mt-1 text-base text-grey-light" @click="updateQuantity(0)">
        REMOVE
      </button>
    </td>

    <td class="border-grey-lighter border-t-2 px-1 py-5">
      <div class="flex items-center">
        <div class="mr-2 w-4">
          <cart-quantity type="minus" @update-quantity="updateQuantity(quantity - 1)" v-if="quantity > 1"></cart-quantity>
        </div>

        <div class="font-medium text-base md:font-extrabold md:text-3xl">{{ quantity }}</div>

        <div class="ml-2 w-4">
          <cart-quantity type="plus" @update-quantity="updateQuantity(quantity + 1)"></cart-quantity>
        </div>
      </div>
    </td>

    <td class="border-grey-lighter border-t-2 font-medium px-1 py-5 text-base md:font-extrabold md:text-3xl">
      <display-price :price="item.line_price" />
    </td>
  </tr>
</template>

<script>
import CartQuantity from './CartQuantity';

export default {
  props: {
    line: {
      type: Number,
      required: true
    },

    item: {
      type: Object,
      required: true
    }
  },

  components: { CartQuantity },

  data () {
    return {
      quantity: this.item.quantity
    };
  },

  computed: {
    /**
       * Check if the current item has a subscription associated with it.
       *
       * @return {Boolean}
       */
    hasSubscription () {
      const { properties } = this.item;

      return properties != null &&
          Object.keys(properties).length > 0 &&
          properties.shipping_interval_unit_type != null &&
          properties.shipping_interval_frequency != null;
    },

    /**
       * If the current item has an associated subscription then return an
       * object representing that subscription.
       *
       * @return {Boolean|null}
       */
    subscription () {
      if (!this.hasSubscription) return null;

      const {
        shippingIntervalUnitType,
        shippingIntervalFrequency
      } = this.item.properties;

      return {
        unitType: shippingIntervalUnitType.toLowerCase(),
        frequency: shippingIntervalFrequency
      };
    }
  },

  methods: {
    /**
       * Generate the URL of a cropped product image.
       *
       * @param  {String}  dimensions
       * @return {String}
       */
    croppedImage (dimensions = '185x235') {
      const fragments = this.item.image.split('.');

      return _.map(fragments, (item, index) => {
        return index == fragments.length - 2 ? `${item}_${dimensions}` : item;
      }).join('.');
    },

    /**
       * Update the selected quantity of the current item.
       *
       * @param  {Number}  quantity
       */
    updateQuantity (quantity) {
      this.quantity = quantity;

      axios.post('/cart/change.js', { quantity, line: this.line })
        .then(r => EventBus.$emit('cart-updated', r.data));
    }
  }
};
</script>
