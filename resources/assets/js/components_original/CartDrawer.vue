<template>
<div id="cart-drawer-2020">
  <div :v-show="drawerVisible == true" v-on-clickaway="overlayClick" id="vivo-cd-cart-drawer" class="transform top-0 right-0 bg-white fixed h-full overflow-auto ease-in-out transition-all duration-700 z-60000 "
    :class="drawerVisible == true ? 'translate-x-0' : 'translate-x-full'">
    <div class="vivo-drawer__header">
      <div class="vivo-drawer__close vivo-drawer-close"> <button @click.prevent="toggleVisibility" type="button" class="vivo-icon-close"> <svg xmlns="http://www.w3.org/2000/svg" width="15.552" height="15.552" viewBox="0 0 15.552 15.552">
            <g id="Group_4971" data-name="Group 4971" transform="translate(-21.123 -32.627)">
              <line id="Line_456" data-name="Line 456" x2="20.492" transform="translate(21.653 33.158) rotate(45)" fill="none" stroke="#000000" stroke-width="2.5"></line>
              <line id="Line_1183" data-name="Line 1183" x2="20.492" transform="translate(36.144 33.157) rotate(135)" fill="none" stroke="#000000" stroke-width="2.5"></line>
            </g>
          </svg> </button> </div>
    </div>
    <div id="vivo-cd-cart-container">
      <div v-if="cartEmpty" class="vivo-empty-cart">
        <div class="vivo-empty-cart-message">
          <div>|| 'CartDrawer.empty_message' ||</div>
        </div>
      </div>
      <template v-else>
        <div v-if="shippingBarActive == true" class="free-shipping-message vivo-progress-bar-container" :class="shippingBarClass">
          <div class="special-offer-message" v-html="shippingBarHeading"></div>
          <div class="sellify-shipping-progress">
            <div class="vivo-locked-offer-progress-bar">
              <div class="vivo-locked-offer-progress-made" :style="shippingBarPercentage"></div>
              <span class="sellify-progress-indicator">{{ shippingBarBeginningText }}</span>
              <span class="sellify-progress-indicator" v-html="shippingBarEndText"></span>
            </div>
          </div>
        </div>
        <form action="/checkout" method="post" novalidate="" class="vivocart" id="vivo-checkout-form">
          <div class="vivocart__inner">
            <div class="vivocart__headings">
              <h3>|| 'CartDrawer.cart_title' ||</h3>
              <div class="vivocart__headings__inner">
                <p class="vivo__headings__product">|| 'CartDrawer.product_title' ||</p>
                <p class="vivo__headings__qty">|| 'CartDrawer.quantity_title' ||</p>
              </div>
            </div>

            <transition-group name="fade">
            <div v-for="(lineItem, lineItemIndex) in getCartItems" :key="lineItem.key" class="vivocart__product">
              <div class="vivocart__row" data-line="1">
                <div class="vivo-grid">
                  <div class="vivo-grid__item"> <a :href="getUrl(lineItem)" class="vivocart__product-image"><img :src="lineItem.image"
                        alt=""></a> </div>
                  <div class="vivo-grid__item">
                    <div class="vivo-quantity-grid">
                      <div>
                        <p> <a :href="getUrl(lineItem)" class="vivocart__product-name">{{ getProductTitle(lineItem.product_title) }}</a>
                          <span class="vivocart__product-meta">{{ getProductTagline(lineItem.title) }}</span>
                          <span v-if="isSubscription(lineItemIndex)" class="vivocart__product-meta" data-key="shipping_interval_frequency">{{getSubscriptionFrequency(lineItemIndex)}}</span>
                          <span v-else-if="isBundle(lineItemIndex) && hasDiscount()" class="vivocart-item__discount" data-key="bundle_builder" v-html="getBundleName(lineItemIndex)"></span>
                        </p>
                        <div class="grid--full display-table">
                          <div v-if="(!isBundle(lineItemIndex) || !hasDiscount()) && !(hideMultiDiscount || lineItem.handle.indexOf('green-friday') >= 0)" class="grid__item" v-html="discountText(lineItemIndex)"></div>
                        </div>
                        <div class="vivo-price-container">
                          <template v-if="lineItem.line_level_total_discount > 0">
                            <small class="vivocart-item__price-strikethrough has-discount">
                              <span class="money original notranslate">{{hasSaving(lineItem.id) ? moneyWithCompareAtPrice(lineItem.id, lineItem.quantity) : money(lineItem.original_line_price)}}</span>
                            </small>
                            <span class="money final notranslate">{{money(lineItem.final_line_price)}}</span>
                          </template>

                          <template v-else-if="hasSaving(lineItem.id)">
                            <small class="vivocart-item__price-strikethrough has-saving">
                              <span class="money original notranslate">{{moneyWithCompareAtPrice(lineItem.id, lineItem.quantity)}}</span>
                            </small>
                            <span class="money final notranslate">{{money(lineItem.final_line_price)}}</span>
                          </template>

                          <template v-else>
                            <span class="money notranslate">{{money(lineItem.final_line_price)}}</span>
                          </template>
                        </div>
                      </div>
                      <div class="vivo-quantity-container">
                        <div class="vivocart__qty">
                          <button @click.prevent="downQuantity(lineItem.key, lineItem.quantity)" type="button" class="vivocart__qty-adjust vivocart__qty--minus icon-fallback-text">
                            <span class="icon icon-minus" aria-hidden="true"></span>
                            <span class="">−</span>
                          </button>
                            <input @keydown.enter.prevent="setQuantity(lineItem.key, $event)" type="text" name="updates[]" class="vivocart__qty-num" :value="lineItem.quantity" min="0" :data-id="lineItem.id" aria-label="quantity" pattern="[0-9]*" readonly />
                            <button @click.prevent="upQuantity(lineItem.key, lineItem.quantity)" type="button"
                            class="vivocart__qty-adjust vivocart__qty--plus icon-fallback-text" :data-id="lineItem.id">
                            <span class="icon icon-plus" aria-hidden="true"> </span> <span class="">+</span> </button>
                            <div>
                                <a @click.prevent="removeLineItem(lineItem.key);" data-line="1" class="vivo-remove">|| 'CartDrawer.remove_button' ||</a>
                            </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </transition-group>
          </div>
        </form>
      </template>
      <div id="vivo-cd-upsells-container" class="vivo-items-container">
        <div class="vivo__upsells__headings">
          <div class="vivo__upsells__headings__top">
            <div class="vivo__upsells__headings__left">
              <h2>|| 'CartDrawer.upsells_title' ||</h2>
              <p>|| 'CartDrawer.upsells_subtitle' ||</p>
            </div>
            <div class="vivo__upsells__headings__right"> <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 59.8 33.1" style="enable-background:new 0 0 59.8 33.1;">
                <path style="fill:#FAFAFA;"
                  d="M58.2,1.6c-0.9-0.9-2.3-0.9-3.2,0L29.9,26.7L4.8,1.6c-0.9-0.9-2.3-0.9-3.2,0c-0.9,0.9-0.9,2.3,0,3.2 l26.5,26.5c0.1,0.2,0.2,0.3,0.4,0.5c0.4,0.3,0.9,0.5,1.4,0.5c0.3,0,0.7-0.1,1-0.3c0.1,0,0.1-0.1,0.2-0.1c0,0,0.1,0,0.1-0.1 c0.1,0,0.1-0.1,0.2-0.1c0,0,0.1-0.1,0.1-0.1c0,0,0,0,0,0L58.2,4.8C59.1,3.9,59.1,2.5,58.2,1.6z">
                </path>
              </svg> </div>
          </div>
        </div>
        <ul>
          <transition-group name="fade">
            <li v-for="upsellProduct in getUpsellProducts" v-if="upsellProduct.available" :key="upsellProduct.id" :data-product-id="upsellProduct.id" :data-handle="upsellProduct.handle">
              <form @submit.prevent="addProductToCart" action="/cart/add" method="post">
                <a :href="upsellProduct.url" class="upsell-image">
                  <img :src="upsellProduct.featured_image" :alt="upsellProduct.title">
                </a>
                <div>
                  <div class="vivo-upsell-info">
                    <div>
                      <a :href="upsellProduct.url" class="upsell-title">{{ getProductTitle(upsellProduct.title) }}</a>
                      <select @change="upsellVariantChanged" name="id" :style="hideVariants(upsellProduct)"> <!-- class="is-hidden"-->
                        <option v-for="(variant, variantIndex) in upsellProduct.variants" :key="variant.id" :value="variant.id" :data-price="variant.price" :data-compare-at-price="variant.compare_at_price">{{ variant.title }}</option>
                      </select>
                      <div class="vivo-price-container">
                        <template v-if="upsellProduct.compare_at_price > upsellProduct.price">
                          <small class="vivocart-item__price-strikethrough">
                            <span class="money original notranslate">{{money(upsellProduct.compare_at_price_max)}}</span>
                          </small>
                          <span class="money final notranslate">{{money(upsellProduct.price)}}</span>
                        </template>

                        <template v-else>
                          <span class="money notranslate">{{money(upsellProduct.price)}}</span>
                        </template>
                      </div>
                    </div>
                    <div class="vivo-quantity-container">
                      <button type="submit" class="upsell-submit">|| 'CartDrawer.upsells_add_button' ||</button>
                      <div class="vivocart__qty" style="display:none;">

                        <button type="button" class="vivocart__qty-adjust vivocart__qty--minus icon-fallback-text">
                          <span class="icon icon-minus" aria-hidden="true"> </span>
                          <span class="">âˆ’</span>
                        </button>
                        <input type="text" name="quantity" class="vivocart__qty-num" value="1" min="1" aria-label="quantity" pattern="[0-9]*">
                        <button type="button" class="vivocart__qty-adjust vivocart__qty--plus icon-fallback-text">
                            <span
                                class="icon icon-plus" aria-hidden="true">
                            </span>
                            <span class="">+</span>
                          </button>
                        </div>
                    </div>
                  </div>
                </div>
                <input type="hidden" name="properties[__vivo]" value="Upsells" />
              </form>
            </li>
          </transition-group>
        </ul>
      </div>
      <div class="vivocart__sticky__footer">
        <div class="vivocart__sticky__footer__info">
          <div class="special-instructions">
            <label for="CartSpecialInstructions">|| 'CartDrawer.delivery_note_title' ||</label>
            <textarea v-model="cartNote" name="note" class="input-full" id="CartSpecialInstructions" form="vivo-checkout-form"></textarea>
          </div>
          <div class="vivo-totals">
            <p> || 'CartDrawer.subtotal_title' || <span class="money notranslate">{{money(this.cart.original_total_price)}}</span> <br>
              <span v-if="hasDiscount()" class="m-t-green vivocart__sticky__footer__info__savings">|| 'CartDrawer.discount_title' ||
              </span>
            </p>
            <p class="text-lg">|| 'CartDrawer.total_title' || <span class="money notranslate">{{money(this.cart.total_price)}}</span></p>
          </div>
        </div>
        <div class="vivocart__sticky__footer__btns">
          <button class="btn--secondary btn--full cs" onclick="window.location='/collections/the-vivo-range';"> || 'CartDrawer.continue_button' || </button>
          <button type="submit"
            class="btn--secondary btn--full cart__checkout" name="checkout" form="vivo-checkout-form" @click.prevent="goCheckout()"> || 'CartDrawer.checkout_button' || </button>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import * as cartDriver from '@shopify/theme-cart';
