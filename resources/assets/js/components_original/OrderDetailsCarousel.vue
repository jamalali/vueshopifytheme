<template>
  <div class="OrderDetailsCarousel">
    <carousel
      :autoplay="false"
      :loop="true"
      :per-page="1"
      :paginationEnabled="false"
      :navigationEnabled="true"
      :navigationPrevLabel="arrowSVG"
      :navigationNextLabel="arrowSVG"
      ref="carousel">

      <slide v-for="(order, index) in orders" :key="'order-'+index"
        :index="index"
        :class="{
          'last-slide': (index === orders.length - 1)
        }"
        :id="'VueCarousel-slide-' + index"
        class="bg-off-white">
        <h2 class="font-extrabold text-black-2 text-center text-lg pt-2 pb-4 tracking-normal">|| 'OrderDetailsCarousel.order' || {{ order.name }}</h2>
        <div class="rounded shadow-lg bg-white mx-4 mb-8 py-2 relative">
          <div class="order-details">
            <table class="table-fixed w-full text-sm sm:text-base">
              <thead class="font-extrabold">
                <tr>
                  <th class="w-2/3 px-4 py-2 text-left">|| 'OrderDetailsCarousel.date' ||</th>
                  <th class="w-1/6 px-0 py-2 text-center">|| 'OrderDetailsCarousel.order' ||</th>
                  <th class="w-1/6 pr-4 py-2 text-right">|| 'OrderDetailsCarousel.total' ||</th>
                </tr>
              </thead>
              <tbody class="text-green-friday-grey">
                <tr>
                  <td class="font-bold px-4 py-2 text-black-2 text-left">{{ order.purchased_at }}</td>
                  <td class="px-0 py-2 text-center">{{ order.name }}</td>
                  <td class="pr-4 py-2 text-right">{{ order.total_price }}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="order-status font-semibold mb-4 order-status px-4 text-sm sm:text-base text-black-2">
            <p class="mt-4 mb-0">|| 'OrderDetailsCarousel.order_type' ||
              <span :class="(order.order_type == 'subscription' ? 'text-green-thrive' : '')"
                class="capitalize font-normal">
                {{ order.order_type }}
              </span>
              <span v-if="order.first_subscription_order" class="font-normal">|| 'OrderDetailsCarousel.first_order' ||</span>
            </p>
            <p class="my-2">|| 'OrderDetailsCarousel.payment_status' ||
              <a v-if="order.financial_status == 'paid'"
                class="text-green-thrive capitalize font-normal"
                :href="order.order_status_url"
                target="_blank">
                {{ order.financial_status }}
              </a>
              <span v-else
                class="text-warning capitalize font-normal">
                {{ order.financial_status }}
              </span>
            </p>
            <p class="my-2">|| 'OrderDetailsCarousel.fullfillment_status' ||
              <span v-if="order.fulfillment_status"
                :class="(order.fulfillment_status == 'fulfilled' ? 'text-green-thrive' : (order.financial_status == 'voided' ? 'text-danger' : 'text-warning'))"
                class="capitalize font-normal">
                <a v-if="order.financial_status == 'paid'"
                  v-html="(order.fulfillment_status == 'fulfilled' ? 'shipped' : order.fulfillment_status)"
                  :href="order.order_status_url"
                  target="_blank">
                </a>
                <span v-else
                  v-html="(order.fulfillment_status == 'fulfilled' ? 'shipped' : order.fulfillment_status)">
                </span>
              </span>
              <span v-else class="font-normal">-</span>
            </p>
            <p class="my-0" v-if="order.cancelled">
              || 'OrderDetailsCarousel.cancelled' || <span class="when font-normal">{{ order.cancelled_at }}</span><br />
              <span class="text-green-friday-grey inline-block mt-1">|| 'OrderDetailsCarousel.reason' || <span class="why font-normal" v-html="(order.cancel_reason != '' ? order.cancel_reason : '|| 'OrderDetailsCarousel.n_a' ||')"></span></span>
            </p>
          </div>
          <div class="order-line-items px-4">
            <table class="table-fixed w-full text-sm sm:text-base">
              <thead class="border-b-1 font-bold text-black-full">
                <tr>
                  <th class="w-2/3 py-2 text-left">|| 'OrderDetailsCarousel.product' ||</th>
                  <th class="w-1/6 py-2 text-center">|| 'OrderDetailsCarousel.qty' ||</th>
                  <th class="w-1/6 py-2 text-right">|| 'OrderDetailsCarousel.price' ||</th>
                </tr>
              </thead>
              <tbody class="text-green-friday-grey">
                <!-- Items List -->
                <tr v-for="(line_item, index) in order.line_items" :key="'line-item-'+index"
                  :index="index"
                  class="border-b-1">
                  <td class="py-2 text-left">
                    <a
                      class="text-black-2 font-bold leading-snug"
                      :href="line_item.product_url"
                      v-html="line_item.title">
                    </a>
                    <span class="text-warning leading-snug" v-if="line_item.refunded_quantity > 0">|| 'OrderDetailsCarousel.refunded' ||</span>
                    <br />
                    <span class="leading-snug">{{ line_item.variant_title }}</span>
                  </td>
                  <td class="py-2 text-center">{{ line_item.quantity }}</td>
                  <td class="py-2 text-right">{{ line_item.line_price }}</td>
                </tr>
                <!-- Items List End -->

                <!-- Sub Total -->
                <tr class="text-black-full">
                  <td class="py-2">|| 'OrderDetailsCarousel.subtotal' ||</td>
                  <td colspan="2" class="py-2 text-right">{{ order.subtotal_price }}</td>
                </tr>
                <!-- Sub Total End -->

                <!-- Discounts -->
                <tr v-for="(discount, index) in order.discounts" :key="'discount-'+index"
                  :index="index"
                  class="text-black-full">
                  <td class="pb-2 text-green-thrive" v-html="(discount.code == '' ? '|| 'OrderDetailsCarousel.discount' ||' : '|| 'OrderDetailsCarousel.code' || ' + discount.code)"></td>
                  <td colspan="2" class="pb-2 text-right">{{ discount.savings }}</td>
                </tr>
                <!-- Discounts End -->

                <!-- Shipping -->
                <tr v-for="(shipping_method, index) in order.shipping_methods" :key="'shipping-method-'+index"
                  :index="index"
                  class="text-black-full">
                  <td class="pb-2">{{ shipping_method.title }}</td>
                  <td colspan="2" class="pb-2 text-right">{{ shipping_method.price }}</td>
                </tr>
                <!-- Shipping End -->

                <!-- Tax -->
                <tr v-for="(tax_line, index) in order.tax_lines" :key="'tax-line-'+index"
                  :index="index"
                  class="text-black-full">
                  <td class="pb-2">|| 'OrderDetailsCarousel.tax' || ({{ tax_line.title }} {{ tax_line.rate * 100 }}%)</td>
                  <td colspan="2" class="pb-2 text-right">{{ tax_line.price }}</td>
                </tr>
                <!-- Tax end -->

                <!-- Total Price -->
                <tr class="text-black-full font-extrabold border-t-1 border-b-1">
                  <td class="py-2">|| 'OrderDetailsCarousel.total' ||</td>
                  <td colspan="2" class="py-2 text-right">{{ order.total_price }}</td>
                </tr>
                <!-- Total Price End-->

                <!-- Transactions -->
                <tr v-for="(transaction, index) in order.transactions" :key="'transaction-'+index"
                  :index="index"
                  class="">
                  <td class="py-2">{{ transaction.name }}</td>
                  <td colspan="2" class="py-2 text-right">{{ transaction.amount }}</td>
                </tr>
                <!-- Transactions end -->

                <!-- Refunds -->
                <tr v-for="(refund, index) in order.refunds" :key="'transaction-'+index"
                  :index="index"
                  class="">
                  <td class="pb-2">|| 'OrderDetailsCarousel.refund_via' ||</td>
                  <td colspan="2" class="pb-2 text-right text-warning">- {{ refund.amount }}</td>
                </tr>
                <!-- Transactions end -->
              </tbody>
            </table>
          </div>
          <div class="order-addresses px-4 text-green-friday-grey text-sm sm:text-base">
            <div class="billing py-4">
              <h3 class="text-black-2 font-bold text-base">|| 'OrderDetailsCarousel.billing_address' ||</h3>
              <div v-if="order.billing_address">
                <p class="capitalize my-1">{{ order.billing_address.name }}</p>
                <p class="capitalize my-1">{{ order.billing_address.company }}</p>
                <p class="capitalize my-1">{{ order.billing_address.street }}</p>
                <p class="capitalize my-1">{{ order.billing_address.city }}, {{ order.billing_address.province }}</p>
                <p class="capitalize my-1">{{ order.billing_address.country }} {{ order.billing_address.zip }}</p>
                <p class="capitalize my-1">{{ order.billing_address.phone }}</p>
              </div>
              <div v-else>
                <p class="capitalize my-1">|| 'OrderDetailsCarousel.no_address_supplied' ||</p>
              </div>
            </div>

            <div class="delivery">
              <h3 class="text-black-2 font-bold text-base">|| 'OrderDetailsCarousel.delivery_address' ||</h3>
              <div v-if="order.shipping_address">
                <p class="capitalize my-1">{{ order.shipping_address.name }}</p>
                <p class="capitalize my-1">{{ order.shipping_address.company }}</p>
                <p class="capitalize my-1">{{ order.shipping_address.street }}</p>
                <p class="capitalize my-1">{{ order.shipping_address.city }}, {{ order.shipping_address.province }}</p>
                <p class="capitalize my-1">{{ order.shipping_address.country }} {{ order.shipping_address.zip }}</p>
                <p class="capitalize my-1">{{ order.shipping_address.phone }}</p>
              </div>
              <div v-else>
                <p class="capitalize my-1">|| 'OrderDetailsCarousel.no_address_supplied' ||</p>
              </div>
            </div>
          </div>
          <div v-if="order.attributes" class="order-notes p-4 text-green-friday-grey text-sm sm:text-base">
            <h3 class="text-black-2 font-bold">|| 'OrderDetailsCarousel.order_notes' ||</h3>
            <ul class="list-none p-0">
              <li v-if="order.attributes.length == 0"
                class="my-1">
                || 'OrderDetailsCarousel.no_notes_supplied' ||
              </li>
              <li v-for="(attribute, index) in order.attributes" :key="'attribute-'+index"
                :index="index"
                class="my-1">
                <strong>{{ attribute.label }}</strong>: {{ attribute.value }}
              </li>
            </ul>
          </div>
          <div class="absolute bottom-0 right-0 m-4 text-black-2 font-bold"><a class="hover:text-green-thrive" :href="order.order_customer_url">|| 'OrderDetailsCarousel.print' ||</a></div>
        </div>
      </slide>
    </carousel>

    <div class="order-history">
      <h2 class="bg-off-white font-extrabold text-black-2 text-center text-lg py-4 tracking-normal">|| 'OrderDetailsCarousel.order_history' ||</h2>
      <table class="table-fixed w-full text-sm sm:text-base">
        <thead class="bg-off-white border-b-1 border-green-friday-grey-2 font-extrabold">
          <tr>
            <th class="w-2/3 px-4 py-2 text-left">|| 'OrderDetailsCarousel.date' ||</th>
            <th class="w-1/6 px-0 py-2 text-center">|| 'OrderDetailsCarousel.order' ||</th>
            <th class="w-1/6 pr-4 py-2 text-right">|| 'OrderDetailsCarousel.total' ||</th>
          </tr>
        </thead>
        <tbody class="text-green-friday-grey">
          <tr v-for="(order, index) in orders" :key="'order-list-'+index"
            :index="index"
            class="border-b-1">
            <td class="font-bold px-4 py-2 text-black-2 text-left">
              <span
                class="underline cursor-pointer"
                @click="goToPage(index)">
                {{ order.created_at }}
              </span>
            </td>
            <td class="px-0 py-2 text-center">{{ order.name }}</td>
            <td class="pr-4 py-2 text-right">{{ order.total_price }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';

export default {
  name: 'order-details-carousel',

  components: {
    Carousel,
    Slide
  },

  data () {
    return {
      arrowSVG: '<svg xmlns="http://www.w3.org/2000/svg" width="21.911" height="12.911" viewBox="0 0 21.911 12.911"><g transform="translate(-1060.109 -1185.375)"><g transform="translate(1062.046 1198.286) rotate(-135)" stroke="#000" stroke-width="1"><rect width="2.739" height="15.52" rx="1.369" stroke="none"/><rect x="0.5" y="0.5" width="1.739" height="14.52" rx="0.869" fill="none"/></g><g transform="translate(1069.109 1187.312) rotate(-45)" stroke="#000" stroke-width="1"><rect width="2.739" height="15.52" rx="1.369" stroke="none"/><rect x="0.5" y="0.5" width="1.739" height="14.52" rx="0.869" fill="none"/></g></g></svg>'
    };
  },

  props: {
    orders: {
      type: Array,
      required: true
    	},
    options: {
      type: Object
    }
  },

  methods: {
    previous () {
      this.$refs.carousel.handleNavigation('backward');
    },
    next () {
      this.$refs.carousel.handleNavigation();
    },
    goToPage (pageNumber) {
      this.$refs.carousel.goToPage(pageNumber);
      window.location = '#SelectMenu';
    }
  },
  mounted: function () {
    if (document.getElementById('VueCarousel-slide-0')) {
      document.getElementById('VueCarousel-slide-0').classList.add('VueCarousel-slide-active');
    }
  }
};
</script>

<style scoped>
  >>> .VueCarousel-inner {
    max-width: 100vw;
  }
  >>> .VueCarousel-navigation {
    position: absolute;
    top: 17px;
    width: 100%;
  }
  >>> .VueCarousel-navigation .VueCarousel-navigation-prev {
    left: calc(18px + 1rem);
    padding: 0 !important;
  }
  >>> .VueCarousel-navigation .VueCarousel-navigation-prev svg {
    transform: rotate(-90deg);
    height: 10px;
  }
  >>> .VueCarousel-navigation .VueCarousel-navigation-next {
    right: calc(18px + 1rem);
    padding: 0 !important;
  }
  >>> .VueCarousel-navigation .VueCarousel-navigation-next svg {
    transform: rotate(90deg);
    height: 10px;
  }
  >>> .VueCarousel-navigation-button:focus {
    outline: none;
  }
</style>
