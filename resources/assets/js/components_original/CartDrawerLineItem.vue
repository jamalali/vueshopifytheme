<template>
  <li :class="['flex justify-between p-10', { 'border-grey-light border-t': isFirst }]">
    <div class="flex-none mr-2 w-27">
      <img
        v-if="item.image != null"
        :src="item.image"
        :alt="item.product_title"
      >
    </div>

    <div class="flex flex-col justify-end flex-grow">
      <div class="flex flex-row justify-start">
        <div class="flex-grow">
          <div class="font-extrabold text-base uppercase">{{ item.product_title }}</div>

          <div class="font-light text-xl">{{ item.variant_title }}</div>

          <div
            v-if="subscription"
            class="font-light text-sm my-3"
          >
            Delivery every {{ subscription.frequency }} {{ subscription.unitType }}
          </div>

          <div class="flex items-center mt-2 text-3xl" v-if="true">
            <svg
              class="cursor-pointer transform-origin-center transition-cubic-bezier w-3 focus:scale-1.4 hover:scale-1.4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="13159.181 -14962.819 12.944 12.944"
              @click="updateQuantity(index + 1, item.quantity - 1)"
            >
              <g transform="translate(11862 -15905)">
                <g transform="translate(1310.125 948.164) rotate(90)">
                  <rect
                    stroke="none"
                    width="1.215"
                    height="12.945"
                    rx="0.608"
                  />

                  <rect
                    fill="none"
                    x="0.5"
                    y="0.5"
                    width="0.215"
                    height="11.945"
                    rx="0.108"
                  />
                </g>
              </g>
            </svg>

            <div class="font-extrabold mx-2 text-base">{{ item.quantity }}</div>

            <svg
              class="cursor-pointer transform-origin-center transition-cubic-bezier w-3 focus:scale-1.4 hover:scale-1.4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="13159.181 -14962.819 12.944 12.944"
              @click="updateQuantity(index + 1, item.quantity + 1)"
            >
              <g transform="translate(11862 -15905)">
                <g transform="translate(1303.164 942.181)">
                  <rect stroke="none" width="1.215" height="12.945" rx="0.608"/>
                  <rect fill="none" x="0.5" y="0.5" width="0.215" height="11.945" rx="0.108"/>
                </g>
                <g transform="translate(1310.125 948.164) rotate(90)">
                  <rect stroke="none" width="1.215" height="12.945" rx="0.608"/>
                  <rect fill="none" x="0.5" y="0.5" width="0.215" height="11.945" rx="0.108"/>
                </g>
              </g>
            </svg>
          </div>

          <div class="cursor-pointer mt-1 text-grey-light" @click="updateQuantity(index + 1, 0)">
            REMOVE
          </div>
        </div>

        <div class="flex-none text-right w-27">
          <display-price :price="item.line_price" />
        </div>
      </div>
    </div>
  </li>
</template>

<script>
export default {
  props: {
    item: Object,
    isFirst: Boolean,
    index: Number
  },

  computed: {
    hasSubscription () {
      const { properties } = this.item;

      return properties != null &&
          Object.keys(properties).length > 0 &&
          properties.shipping_interval_unit_type != null &&
          properties.shipping_interval_frequency != null;
    },

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
    async updateQuantity (line, quantity) {
      const response = await axios.post('/cart/change.js', { line, quantity });

      EventBus.$emit('cart-updated', response.data);
    }
  }
};
</script>