import {
  mixin as clickaway
} from 'vue-clickaway';

export default {
  mixins: [clickaway],

  props: {
    'domain': {
      type: String,
      required: true,
      default: ''
    },
    'locale': {
      type: String,
      required: true,
      default: 'en-GB'
    },
    'currency': {
      type: String,
      required: true,
      default: 'GBP'
    },
    'hideMultiDiscount': {
      type: Boolean,
      default: false
    },
    'shippingBarActive': {
      type: Boolean,
      required: true,
      default: true
    },
    'shippingBarRegion': {
      type: String  ,
      required: true,
      default: 'UK'
    },
    'customerId': {
      type: String,
      required: false,
      default: ''
    },
    'customerEmail': {
      type: String,
      required: false,
      default: ''
    },
    'cartDrawerVisible': {
      required: true,
      default: false
    },
    'cartVariants':{
      type: Object,
      required: true
    },
    'upgradeCollection': {
      type: Array,
      required: true,
      default: () => {
        return [];
      }
    },
    'shippingBarTarget': {
      type: Number,
      required: false,
      default: 6000
    },
    'shippingBarSubscriptionsFree': {
      type: Boolean,
      required: false,
      default: false
    },
    'shippingBarLeftText': {
      type: String,
      required: false,
      default: 'Â£0'
    },
    'shippingBarRightText': {
      type: String,
      required: false,
      default: 'Spend Â£60<br>for Free<br>Delivery!'
    }
  },

  data() {
    return {
      cart: {},
      drawerVisible: false,
      shippingBarClass: 'is-error',
      shippingBarPercentage: 'width: 0%;',
      shippingBarHeading: '',
      shippingBarBeginningText: this.shippingBarLeftText,
      shippingBarEndText: this.shippingBarRightText,
      shippingBarTargetNumber: Number(this.shippingBarTarget), // in cents.
      handlesInCart: [],
      cartNote: ''
    };
  },


  async created() {
    var vm = this;
    this.drawerVisible = this.cartDrawerVisible;
    setTimeout(async () => {
      await this.refreshCartData();
    }, 300);

    cartDriver.getNote().then(note => {
      vm.cartNote = note;
    });

    EventBus.$on('cart-drawer-click', () => {
      this.refreshCartData();
    });
  },

  computed: {
    getCartItems() {
      return this.cart.items;
    },

    cartEmpty() {
      return this.cart.item_count == 0;
    },

    getUpsellProducts() {
      let upsellProducts = _.filter(this.upgradeCollection, (obj) => {
        let toLowerCase = String.prototype.toLowerCase.call.bind(String.prototype.toLowerCase);
        var dns = false;
        let skus = _.mapValues(obj.variants, 'sku');
        skus = _.map(skus, toLowerCase);
        let tagsLowerCase = _.map(obj.tags, toLowerCase);
        _.forEach(skus, (sku) => {
          if (tagsLowerCase.includes('dns-' + sku)) {
            dns = true;
          }
        });
        if(dns === true) {
          return false;
        }
        return !this.handlesInCart.includes(obj.handle);
      });
      return upsellProducts;
    }
  },

  // events to implement: product-added-to-cart

  methods: {
    async refreshCartData() {
      var vm = this;
      setTimeout(async () => {
        cartDriver.getState().then((state) => {
          vm.cart = state;
          vm.calculateShippingBarPercentage();
          vm.calculateLineItemHandles();
          EventBus.$emit('cart-updated', vm.cart);
        });
      }, 300);
    },

    async calculateLineItemHandles() {
      this.handlesInCart = _.map(this.cart.items, 'handle');
    },

    async toggleVisibility() {
      this.drawerVisible = !this.drawerVisible;
      this.visibleUpdated();
    },

    async open() {
      this.drawerVisible = true;
      this.visibleUpdated();
    },

    async close() {
      this.drawerVisible = false;
      this.visibleUpdated();
    },

    async overlayClick(e) {
      if (e.target.classList.contains('vivo-drawer-open')) {
        this.drawerVisible = false; // Force close on overlay click.
        this.visibleUpdated();
      }
    },

    async visibleUpdated() {
      if (this.drawerVisible !== this.cartDrawerVisible) {
        this.$emit('drawer-visible-updated', this.drawerVisible);
      }
    },

    async removeLineItem(id) {
      var vm = this;
      cartDriver.removeItem(id).then(async (state) => {
        await vm.refreshCartData();
      });
    },

    async upQuantity(key, currentQuantity) {
      var vm = this;
      cartDriver.updateItem(key, { quantity: currentQuantity+1 }).then(async(state) => {
        await vm.refreshCartData();
      });
    },

    async downQuantity(key, currentQuantity) {
      var vm = this;
      cartDriver.updateItem(key, { quantity: currentQuantity-1 }).then(async(state) => {
        await vm.refreshCartData();
      });
    },

    // deprecated - UX is better with it being a readonly input and only allowing - + actions to mutate quantity.
    async setQuantity(key, event) {
      var vm = this;
      var newQuantity = event.target.value;
      if(typeof(newQuantity) == 'number') {
        cartDriver.updateItem(key, { quantity: newQuantity }).then(async(state) => {
          await vm.refreshCartData();
        });
      }
    },

    isSubscription(id) {
      if (this.cart.items[id]?.properties?.subscription_id) { return true } else { return false }
    },

    getSubscriptionFrequency(id) {
      return `${this.cart.items[id].properties.shipping_interval_frequency} || 'CartDrawer.subscription_frequency_unit' ||`;
    },

    getUrl(lineItem) {
      var url = lineItem.url;
      if(lineItem.properties?.original_handle) {
        url = url.replace("/"+lineItem.handle,"/"+lineItem.properties.original_handle)
      }
      return url;
    },

    isBundle(id) {
      try {
        const hasProp = Object.prototype.hasOwnProperty.call(this.cart.items[id].properties, 'Bundle');
        return hasProp;
      } catch(e) {
        return false;
      }
    },

    getBundleName(id) {
      try {
         return `|| 'CartDrawer.get_bundle_name_1' || ${this.cart.items[id].properties.Bundle} || 'CartDrawer.get_bundle_name_2' ||`;
      } catch(e) {
        return false;
      }
    },

    discountText(id) {
      let sku = this.cart.items[id].sku;
      let properties = this.cart.items[id].properties;
      let quantity = this.cart.items[id].quantity;
      var productQty = 0;
      this.cart.items.filter(x => x.product_id===this.cart.items[id].product_id).forEach(x => {
        productQty+=x.quantity;
      })
      if(typeof(sku) === 'string') {
          if(sku.includes('MEN') || sku.includes('WMN') || sku.includes('GIFTCARD') || sku.includes('VCOCON-L') || sku.includes('VSCOOP') || sku.includes('AGRYHD') || sku.includes('VSHAKER'))  {
              return '';
          }
      }

      if(typeof(properties) == 'object' && properties !== null && typeof properties.subscription_id === 'string') {
        return '';
      }

      if(productQty === 1) {
         return "<small class=\"vivocart-item__discount\">|| 'CartDrawer.5_percent_discount_text' ||</small><br>";
      } else if (productQty === 2) {
         return "<small class=\"vivocart-item__discount\">|| 'CartDrawer.10_percent_discount_text' ||</small><br>";
      } else if (productQty >= 3) {
         return "<small class=\"vivocart-item__discount\">|| 'CartDrawer.best_discount_text' ||</small><br>";
      }
    },

    hasDiscount() {
      return typeof(this.cart.total_discount) == 'number' && this.cart.total_discount > 0;
    },

    hasSaving(id) {
      return this.cartVariants[id]?.compare_at_price > this.cartVariants[id]?.price;
    },

    money(val) {
      return new Intl.NumberFormat(this.locale, { style: 'currency', currency: this.currency }).format(val / 100);
    },

    moneyWithCompareAtPrice(id, qty = 1) {
      return new Intl.NumberFormat(this.locale, { style: 'currency', currency: this.currency }).format((this.cartVariants[id].compare_at_price * qty) / 100);
    },

    async goCheckout() {
      if(this.cart.items.length > 0) {
        // Check for bundles
        this.searchForBundleLineItems();
        // Cart delivery instructions
        var vm = this;
        cartDriver.updateNote(this.cartNote).then(async(state) => {
          // ReCharge || Shopify?
          let result = await vm.searchForSubscriptionLineItem();
          if(typeof(result) == 'undefined') {
            await vm.dispatchShopify();
          } else {
            await vm.dispatchReCharge();
          }
        });
      }
    },

    async searchForBundleLineItems() {
      _.forEach(this.cart.items, function(item) {
        if (item.properties && item.properties.Bundle) {
          cartDriver.updateAttributes({ [item.properties.Bundle]: 'Bundle' });
        }
      });
    },

    async searchForSubscriptionLineItem() {
      return _.find(this.cart.items, (o) => {
        return o.properties && typeof(o.properties.subscription_id) == 'string';
      });
    },

    async dispatchShopify() {
      document.getElementById('vivo-checkout-form').submit();
    },

    async getUTMAttributes() {
      // Retrieve UTMAttributes from Shopify cookie
      var shopifyCookieRegEx = /^_shopify_sa_p/;
      var utmRegEx = /^utm_/;
      var timestampRegEx = /^_shopify_sa_t/;
      var utmParams = {};
      var shopifyCookie = "";
      var timestamp = "";
      document.cookie.split(";")
        .map(function(s) {
          return s.trim();
        })
        .forEach(function(s) {
          if (shopifyCookieRegEx.test(s)) {
            shopifyCookie = s;
          }
          if (timestampRegEx.test(s)) {
            timestamp = decodeURIComponent(s.split("=")[1]);
          }
          return;
        });
      var utmValuesFromCookie = shopifyCookie.split("=")[1];
      decodeURIComponent(utmValuesFromCookie)
        .split("&")
        .forEach(function(s) {
          var key = s.split("=")[0];
          var val = s.split("=")[1];
          if (utmRegEx.test(key)) {
            utmParams[key] = val;
            return utmParams[key];
          }
          return;
        });
      if (!Object.keys(utmParams).length) {
        return undefined;
      }
      utmParams.utm_timestamp = timestamp;
      utmParams.utm_data_source = "shopify_cookie";
      return utmParams;
    },

    async createReChargeAttributeObject() {
      // Find and return cart attributes
      var attributeRegEx = /attributes\[(.*?)\]/,
        attributeNameRegex = /\[(.*?)\]/,
        attributeSelectors = [
          '[name*="attributes"]',
        ],
        attributes = document.querySelectorAll(attributeSelectors.join(',')),
        attributesToUpdate = Array.prototype.slice.apply(attributes),
        attributesFiltered = await this.filterValues(attributesToUpdate);
      var attributeData = {},
        utmAttributes = await this.getUTMAttributes(),
        attributesFromUrl = new URLSearchParams(decodeURIComponent(window.location.search));
      for (let pair of attributesFromUrl) {
        if (attributeRegEx.test(pair[0])) {
          var attributeName = pair[0]
            .match(attributeNameRegex)[0];
          attributeName = attributeName.substring(1, attributeName.length - 1);
          attributeData[attributeName] = attributesFromUrl.get(pair[0]);
        }
      }
      attributesFiltered.forEach(function(attribute) {
        var name = attribute.getAttribute('name'),
          value = attribute.value;
        if (attributeRegEx.test(name)) {
          var extractedName = name.match(attributeNameRegex)[0];
          extractedName = extractedName.substring(1, extractedName.length - 1);
          attributeData[extractedName] = value;
          return attributeData[extractedName];
        }
        attributeData[name] = value;
        return attributeData[name];
      });
      if (utmAttributes) {
        Object.keys(utmAttributes).forEach(function(key) {
          attributeData[key] = utmAttributes[key];
        });
      }
      if (!Object.keys(attributeData).length) return {};
      return {
        attributes: Object.assign({}, attributeData)
      };
    },

    async filterVisible(elems) {
      // Return visible elements
      return elems.filter(function(elem) {
        return !!(elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length);
      });
    },

    async filterValues(elems) {
      // Return inputs with valid values
      return elems.filter(function(elem) {
        var isActiveCheckbox = elem.getAttribute('type') === 'radio' && elem.checked,
          isActiveRadio = elem.getAttribute('type') === 'checkbox' && elem.checked,
          isInput = elem.getAttribute('type') !== 'checkbox' && elem.getAttribute('type') !== 'radio';
        return !!elem.value && (isInput || isActiveCheckbox || isActiveRadio);
      });
    },

    async dispatchReChargeGenerateUrl() {
      let token = await this.getShopifyCartTokenFromCookie();
      let gaLinker = '';
      try {
        gaLinker = window.ga.getAll()[0].get('linkerParam');
      } catch(err) {
      }
      let customerParam = '';
      if(this.customerId.length > 0 && this.customerEmail.length > 0) {
        customerParam = `customerId=${this.customerId}&customerEmail=${this.customerEmail}`;
      }
      const checkoutUrl = `https://checkout.rechargeapps.com/r/checkout?myshopify_domain=${this.domain}&cart_token=${token}&${gaLinker}&${customerParam}`;
      return checkoutUrl;
    },

    async dispatchReCharge() {
      cartDriver.getNote().then(async(note) => {
        var noteObject = {note};
        var attributeObject = await this.createReChargeAttributeObject();
        await this.refreshCartData();
        var cartData = {
          token: this.cart.token,
          line_items: this.cart.items,
          terms_and_conditions: 'off'
        };
        [noteObject, attributeObject, cartData].forEach(function(obj) {
                Object.assign(cartData, obj);
        });
        if(note === null || typeof(note) == 'undefined' || note === '') {
          delete cartData.note;
        }
        const checkoutUrl = await this.dispatchReChargeGenerateUrl();
        let form = await this.buildForm(cartData, checkoutUrl);
        document.body.appendChild(form);
        form.submit();
      });
    },

    async buildInputs(form, obj) {
        // Build input fields for key, value pairs
        Object.keys(obj).forEach(function(key) {
            var input = document.createElement('input');
            input.setAttribute('type', 'hidden');
            input.setAttribute('name', key);
            input.setAttribute('value', typeof(obj[key]) === 'object' ? JSON.stringify(obj[key]) : obj[key]);
            form.appendChild(input);
        });
    },

    async buildForm(data, url) {
        // Build a virtual form
        var form = document.createElement('form');
        form.setAttribute('method', 'post');
        form.setAttribute('action', url);
        form.setAttribute('id', 'rc_form');
        form.style.display = 'none';
        await this.buildInputs(form, data);
        return form;
    },

    async getShopifyCartTokenFromCookie() {
      return document.cookie.match('(^|; )cart=([^;]*)')[2];
    },

    async calculateShippingBarPercentage() {
      // Do they have a subscription product?
      if(this.cart.items.length > 0) {
        // ReCharge || Shopify?
        let result = await this.searchForSubscriptionLineItem();
        if(!this.shippingBarSubscriptionsFree || typeof(result) == 'undefined') {
          let percentage = await this.calculateShippingPercentage();
          if(percentage == 100) {
            this.shippingBarHeading = `|| 'CartDrawer.free_shipping_text_success' ||`;
            this.shippingBarPercentage = 'width: 100%';
            this.shippingBarClass = 'is-success';
          } else {
            let totalLeft = this.shippingBarTargetNumber - this.cart.total_price;
            this.shippingBarHeading = `|| 'CartDrawer.free_shipping_text_almost_1' || <span class="money notranslate">${this.money(totalLeft)}</span> || 'CartDrawer.free_shipping_text_almost_2' ||`;
            this.shippingBarPercentage = `width: ${percentage}%`;
            this.shippingBarClass = 'is-error';
          }
        } else {
          this.shippingBarHeading = '|| 'CartDrawer.free_shipping_text_subscriptions_success' ||';
          this.shippingBarPercentage = 'width: 100%';
          this.shippingBarClass = 'is-success';
        }
      }
    },

    async calculateShippingPercentage() {
      if(this.cart.total_price >= this.shippingBarTargetNumber) {
        return 100;
      } else {
        let percentOfShipping = ((this.cart.total_price / this.shippingBarTargetNumber) * 100).toFixed(2);
        return percentOfShipping;
      }
    },

    async addProductToCart(event) {
        var vm = this;

        const productForm = event.target;
        const variantId = Number(productForm.querySelector('select[name=id]').value);
        const variantQuantity = 1; // All upsells are 1 for now..
        cartDriver.addItem(variantId, { quantity: variantQuantity }).then(async (item) => {
          await vm.refreshCartData();
        });
    },

    upsellVariantChanged(event) {
      var vm = this;
      const selectBox = event.target;
      const variantId = Number(selectBox.value);
      const variantPrice = Number(jQuery('option:selected', selectBox).attr('data-price'));
      const variantCompareAtPrice = Number(jQuery('option:selected', selectBox).attr('data-compare-at-price'));
      if(jQuery && variantId && variantPrice) {
        const priceContainer = jQuery('.vivo-price-container span.money.final', jQuery(selectBox).closest('form')).length ? jQuery('.vivo-price-container span.money.final', jQuery(selectBox).closest('form')) : jQuery('.vivo-price-container span.money', jQuery(selectBox).closest('form'));
        const originalContainer = jQuery('.vivo-price-container span.money.original', jQuery(selectBox).closest('form'));
        if(priceContainer.length) {
          jQuery(priceContainer).text(this.money(variantPrice));
        }
        if(originalContainer.length) {
          jQuery(originalContainer).text(this.money(variantCompareAtPrice));
        }
      }
    },

    hideVariants(upsellProduct) {
      if(upsellProduct.variants.length == 1) {
        return 'display: none;';
      } else {
        return '';
      }
    },

    async updateCartNote(event) {
      const note = event.target.value || '';
      cartDriver.updateNote(note).then((state) => {
      });
    },

    getProductTitle(title) {
      return title.replace('(Green Friday)', '').trim();
    },

    getProductTagline(tagline) {
      return tagline.replace('(Green Friday)', '').split('-')[1].trim();
    }
  },

  watch: {
    cartDrawerVisible(newValue) {
      if (newValue == true) {
        this.open();
      } else {
        this.close();
      }
    },

    drawerVisible(newValue) {
      document.body.classList.toggle('vivo-drawer-open', newValue);
    },
  },
};
</script>

