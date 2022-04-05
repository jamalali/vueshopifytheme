<template>
  <div class="hero-atc-rows flex-grow text-base">
    <div
      v-for="variant in variants"
      :key="variant.id"
      class="hero-atc-row flex justify-between items-center py-1 border-b border-atc-border-grey border-solid"
      :class="[
        !singleVariant ? 'multi' : '',
        outOfStock(variant) ? 'hover:bg-atc-hero-out-of-stock-grey' : '',
        notifyOpen(variant) ? 'bg-atc-hero-out-of-stock-grey h-14 ' : ''
      ]"
      :data-variant-id="variant.id"
    >
      <template v-if="outOfStock(variant)">
        <transition
          name="fade"
        >
          <div v-if="!notifyOpen(variant)" class="flex flex-row justify-between items-center w-full">
            <div class="flex flex-row md:flex-col lg:flex-col xxl:flex-row my-4 pl-4 font-bold cursor-pointer items-center md:items-start">
              <CompostableMiniIcon v-if="returnPouchCompostable(variant)" />
              <span class="pr-2" v-html="returnPouchTitle(variant)"></span>
              <span
                class="xxl:self-center xxl:mt-0-1 text-sm text-atc-hero-out-of-stock-red hero-atc-hype-text"
              >|| 'HeroAddToCartVariants.out_of_stock_text' ||</span>
            </div>
            <div v-if="bisnotify" class="flex text-lg pr-2 font-bold justify-center items-center">
              <a @click="spawnNotify(variant)" class="text-atc-money-back-grey font-bold text-sm text-center cursor-pointer">|| 'HeroAddToCartVariants.notify_me_text' ||<br/><small class="font-semibold">|| 'HeroAddToCartVariants.when_in_stock_text' ||</small></a>
            </div>
          </div>
          <div v-else class="flex flex-row justify-between items-center w-full">
            <div class="flex flex-col pl-4 font-bold w-full">
              <div class="text-atc-hero-out-of-stock-grey-2 -mt-2">|| 'HeroAddToCartVariants.notify_me_when_text' ||</div>
              <div class="text-black-1 font-bold pt-1">
                |<input @keyup.prevent="testKeyUp(variant.id, $event)" :data-variant-id="variant.id" class="pl-1 text-black-1 bg-atc-hero-out-of-stock-grey hero-oos-input" type="text" name="email_oos" id="email_oos" :placeholder="placeholderParsed" />
                <span></span>
              </div>
            </div>
            <div class="flex text-lg pr-8 font-bold justify-center items-center">
              <transition name="rotate" appear>
                <a @click.prevent.stop="requestRestockNotification(variant.id)" class="text-atc-money-back-grey font-bold text-sm text-center cursor-pointer">
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 34 34"><g transform="translate(-2732 -8628)"><circle cx="17" cy="17" r="17" transform="translate(2732 8628)" fill="#4ab857"/><path d="M2785,8651.606l8.176-6.472-8.176-6.7" transform="translate(-39 -0.682)" fill="none" stroke="#fafafa" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/></g></svg>
                </a>
              </transition>
            </div>
          </div>
        </transition>
      </template>
      <template v-else>
        <div class="flex flex-row md:flex-col lg:flex-col xxl:flex-row my-4 pl-4 font-bold items-center md:items-start">
          <CompostableMiniIcon v-if="returnPouchCompostable(variant)" />
          <span class="pr-2 pouch-span" v-html="returnPouchTitle(variant)"></span>
          <span
            class="xxl:self-center hero-atc-hype-text text-sm text-green-thrive"
          >{{ returnPouchHypeText(variant) }}</span>
        </div>
        <div class="flex text-lg pr-4 font-bold notranslate">
          <a class="cursor-pointer" @click="$emit('selected', variant.id, quantityForVariant(variant) - 1)">-</a>
          <span class="px-4">{{ quantityForVariant(variant) }}</span>
          <a class="cursor-pointer" @click="$emit('selected', variant.id, quantityForVariant(variant) + 1)">+</a>
        </div>
      </template>
    </div>
  </div>
</template>

<style scoped>
svg {
  width: 30px;
  height: 30px;
}
.cls-1{
  fill:#4ab857;
}
.cls-2{
  fill:none;
  stroke:#fafafa;
  stroke-linecap:round;
  stroke-linejoin:round;
  stroke-width:2px;
}

::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: #313131;
  opacity: 1; /* Firefox */
  font-weight: 700;
}

:-ms-input-placeholder { /* Internet Explorer 10-11 */
  color: #313131;
  font-weight: 700;
}

::-ms-input-placeholder { /* Microsoft Edge */
  color: #313131;
  font-weight: 700;
}

input:focus {
    outline: none;
}
/*
.hero-atc-row:last-child {
  border-bottom: none;
}
*/

.rotate-enter { transform: rotate(-90deg); }
.rotate-enter-active,
.rotate-leave-active { transition: 1s; }
.rotate-leave-to { transform: rotate(90deg); }

.fade-enter,
.fade-leave-to { opacity: 0; }
.fade-enter-active,
.fade-leave-active { transition: 2s; }

.hero-oos-input {
  width: 90%;
}
span.hero-atc-hype-text {
  margin-top: 0.25rem;
}
@media only screen and (min-width: 1200px) {
  span.hero-atc-hype-text {
    margin-top: 0.1rem;
  }
}

</style>


<script>
import breakpoints from "../breakpoints";
import CompostableMiniIcon from "./CompostableMiniIcon.vue";
import * as $ from 'jquery';

