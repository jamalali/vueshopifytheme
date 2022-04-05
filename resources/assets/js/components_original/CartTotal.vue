<template>
<a href="#" @click="spawnCart()" class="inline-flex items-center lg:mr-5 text-black no-underline ml-0">
  <svg class="h-6 mx-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
    <rect class="basket-svg-1" x="6" y="11.25" width="19.5" height="17" />
    <path class="basket-svg-2" d="M19.25,8.25V6.75a3.5,3.5,0,0,0-7,0v1.5" />
  </svg>
  <display-price :price="total"></display-price>
</a>
</template>

<script>
export default {
  props: ['initialTotal'],

  mounted () {
    EventBus.$on('product-added-to-cart', this.updateTotal);

    EventBus.$on('cart-updated', newCart => {
      this.total = newCart.total_price;
    });
  },

  data () {
    return {
      total: this.initialTotal
    };
  },

  methods: {
    toggleCartDrawer () {
      this.$emit('toggle-cart-drawer'); // @click.prevent="toggleCartDrawer"
    },

    async updateTotal () {
      const response = await axios.get('/cart.js');
      this.total = response.data.total_price;
    },

    spawnCart () {
      EventBus.$emit('cart-drawer-click', true);
    }
  }
};
</script>