<style type="text/css">
/* has to be global. */
#PageContainer,
.page-container,
body.vivo-drawer-open:not(.vivo-drawer-no-transform)>:not(#vivo-cd-cart-drawer),
body:not(.vivo-drawer-no-transform)>:not(#vivo-cd-cart-drawer) {
  transition: all .5s
}

body.vivo-drawer-open:before {
  content: "";
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #000;
  opacity: .6;
  position: fixed;
  z-index: 99999999;
  visibility: visible
}

.vivo-drawer-open {
  width: 100% !important;
  overflow: hidden
}

body.vivo-drawer-open> :not(#vivo-cd-cart-drawer) {
  transform: none;
}

.vivocart-item__discount {
  color: #4AB857;
  font-weight: 700;
  font-size: 14px;
}
#vivo-cd-cart-drawer {
  font-family: inherit;
  position: fixed;
  top: 0;
  bottom: 0;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  color: var(--vivo-text-color);
  display: block;
  z-index: 2147483647;
  max-width: 100%
}

#vivo-cd-cart-drawer,
#vivo-cd-cart-drawer * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  border: 0;
  outline: none;
  line-height: 1.6
}

#vivo-cd-cart-drawer * {
  min-height: auto;
  min-width: auto;
  text-indent: 0
}

#vivo-cd-cart-drawer a,
#vivo-cd-cart-drawer a:focus,
#vivo-cd-cart-drawer a:hover {
  color: inherit;
  text-decoration: none
}

