<template>
  <div>
    <table class="mb-32 mt-16 w-full">
      <thead>
        <tr class="vivo-hidden text-lg md:table-row">
          <th></th>
          <th class="font-medium pb-8 text-left md:w-1/4">Product</th>
          <th class="font-medium pb-8 text-left md:w-1/4">Quantity</th>
          <th class="font-medium pb-8 text-left md:w-1/4">Price</th>
        </tr>
      </thead>

      <tbody>
        <cart-item
          v-for="(item, index) in items"
          :item="item"
          :line="index + 1"
          :key="index"
        >
        </cart-item>
      </tbody>
    </table>

    <form class="flex flex-col mb-16 lg:flex-row" action="/checkout" method="post" novalidate>
      <div class="lg:pr-16 lg:w-1/2">
        <label class="font-extrabold text-2xl text-black uppercase" for="order-notes">
          Order Notes
        </label>

        <p>If you have any special delivery instructions please enter them here.</p>

        <textarea
          ref="note"
          rows="5"
          class="block border-t-2 border-b-2 border-grey-light font-bold placeholder-black py-4 resize-none w-full focus:no-outline"
          name="note"
          id="order-notes"
          placeholder="Enter your notes here"
          @keyup="saveNotes"
          v-text="initialCart.note"
        />
      </div>

      <div class="mt-16 lg:mt-0 lg:pl-16 lg:w-1/2">
        <div class="border-t border-b border-grey-light flex items-center justify-between py-8">
          <div class="font-light text-lg">Subtotal:</div>
          <div class="text-2xl font-extrabold">
            <display-price :price="originalTotalPrice"></display-price>
          </div>
        </div>

        <div v-if="totalDiscount > 0" class="border-b border-grey-light flex items-center justify-between py-8">
          <div class="font-light text-lg">Savings:</div>
          <div class="text-2xl font-extrabold text-green">
            -<display-price :price="totalDiscount"></display-price>
          </div>
        </div>

        <div class="border-b border-grey-light flex items-center justify-between py-8">
          <div class="font-light text-lg">Total:</div>
          <div class="text-2xl font-extrabold">
            <display-price :price="totalPrice"></display-price>
          </div>
        </div>

        <div class="font-extrabold justify-between mt-16 text-xl md:flex">
          <a
            class="flex items-center justify-center no-underline px-10 py-4 text-center text-black-full w-full md:w-auto"
            href="/"
          >
            CONTINUE SHOPPING
          </a>

          <button
            class="bg-green btn--rayen flex font-extrabold group items-center justify-center px-10 py-0 relative text-center text-white uppercase w-full md:w-auto"
            type="submit"
            data-text="Proceed to Checkout"
            @click="goToCheckout"
          >
            <span class="py-4">Proceed to Checkout</span>
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import CartItem from './CartItem';

export default {
  props: ['customer', 'initialCart', 'domain', 'hasSubscriptionItem'],

  components: { CartItem },

  /**
     * Create event listeners to update the cart whenever it is changed by
     * another component.
     */
  mounted () {
    EventBus.$on('cart-updated', newCart => {
      this.itemCount = newCart.item_count;
      this.items = [...newCart.items];
      this.totalPrice = newCart.total_price;
      this.originalTotalPrice = newCart.original_total_price;
      this.totalDiscount = newCart.total_discount;
    });

    EventBus.$on('product-added-to-cart', () =>
      axios.get('/cart.js').then(response => {
        this.itemCount = response.data.item_count;
        this.items = [...response.data.items];
        this.totalPrice = response.data.total_price;
        this.originalTotalPrice = response.data.original_total_price;
        this.totalDiscount = response.data.total_discount;
      })
    );
  },

  /**
     * Create the initial data.
     *
     * @return {Object}
     */
  data () {
    return {
      cart: this.initialCart,
      itemCount: this.initialCart.item_count,
      items: [...this.initialCart.items],
      submitting: false,
      totalPrice: this.initialCart.total_price,
      originalTotalPrice: this.initialCart.original_total_price,
      totalDiscount: this.initialCart.total_discount,
      savingNotes: false,
      notesSaved: false
    };
  },

  computed: {
    rechargeCheckoutUrl () {
      let gaLinker = '';
      let customerParams = '';

      try {
        gaLinker = `&${ga.getAll()[0].get('linkerParam')}`;
      } catch (e) {
        gaLinker = '';
      }

      if (this.customer) {
        customerParams = `&customer_id=${this.customer.id}&customer_email=${this.customer.email}`;
      }

      return `https://checkout.rechargeapps.com/r/checkout?myshopify_domain=${this.domain}&cart_token=${this.cart.token}${gaLinker}${customerParams}`;
    }
  },

  methods: {
    async goToCheckout (event) {
      event.preventDefault();

      const note = this.$refs.note.value;

      if (note) {
        await axios.post('/cart/update.js', {
          note: this.$refs.note.value
        });
      }

      if (window.testGlobalBeforeReact) {
        window.testGlobalBeforeReact(0);
      }

      window.location.href = this.hasSubscriptionItem ? this.rechargeCheckoutUrl : '/checkout';
    },

    saveNotes () {
      const note = this.$refs.note.value;
      clearTimeout(this.saveNotesTimeout);

      this.saveNotesTimeout = setTimeout(() => {
        axios.post('/cart/update.js', {
          note: this.$refs.note.value
        });
      }, 1000);
    }
  }
};
</script>