const VALID_EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const VARIANT_TITLE_REGEX = /(\([0-9]+(?:g|ml)\))/g;
export default {
  props: {
    product: Object,
    variants: Array,
    selectedVariantQuantities: Object,
    variantMetafields: {
      type: Object,
      default: () => {}
    }
  },
  components: {
    CompostableMiniIcon
  },

  data() {
    return {
      restockNotificationForm: null,
      tagsLowerCase: this.product.tags.map(tag => tag.toLowerCase()),
      emailInputPlaceholder: "|| 'HeroAddToCartVariants.email_input_placeholder' ||",
      bisnotify: true
    };
  },

  mounted() {
    let i;
    let tags = this.product.tags;
    for(i=0; i < tags.length; i++) {
      if(tags[i] == 'NoBisSignup') {
        this.bisnotify = false;
      }
    }
  },

  computed: {
    singleVariant() {
      return this.variants.length == 1;
    },

    variantsByQuantity() {
      /*return this.variants
        .sort((a, b) => a.inventory_quantity - b.inventory_quantity)
        .reverse();*/
      return this.variants; // Testing out just straight up returning the variants so they keep their Shopify order - deprecated now, only kept for legacy reference,
      // this is not in use anymore though.
    },

    totalQuantity() {
      return Object.values(this.selectedVariantQuantities).reduce(
        (total, variant) => total + variant.quantity,
        0
      );
    },

    hasSelectedVariantQuantities() {
      return this.totalQuantity > 0;
    },

    placeholderParsed() {
      return this.emailInputPlaceholder.replace(/\\"/g, '"').replace(/\\'/g, "'");
    }
  },

  methods: {
    validEmail(email) {
        return VALID_EMAIL_REGEX.test(email);
    },

    outOfStock(variant) {
      let dns = false,
          sku = variant.sku.toLowerCase();
      if (this.tagsLowerCase.includes('dns-' + sku)) dns = true;
      return dns || this.product.tags.includes('DNS') || variant.available == false;
    },

    spawnNotify(variant) {
      this.variants.map((val, index) => {
        if(variant.id === val.id) {
          val.notify_open = true;
          this.$forceUpdate();
        }
      });
    },

    notifyOpen(variant) {
      return typeof(variant.notify_open) !== 'undefined';
    },

    returnPouchTitle(variant) {
      let variantTitle = variant.public_title.split('/')[0];
      if(variantTitle.includes('(')) {
        // This means the title includes a weight, which needs special wrapping for fonts.
        variantTitle = variantTitle.replace(VARIANT_TITLE_REGEX, match => `<span class="font-medium">${match}</span>`);
      }
      return variantTitle;
    },

    returnPouchHypeText(variant) {
      // We use a variant field for marketing hype text if its there.
      if(typeof(this.variantMetafields) !== 'undefined' && typeof(this.variantMetafields[variant.sku]) == 'object'
      && typeof(this.variantMetafields[variant.sku].hype_text) == 'string') {
        return this.variantMetafields[variant.sku].hype_text.trim();
      }
      return '';
    },

    returnPouchCompostable(variant) {
      // Same again, Metafield denotes compostable packaging status.
      if(typeof(this.variantMetafields) !== 'undefined' && typeof(this.variantMetafields[variant.sku]) == 'object'
      && typeof(this.variantMetafields[variant.sku].compostable) == 'number') {
        return Boolean(this.variantMetafields[variant.sku].compostable);
      }
      return '';
    },

    quantityForVariant(variant) {
      return this.selectedVariantQuantities[variant.id] ? this.selectedVariantQuantities[variant.id].quantity : 0;
    },

    unitPriceForQty(qty) {
      let discount = 0;
      if (qty > 1) {
        discount = 0.0625;
      }
      if (qty > 2) {
        discount = 0.125;
      }

      const discountedPrice = this.basePrice - this.basePrice * discount;

      return (discountedPrice / 100).toFixed(2);
    },

    async requestRestockNotification(variantId) {
        let element = $(`input[data-variant-id=${variantId}]`);
        let span = $('span', element.parent());

        $(span).fadeOut(() => {
          $(this).removeClass('text-red').removeClass('text-green-thrive');
          const email = $(element).val();
          if (!this.validEmail(email)) {
            $(span).removeClass('text-green-thrive').addClass('text-red');
            $(span).text('- || 'HeroAddToCartVariants.invalid_email_text' ||');
            $(span).fadeIn();
            return;
          }
          try {
            axios({
              method: 'post',
              url: 'https://ometria.vivolife.co.uk/api/bis-signup/',
              data: {
                store: '|| 'globals.settings.locale_oos_tag' ||',
                variant: variantId,
                product: this.product.id,
                email
              }
            }).then((responseCode) => {
                if (responseCode.data.response == true) {
                    $(span).removeClass('text-red').addClass('text-green-thrive');
                    $(span).text('- || 'HeroAddToCartVariants.success_text' ||');
                    $(span).fadeIn();
                    setTimeout(() => {
                      $(span).closest('div.hero-atc-row').fadeOut(() => {
                        $(this).remove();
                          if(this.variants.length > 1) {
                            this.variants.map((val, index) => {
                              if(variantId === val.id) {
                                val.notify_open = false;
                                this.$delete(this.variants, index);
                              }
                            });
                          }
                      });
                    }, 2000);
                }
            }, (error) => {
              $(span).removeClass('text-green-thrive').addClass('text-red');
              $(span).text('- || 'HeroAddToCartVariants.please_try_again_text' ||');
              $(span).fadeIn();
            });
          } catch(e) {
            // Error
            $(span).removeClass('text-green-thrive').addClass('text-red');
            $(span).text('- || 'HeroAddToCartVariants.please_try_again_text' ||');
            $(span).fadeIn();
          }
        });
    },
    async testKeyUp(variantId, e) {
      if(e.keyCode === 13) {
        await this.requestRestockNotification(variantId);
        return true;
      } else {
        return false;
      }
    }
  }
};
</script>