#vivo-cd-cart-drawer img {
  max-width: 100%;
  vertical-align: middle
}

#vivo-cd-cart-drawer button,
#vivo-cd-cart-drawer input:not([type=checkbox]):not([type=radio]),
#vivo-cd-cart-drawer select,
#vivo-cd-cart-drawer textarea {
  -webkit-appearance: none;
  border-radius: 0;
  box-shadow: none;
  line-height: 1.6;
  font-family: inherit
}

#vivo-cd-cart-drawer .special-instructions {
  display: var(--vivo-special-instructions-display, block)
}

#vivo-cd-cart-drawer button,
#vivo-cd-cart-drawer input,
#vivo-cd-cart-drawer label,
#vivo-cd-cart-drawer select {
  cursor: pointer
}

#vivo-cd-cart-drawer .vivo-progress-bar-container .special-offer-message:first-of-type:last-of-type {
  margin-bottom: 0
}

.is-hidden {
  display: none !important;
  visibility: hidden !important
}

#vivo-cd-cart-drawer.vivo-sticky-discount .vivo-discount-error {
  margin-top: -15px
}

#vivo-cd-cart-drawer .vivo-progress-bar-container.is-success .vivo-locked-offer-progress-bar .sellify-progress-indicator {
  color: #4AB857;
}

#vivo-cd-cart-drawer .vivo-progress-bar-container.is-error .vivo-locked-offer-progress-bar .sellify-progress-indicator {
  color: var(--vivo-shipping-notification-unqualified-text-color, #a40000)
}

#vivo-cd-cart-drawer .vivo-progress-bar-container .vivo-locked-offer-progress-bar {
  height: 10px;
  margin-bottom: 25px;
  background: #f2f2f2;
  position: relative
}

#vivo-cd-cart-drawer .vivo-progress-bar-container .vivo-locked-offer-progress-bar .sellify-progress-indicator {
  font-size: 12px;
  font-weight: 700;
  position: absolute;
  top: 100%
}

#vivo-cd-cart-drawer .vivo-progress-bar-container .vivo-locked-offer-progress-bar .sellify-progress-indicator:first-of-type {
  left: 0
}

#vivo-cd-cart-drawer .vivo-progress-bar-container .vivo-locked-offer-progress-bar .sellify-progress-indicator:first-of-type:before {
  margin: 0
}

#vivo-cd-cart-drawer .vivo-progress-bar-container .vivo-locked-offer-progress-bar .sellify-progress-indicator:nth-of-type(2) {
  left: 100%;
  transform: translateX(-50%)
}

#vivo-cd-cart-drawer .vivo-progress-bar-container .vivo-locked-offer-progress-bar .sellify-progress-indicator:nth-of-type(3) {
  left: 50%;
  transform: translateX(-50%)
}

#vivo-cd-cart-drawer .vivo-progress-bar-container .vivo-locked-offer-progress-bar .sellify-progress-indicator:nth-of-type(4) {
  left: 75%;
  transform: translateX(-50%)
}

#vivo-cd-cart-drawer .vivo-progress-bar-container .vivo-locked-offer-progress-bar .sellify-progress-indicator:nth-of-type(5) {
  right: 0
}

#vivo-cd-cart-drawer .vivo-progress-bar-container .vivo-locked-offer-progress-bar .sellify-progress-indicator:nth-of-type(5):before {
  margin-right: 0
}

#vivo-cd-cart-drawer .vivo-progress-bar-container .vivo-locked-offer-progress-bar .sellify-progress-indicator:before {
  display: block;
  height: 5px;
  width: 2px;
  background: #ccc;
  margin: 0 auto;
  content: ""
}

#vivo-cd-cart-drawer .vivo-progress-bar-container .vivo-locked-offer-progress-made {
  height: 100%;
  background: var(--vivo-button-background-color, #38bebc)
}

#vivo-cd-cart-drawer {
  z-index: 2147483647;
  line-height: 1.2;
}

#vivo-cd-upsells-container>ul {
  overflow: hidden;
}

#vivo-cd-cart-container .vivo-grid {
  overflow: hidden;
}

#vivo-cd-cart-container .vivo-grid {
  display: grid;
  grid-template-columns: 100px calc(100% - 75px);
  align-items: center;
  grid-gap: 0px;
}

@media only screen and (min-width:601px) {
  #vivo-cd-cart-drawer {
    width: 40%;
  }

  #vivo-cd-cart-container .vivo-grid {
    grid-template-columns: 120px calc(100% - 140px);
    grid-gap: 10px;
  }
}

#vivo-cd-cart-drawer {
  background-color: #FFF;
}

#vivo-cd-cart-drawer .vivo-items-container ul,
#vivo-cd-upsells-container ul {
  background-color: #FFF;
}

#vivo-cd-cart-drawer .vivo-drawer__header {
  display: flex;
  justify-content: flex-start;
}

#vivo-cd-cart-drawer .vivo-drawer-close {
  display: flex;
  height: 25px;
}

#vivo-cd-cart-drawer .vivo-icon-close {
  position: relative;
  opacity: 1;
  top: 6px;
  left: 6px;
  width: auto !important;
  height: auto !important;
}

#vivo-cd-cart-drawer .vivo-icon-close svg {
  opacity: 1;
  width: 16px;
  height: 16px;
}

#vivo-cd-cart-drawer .free-shipping-message {
  border-top: none;
  padding-top: 0px;
  font-size: 12px;
}

#vivo-cd-cart-drawer .free-shipping-message.is-error,
#vivo-cd-cart-drawer .free-shipping-message.is-success {
  font-size: 12px;
}

#vivo-checkout-form {
  font-family: proxima-nova, sans-serif;
}

#vivo-cd-cart-drawer .sellify-shipping-progress {
  border-bottom: none;
  padding-left: 45px;
  padding-right: 45px;
}

#vivo-cd-cart-drawer .sellify-shipping-progress .vivo-locked-offer-progress-bar {
  width: auto;
  margin-bottom: 40px;
}

#vivo-cd-cart-drawer .free-shipping-message {
  padding-bottom: 0;
}

#vivo-cd-cart-drawer .vivo-locked-offer-progress-bar,
#vivo-cd-cart-drawer .vivo-locked-offer-progress-made {
  border-radius: 20px;
}

#vivo-cd-cart-drawer .vivocart__headings {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 5px;
  padding-right: 10px;
  padding-left: 30px;
  border-bottom: 1px solid rgba(112, 112, 112, 0.16);
}

#vivo-cd-cart-drawer .vivocart__headings h3 {
  font-weight: 800;
  font-size: 1.5rem;
  text-align: center;
}

#vivo-cd-cart-drawer .vivocart__headings p {
  font-weight: 700;
  font-size: 0.9rem;
}

#vivo-cd-cart-drawer .vivocart__headings p.vivo__headings__product {
  padding-left: 4px;
}

#vivo-cd-cart-drawer .vivocart__headings p.vivo__headings__qty {
  padding-right: 22px;
}

#vivo-cd-cart-drawer .vivocart__headings__inner {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

#vivo-cd-cart-drawer .vivocart__product-meta {
  color: #707070;
  margin-top: 0;
  font-size: 12px;
  display: block;
}

#vivo-cd-cart-drawer a.vivo-remove {
  color: rgba(128, 128, 128, 0.88);
  margin-top: 2px;
  text-align: center;
  margin-left: 5px;
  font-weight: 600;
  font-size: 13px;
  cursor: pointer;
}

#vivo-cd-cart-drawer .vivo-items-container ul,
#vivo-cd-upsells-container ul {
  padding: 0 0;
}

#vivo-cd-cart-drawer .vivo-items-container li,
#vivo-cd-upsells-container li {
  padding: 20px 20px;
}

#vivo-cd-cart-drawer .vivo-items-container li form,
#vivo-cd-upsells-container li form {
  grid-template-columns: 100px calc(100% - 70px);
}

#vivo-cd-cart-drawer .vivo-items-container li form select,
#vivo-cd-upsells-container li form select {
  width: auto;
  min-width: 60px;
  max-width: 150px;
}

#vivo-cd-cart-drawer .vivocart-item__price-strikethrough {
  text-decoration: line-through;
  font-size: 11px;
}

#vivo-cd-cart-drawer .subtotal-grid {
  background: white;
  border-top: 1px solid rgba(112, 112, 112, 0.16);
  font-size: 12px;
  padding-left: 12px;
}

#vivo-cd-cart-drawer .subtotal-grid p,
.vivocart__footer>p {
  font-size: 12px;
}

#vivo-cd-cart-drawer .vivo-price-container {
  font-size: 13px;
}

#vivo-cd-cart-drawer #vivo-cd-upsells-container {
  background-color: #F5F5F5;
}

#vivo-cd-cart-drawer .vivo__upsells__headings {
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
}

#vivo-cd-cart-drawer .vivo__upsells__headings .vivo__upsells__headings__top {
  background-color: #888888;
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  justify-content: space-between;
}

#vivo-cd-cart-drawer .vivo__upsells__headings .vivo__upsells__headings__bottom {
  background-color: #888888;
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 15px;
}

#vivo-cd-cart-drawer .vivo__upsells__headings .vivo__upsells__headings__left {
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
}

#vivo-cd-cart-drawer .vivo__upsells__headings .vivo__upsells__headings__right {
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  justify-self: flex-end;
  height: 60px;
}

#vivo-cd-cart-drawer .vivo__upsells__headings .vivo__upsells__headings__right svg {
  width: 30px;
  margin-right: 30px;
}

#vivo-cd-cart-drawer #vivo-cd-upsells-container h2 {
  background-color: #888888;
  text-align: left;
  font-size: 18px;
  color: white;
  font-weight: 800;
  padding-top: 10px;
  padding-left: 0px;
  text-align: center;
  padding-bottom: 0px;
  margin-bottom: 0;
  border-bottom: none;
}

#vivo-cd-cart-drawer #vivo-cd-upsells-container p {
  padding-left: 30px;
  padding-top: 0;
  margin-top: 0;
  padding-bottom: 10px;
}

#vivo-cd-cart-drawer.vivo-item-info,
.vivo-upsell-info {
  grid-template-columns: calc(100% - 150px) 100px;
  grid-gap: 80px;
}

#vivo-cd-cart-drawer #vivo-cd-upsells-container p,
#vivo-cd-cart-drawer #vivo-cd-upsells-container p a {
  font-size: 13px;
  color: white;
}

#vivo-cd-cart-drawer .vivo-items-container ul li+li,
#vivo-cd-upsells-container ul li+li {
  border-top: 1px solid rgba(112, 112, 112, 0.6);
}

#vivo-cd-cart-drawer button.vivo-item-submit,
#vivo-cd-cart-drawer button.upsell-submit {
  color: white;
  background-color: #AFCD09;
  padding: 10px;
  text-transform: uppercase;
  font-size: 12px;
  padding-right: 15px;
  padding-left: 15px;
}

#vivo-cd-cart-drawer #vivo-cd-recommended-products-container .vivo-item-info,
.vivo-upsell-info {
  grid-template-columns: calc(100% - 150px) 100px;
  grid-gap: 60px;
}

#vivo-cd-cart-drawer #vivo-cd-recommended-products-container h2 {
  background-color: #888888;
  text-align: center;
  font-size: 18px;
  color: white;
  font-weight: 800;
  padding-top: 10px;
  padding-left: 0px;
  padding-bottom: 0px;
  margin-bottom: 0;
  border-bottom: none;
}

#vivo-cd-tiered-free-items-container li form {
  grid-template-columns: 100px calc(100% - 125px);
  grid-gap: 10px;
}

#vivo-cd-tiered-free-items-container h2 {
  text-align: center;
  padding-left: 0px;
  font-size: 18px;
  font-weight: 800;
  font-family: proxima-nova, sans-serif;
  padding-top: 30px;
  padding-bottom: 0;
  margin-bottom: 0;
  border-bottom: none;
}

#vivo-cd-tiered-free-items-container .vivo__upsell__free_headings p {
  text-align: center;
  color: rgba(0, 0, 0, 0.58);
  padding-left: 30px;
  margin-top: 0;
  margin-bottom: 0;
}

#vivo-cd-cart-drawer #vivo-cd-tiered-free-items-container .vivo-price-container {
  text-align: left;
}

#vivo-cd-tiered-free-items-container li {
  padding-top: 5px;
}

#vivo-cd-cart-container .special-instructions {
  padding-left: 30px;
  padding-right: 30px;
}

#vivo-cd-cart-container .special-instructions label {
  font-size: 13px;
}

#vivo-cd-cart-drawer .vivocart__sticky__footer {
  display: flex;
  flex-direction: column;
  position: -webkit-sticky;
  position: sticky;
  overflow: hidden;
  right: 0;
  bottom: 0;
  z-index: 9999999999999999999999;
  background-color: #F0F0F0;
}

#vivo-cd-cart-drawer .vivocart__sticky__footer__info {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 12px;
  padding-left: 12px;
  padding-right: 12px;
  font-weight: 700;
  margin-bottom: 10px;
}

#vivo-cd-cart-drawer .vivocart__sticky__footer__btns {
  display: flex;
  flex-direction: row;
  text-transform: uppercase;
}

#vivo-cd-cart-drawer .vivocart__sticky__footer__btns button {
  color: white;
  background-color: #AFCD09;
  font-size: 13px;
  width: 50%;
  height: 50px;
  text-transform: uppercase;
  font-size: 15px;
}

#vivo-cd-cart-drawer .vivocart__sticky__footer__btns button.cs {
  color: #6E6E6E;
  background-color: #CECECE;
}

#vivo-cd-cart-drawer textarea {
  border: 1px solid rgba(112, 112, 112, 0.6);
}

.vivo-quantity-grid>div {
  max-width: calc(100% - 110px);
}

#vivo-cd-cart-drawer .vivocart__qty {
  padding-right: 2.5rem;
}

#vivo-cd-upsells-container button.upsell-submit {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, .12), 0 2px 4px 0 rgba(0, 0, 0, .08);
  border-radius: 3px;
  margin-right: 25px;
}

@media only screen and (min-width:768px) {

  #vivo-cd-cart-drawer .vivo-items-container li form select,
  #vivo-cd-upsells-container li form select {
    max-width: none;
  }

  #vivo-cd-cart-drawer a.vivocart__product-name {
    font-size: 18px;
  }

  #vivo-cd-cart-drawer .vivocart-item__price-strikethrough {
    font-size: 13px;
  }

  #vivo-cd-cart-drawer button.vivo-item-submit,
  #vivo-cd-cart-drawer button.upsell-submit,
  #vivo-cd-cart-drawer .subtotal-grid p,
  .vivocart__footer>p,
  #vivo-cd-cart-drawer .subtotal-grid,
  #vivo-cd-cart-drawer .vivocart-item__discount {
    font-size: 14px;
  }

  #vivo-cd-cart-drawer .vivocart__sticky__footer__btns button,
  #vivo-cd-cart-container .special-instructions label,
  #vivo-cd-cart-drawer #vivo-cd-upsells-container p,
  #vivo-cd-cart-drawer #vivo-cd-upsells-container p a,
  #vivo-cd-cart-drawer .free-shipping-message.is-error,
  #vivo-cd-cart-drawer .free-shipping-message.is-success,
  #vivo-cd-cart-drawer .free-shipping-message {
    font-size: 15px;
  }

  #vivo-cd-cart-drawer .vivo-price-container,
  #vivo-cd-upsells-container .upsell-title {
    font-size: 18px;
  }

  #vivo-cd-tiered-free-items-container h2,
  #vivo-cd-cart-drawer #vivo-cd-recommended-products-container h2,
  #vivo-cd-cart-drawer #vivo-cd-upsells-container h2 {
    font-size: 20px;
  }

  #vivo-cd-cart-drawer .vivocart__headings p {
    font-size: 1rem;
  }

  #vivo-cd-cart-drawer .vivocart__headings h3 {
    font-size: 2rem;
    text-align: left;
  }

  #vivo-cd-cart-drawer a.vivo-remove {
    margin-left: 1px;
    font-size: 15px;
  }

  #vivo-cd-cart-drawer .vivocart__headings p.vivo__headings__qty {
    padding-right: 45px;
  }

  #vivo-cd-cart-drawer .vivo-items-container li form select,
  #vivo-cd-upsells-container li form select {
    min-width: 100px;
  }

  #vivo-cd-cart-drawer #vivo-cd-upsells-container h2 {
    background-color: #888888;
    text-align: left;
    font-size: 18px;
    color: white;
    font-weight: 800;
    padding-top: 10px;
    padding-left: 30px;
    padding-bottom: 0px;
    margin-bottom: 0;
    border-bottom: none;
  }

  #vivo-cd-cart-drawer #vivo-cd-recommended-products-container h2 {
    background-color: #888888;
    text-align: left;
    font-size: 18px;
    color: white;
    font-weight: 800;
    padding-top: 10px;
    padding-left: 30px;
    padding-bottom: 0px;
    margin-bottom: 0;
    border-bottom: none;
  }

  #vivo-cd-cart-drawer .vivo-items-container li form,
  #vivo-cd-upsells-container li form {
    grid-template-columns: 120px calc(100% - 140px);
    grid-gap: 10px;
  }

  #vivo-cd-tiered-free-items-container li form {
    grid-template-columns: 120px calc(100% - 180px);
    grid-gap: 10px;
  }

  #vivo-cd-tiered-free-items-container h2 {
    text-align: left;
    padding-left: 30px;
    font-size: 18px;
    font-weight: 800;
    font-family: proxima-nova, sans-serif;
    padding-top: 30px;
    padding-bottom: 0;
    margin-bottom: 0;
    border-bottom: none;
  }

  #vivo-cd-cart-drawer .vivocart__product-meta {
    font-size: 14px;
  }

  #vivo-cd-cart-drawer .vivocart__qty {
    padding-right: 1.5rem;
  }
}

@media only screen and (min-width:601px) {
  #vivo-cd-cart-drawer {
    width: 100%;
  }

  #vivo-cd-cart-container .vivo-grid {
    grid-template-columns: 120px calc(100% - 140px);
    grid-gap: 10px;
  }

  #vivo-cd-cart-drawer .vivo__upsells__headings .vivo__upsells__headings__right svg {
    margin-right: 50px;
  }

  #vivo-cd-upsells-container button.upsell-submit {
    margin-right: 45px;
  }
}

@media only screen and (min-width:768px) {
  #vivo-cd-upsells-container button.upsell-submit {
    margin-right: 0;
  }
}

@media only screen and (min-width:1024px) {
  #vivo-cd-cart-drawer {
    width: 60%;
  }

  #vivo-cd-cart-container .vivo-grid {
    grid-template-columns: 120px calc(100% - 140px);
    grid-gap: 10px;
  }

  #vivo-cd-cart-drawer .vivocart__headings p.vivo__headings__qty {
    padding-left: 53px;
  }

  #vivo-cd-cart-drawer .vivo__upsells__headings .vivo__upsells__headings__right svg {
    margin-right: 50px;
  }

  #vivo-cd-cart-drawer .vivo-icon-close {
    top: 6px;
    left: 7px;
  }
}

@media only screen and (min-width:1200px) {
  #vivo-cd-cart-drawer {
    width: 40%;
  }

  #vivo-cd-cart-container .vivo-grid {
    grid-template-columns: 120px calc(100% - 140px);
    grid-gap: 10px;
  }

  #vivo-cd-cart-drawer .vivo-items-container li form select,
  #vivo-cd-upsells-container li form select {
    min-width: 230px;
  }

  #vivo-cd-tiered-free-items-container .vivo__upsell__free_headings p {
    text-align: left;
  }

  #vivo-cd-cart-drawer .vivo-icon-close {
    top: 6px;
    left: 7px;
  }

  #vivo-cd-cart-drawer .vivo__upsells__headings .vivo__upsells__headings__right svg {
    margin-right: 50px;
  }
}

.m-t-green {
  color: #4AB857;
}

.m-t-bold {
  font-weight: 700;
}

#vivo-cd-cart-drawer .vivo-locked-offer-progress {
  font-size: 15px;
}

#vivo-cd-cart-drawer .vivo-locked-offer-progress-bar {
  height: 15px;
}

a.vivocart__product-name {
  font-size: 15px;
  font-weight: 800;
}

.vivo-quantity-grid {
  justify-content: space-between;
  display: flex;
  padding-right: 0.5rem;
}

#vivo-cd-cart-drawer input.vivocart__qty-num {
  width: 30px;
  padding-left: 10px;
  padding-right: 10px;
}

.vivocart__qty-adjust {
  padding: 10px;
  font-size: 20px;
  vertical-align: middle;
}

#vivo-cd-cart-drawer {}

#vivo-cd-cart-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 1;
}

#vivo-checkout-form {
  flex-grow: 1;
}

@media only screen and (min-width:1200px) {
  a.vivocart__product-name {
    font-size: 18px;
  }

  .vivocart__qty-adjust {
    padding: 10px;
    font-size: 25px;
    vertical-align: middle;
  }
}

.vivo-empty-cart-message {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
}

#vivo-cd-cart-drawer div.vivocart__product {
  margin-bottom: 2rem;
  border-bottom: 1px solid rgba(112, 112, 112, 0.16);
  margin-bottom: 1.0rem;
  margin-top: 1rem;
}

#vivo-cd-cart-drawer div.vivocart__product:last-child {
  margin-bottom: 0;
  border-bottom: 0;
}

#vivo-cd-cart-drawer div.vivo-quantity-grid {
  margin-bottom: 1rem;
  line-height: 1.2;
}

#vivo-cd-cart-drawer div.vivo-quantity-grid div p {
  line-height: 1.2;
}

#vivo-cd-cart-drawer a.vivocart__product-name {
  line-height: 1.2;
}

#vivo-cd-cart-drawer .vivo-price-container {
  font-weight: 700;
}

#vivo-cd-cart-drawer .vivocart__sticky__footer {
  background: #FFF;
}

#vivo-cd-cart-drawer .vivocart__sticky__footer__btns button {
  font-weight: 800;
}

#vivo-cd-cart-drawer .vivocart__sticky__footer__btns button.cs {
  background-color: #EBEBEB;
  color: #6E6E6E;
}

#vivo-cd-cart-drawer .vivocart__sticky__footer__info {
  display: flex;
  flex-direction: column;
  background-color: white;
}

#vivo-cd-cart-drawer .special-instructions {
  display: flex;
  flex-direction: column;
  padding-right: 10px;
  padding-left: 10px;
  margin-bottom: 1rem;
}

#vivo-cd-cart-drawer .special-instructions label {
  cursor: default;
  margin-bottom: 0.2rem;
  color: #1D1D1D;
}

#vivo-cd-cart-drawer .vivo-totals {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

#vivo-cd-upsells-container ul {
  background-color: #E6E6E6;
}

#vivo-cd-upsells-container ul li form {
  display: grid;
  align-items: center;
}

#vivo-cd-upsells-container .upsell-title {
  color: #1D1D1D;
  font-weight: 800;
  line-height: 1.1;
  display: block;
  margin-bottom: 5px;
}

#vivo-cd-upsells-container .vivo-upsell-info div {
  line-height: 1.1;
}

#vivo-cd-upsells-container .vivo-upsell-info {
  display: flex;
  justify-content: space-between;
  margin-left: 5px;
}

#vivo-cd-upsells-container .vivo-upsell-info .vivo-quantity-container button {
  font-weight: 700;
  color: #FFFFFF;
}

#vivo-cd-cart-drawer .vivo-items-container li,
#vivo-cd-upsells-container li {
  padding-left: 0;
}

#vivo-cd-cart-drawer .vivo-items-container ul,
#vivo-cd-upsells-container ul {
  background-color: rgba(230, 230, 230, 0.8);
}

#vivo-cd-upsells-container .vivo-upsell-info select {
  float: none;
  max-width: 100%;
  -moz-appearance: none;
  -webkit-appearance: none;
  -ms-appearance: none;
  -o-appearance: none;
  appearance: none;
  outline: 0;
  background-image: url(//cdn.shopify.com/s/files/1/2325/8929/files/arrow-down.png?6613408391136467583);
  background-size: 10px auto;
  background-repeat: no-repeat;
  background-position: calc(100% - 10px) center;
  background-color: #fff;
  font-size: 12px;
  text-transform: none;
  display: block;
  padding: 0 30px 2px 5px;
  padding-top: 4px;
  padding-bottom: 4px;
  border: 1px solid #ccc;
  border-radius: 0;
  min-height: 0;
  height: auto !important;
  cursor: pointer;
}

#vivo-cd-cart-container .free-shipping-message .special-offer-message {
  text-align: center;
  margin-bottom: 0.1rem;
  font-weight: 700;
}

#vivo-cd-cart-container .free-shipping-message.is-success .special-offer-message {
  color: #4AB857;
}

#vivo-cd-cart-container .free-shipping-message.is-error .special-offer-message {
  color: #a40000;
}

#vivo-cd-cart-drawer .vivo-progress-bar-container .vivo-locked-offer-progress-made {
  background-color: #a40000;
}

#vivo-cd-cart-container .free-shipping-message.is-success.vivo-progress-bar-container .vivo-locked-offer-progress-made {
  background-color: #4AB857;
}

#vivo-cd-cart-drawer .vivo-empty-cart-message {
  font-weight: 700;
  font-size: 18px;
  margin-bottom: 3rem;
  margin-top: 2rem;
  margin-left: 1rem;
  margin-right: 1rem;
}

#vivo-cd-cart-drawer .vivo-empty-cart {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}
</style>

<style scoped>
.fade-enter,
.fade-leave-to { opacity: 0; }
.fade-enter-active,
.fade-leave-active { transition: 500ms; }
.vivocart-item__discount {
  color: #4AB857;
  font-weight: 700;
  font-size: 14px;
}
</style>
